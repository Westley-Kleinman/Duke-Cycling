"use client"
import { useEffect, useState } from "react"
import RideCard from "@/components/RideCard"
import { supabase } from "@/lib/supabase"
import { groupByDay, isSameDay, isThisWeek } from "@/lib/rides"
import type { Ride } from "@/types"

export default function RideList() {
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRides() {
      // If Supabase is not configured, return empty array
      if (!supabase) {
        console.warn('Supabase not configured, returning empty rides list')
        setError('Database not configured. Please contact the administrator.')
        setLoading(false)
        return
      }

      try {
        const { data: rides, error } = await supabase
          .from('rides')
          .select('*')
          .eq('approved', true)
          .order('start_time', { ascending: true })

        if (error) {
          console.error('Error fetching rides:', error)
          setError('Failed to load rides from database')
          return
        }

        // Convert database format to component format
        const formattedRides = (rides || []).map(dbRide => ({
          id: String(dbRide.id),
          title: dbRide.title,
          start: dbRide.start_time,
          type: dbRide.type,
          pace: dbRide.pace,
          startLocation: dbRide.location,
          routeUrl: dbRide.route,
          distanceMiles: dbRide.distance ? parseFloat(dbRide.distance) : undefined,
          notes: dbRide.notes,
        }))

        setRides(formattedRides)
      } catch (error) {
        console.error('Failed to fetch rides:', error)
        setError('Failed to load rides')
      } finally {
        setLoading(false)
      }
    }

    fetchRides()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
          <p className="mt-4 text-slate-600">Loading rides...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-semibold text-red-900">Unable to Load Rides</h3>
          <p className="text-red-800 mt-2">{error}</p>
        </div>
      </div>
    )
  }

  // Show database status if no rides but database is configured
  const isDatabaseConfigured = !!supabase;
  const now = new Date()
  const today = rides.filter((r: Ride) => isSameDay(new Date(r.start), now))
  const week = rides.filter((r: Ride) => isThisWeek(new Date(r.start)))
  const byDay = groupByDay(week)

  return (
    <div className="space-y-8">
      {!isDatabaseConfigured && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900">Ride Submissions</h3>
          <p className="text-blue-800 text-sm mt-1">
            Submitted rides will appear here once the database is configured. In the meantime, ride submissions are being sent via email.
          </p>
        </div>
      )}
      
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Today</h2>
          <a className="text-sm text-duke-700 hover:underline" href="/rides/submit">Submit a ride</a>
        </div>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          {today.length ? today.map((r: Ride) => (
            <RideCard key={r.id} ride={r} />
          )) : <p className="text-slate-600">No rides today yet.</p>}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">This Week</h2>
        <div className="mt-3 space-y-6">
          {Object.entries(byDay).map(([day, list]) => (
            <div key={day}>
              <div className="text-slate-500 text-sm">{new Date(day).toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</div>
              <div className="mt-2 grid md:grid-cols-2 gap-4">
                {list.map((r) => <RideCard key={r.id} ride={r} />)}
              </div>
            </div>
          ))}
          {Object.keys(byDay).length === 0 && (
            <p className="text-slate-600">No rides scheduled for this week.</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Calendar</h2>
        <p className="text-slate-600 text-sm">Monthly view coming next. For now, see the full calendar.</p>
        <a className="inline-block mt-2 rounded-md border px-3 py-1.5 hover:bg-slate-50" href="/calendar">Open Calendar</a>
      </div>
    </div>
  )
}
