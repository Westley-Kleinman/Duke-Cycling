import Link from "next/link"
import RideList from "@/components/RideList"

export default function RidesPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Rides</h1>
          <p className="mt-2 text-slate-700 max-w-prose">Today, this week, and the club calendar.</p>
          <p className="mt-2 text-sm text-slate-600 max-w-prose">
            <strong>Reminder:</strong> CampusGroups signup is required for participation in Duke-organized races, practices, and official club activities.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/rides/submit" className="rounded-md bg-duke-700 text-white px-4 py-2 font-medium hover:bg-duke-800">Submit a ride</Link>
          <Link href="/calendar" className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-900 hover:bg-slate-50">Open calendar</Link>
          <a 
            href="https://duke.campusgroups.com/DukeCycling/club_signup" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700"
          >
            Join Club
          </a>
        </div>
      </div>
      <div className="mt-8">
        <RideList />
      </div>
    </div>
  )
}
