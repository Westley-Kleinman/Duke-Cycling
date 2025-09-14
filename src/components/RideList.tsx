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
        setError('Database not configured.')
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
      <div className="text-center py-16">
        <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-6 shadow-lg border border-slate-100">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-700 font-medium">Loading rides...</span>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-16">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-8 py-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-5 h-5">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <strong className="font-bold">Error Loading Rides</strong>
          </div>
          <p className="text-sm">{error}</p>
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

  // Debug: log the rides and their dates
  console.log('All rides:', rides.map(r => ({ title: r.title, start: r.start, date: new Date(r.start), localDate: new Date(r.start).toString() })))
  console.log('Today rides:', today.length)
  console.log('Week rides (showing all):', week.length)
  console.log('Grouped by day:', byDay)
  console.log('Current time:', now.toString())

  return (
    <div className="space-y-12">
      {!isDatabaseConfigured && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-amber-900 mb-2">Database Configuration Pending</h3>
          <p className="text-amber-800 text-sm">
            Submitted rides will appear here once the database is configured. In the meantime, ride submissions are being sent via email.
          </p>
        </div>
      )}
      
      {rides.length === 0 && isDatabaseConfigured ? (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No rides scheduled</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              There are currently no upcoming rides on the calendar. Check back soon or submit a ride to get things started!
            </p>
            <a
              href="/rides/submit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Submit a Ride
            </a>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Today</h2>
              <a 
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors" 
                href="/rides/submit"
              >
                Submit a ride
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              {today.length ? today.map((r: Ride) => (
                <RideCard key={r.id} ride={r} />
              )) : (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-600 font-medium">No rides scheduled for today</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">This Week</h2>
            <div className="space-y-8">
              {Object.entries(byDay).map(([day, list]) => (
                <div key={day}>
                  <div className="text-slate-600 font-semibold text-lg mb-4">
                    {new Date(day).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                    {list.map((r) => <RideCard key={r.id} ride={r} />)}
                  </div>
                </div>
              ))}
              {Object.keys(byDay).length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-600 font-medium">No rides scheduled for this week</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/calendar"
              className="inline-flex items-center gap-2 bg-white text-slate-700 font-bold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Full Calendar
            </a>
          </div>
        </>
      )}
    </div>
  )
}
