import RideCard from "@/components/RideCard"
import { supabase } from "@/lib/supabase"
import { groupByDay, isSameDay, isThisWeek } from "@/lib/rides"
import type { Ride } from "@/types"

// server component
async function getApprovedRides(): Promise<Ride[]> {
  const { data: rides, error } = await supabase
    .from('rides')
    .select('*')
    .eq('approved', true)
    .order('start_time', { ascending: true })

  if (error) {
    console.error('Error fetching rides:', error)
    return []
  }

  // Convert database format to component format
  return (rides || []).map(dbRide => ({
    id: String(dbRide.id),
    title: dbRide.title,
    start: dbRide.start_time,
    type: dbRide.type,
    pace: dbRide.pace,
    startLocation: dbRide.location,
    routeUrl: dbRide.route,
    distanceMiles: dbRide.distance ? parseFloat(dbRide.distance) : undefined,
    notes: dbRide.notes
  }))
}

export default async function RideList() {
  const rides = await getApprovedRides()
  const now = new Date()
  const today = rides.filter((r: Ride)=> isSameDay(new Date(r.start), now))
  const week = rides.filter((r: Ride)=> isThisWeek(new Date(r.start)))
  const byDay = groupByDay(week)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Today</h2>
          <a className="text-sm text-duke-700 hover:underline" href="/rides/submit">Submit a ride</a>
        </div>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          {today.length ? today.map((r: Ride)=> (
            <RideCard key={r.id} ride={r} />
          )) : <p className="text-slate-600">No rides today yet.</p>}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">This Week</h2>
        <div className="mt-3 space-y-6">
          {Object.entries(byDay).map(([day, list])=> (
            <div key={day}>
              <div className="text-slate-500 text-sm">{new Date(day).toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</div>
              <div className="mt-2 grid md:grid-cols-2 gap-4">
                {list.map((r)=> <RideCard key={r.id} ride={r} />)}
              </div>
            </div>
          ))}
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
