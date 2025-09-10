import Link from "next/link"
import RideList from "@/components/RideList"

type Route = { miles: number; name: string; description: string; href?: string }

const localRoutes: Route[] = [
  {
    miles: 25,
    name: "Out Craig to St. Mary's",
    description: "Short classic loop via Craig Rd to St. Mary's; great for easy spins.",
    href: "https://dukecycling.org/road/road-routes", // Reference to original MapMyRide
  },
  {
    miles: 27,
    name: "Tour of Orange County",
    description: "Quick sampler of quiet Orange County roads with rolling terrain.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 31,
    name: "NC10 – Lawrence – St. Mary's",
    description: "Steady ride north of campus using NC-10 connectors and St. Mary's finish.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 34,
    name: "NC10 – NHC – Dairyland – Rogers – Eubanks – Siani",
    description: "Popular Chapel Hill corridor with Dairyland and Rogers rollers; moderate.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 37,
    name: "Bahama",
    description: "North Durham out-and-back to Bahama with gentle climbs and fast return.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 38,
    name: "Lake Jordan",
    description: "Scenic spin toward Jordan Lake; mostly flat to rolling.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 40,
    name: "Johnson Mill",
    description: "Orange County loop featuring Johnson Mill Rd rollers; great tempo route.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 40,
    name: "Butner",
    description: "Northern loop toward Butner; smooth roads and steady paceline sections.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 58,
    name: "Hurdle Mills",
    description: "Longer endurance loop through Hurdle Mills farmland; bring snacks.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 66,
    name: "Saxapahaw",
    description: "Classic weekend long ride to Saxapahaw with cafe stop options.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 69,
    name: "Rougemont – Bahama",
    description: "Extended north Durham loop linking Rougemont and Bahama; punchy hills.",
    href: "https://dukecycling.org/road/road-routes",
  },
  {
    miles: 74,
    name: "The P-Ride",
    description: "Fast training route with lots of rolling terrain; best for experienced riders.",
    href: "https://dukecycling.org/road/road-routes",
  },
]

export default function RidesPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Rides</h1>
          <p className="mt-2 text-slate-700 max-w-prose">Today, this week, and the club calendar.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/rides/submit" className="rounded-md bg-duke-700 text-white px-4 py-2 font-medium hover:bg-duke-800">Submit a ride</Link>
          <Link href="/calendar" className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-900 hover:bg-slate-50">Open calendar</Link>
        </div>
      </div>
      <div className="mt-8">
        <RideList />
      </div>

      {/* Local Routes Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Local Routes</h2>
        <p className="text-slate-700 max-w-prose mb-6">
          All of these rides leave from Duke&rsquo;s campus. These are established routes from the Duke Cycling community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localRoutes.sort((a, b) => a.miles - b.miles).map((route) => (
            <div key={`${route.name}-${route.miles}`} className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{route.name}</div>
                  <div className="text-sm text-slate-600">{route.miles} mi</div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    className="btn btn-secondary text-sm"
                    href={route.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View details
                  </a>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">{route.description}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-sm text-slate-600">
          Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-routes" target="_blank" rel="noreferrer">Duke Cycling Road Routes</a>. Individual MapMyRide links available on the original site.
        </p>
      </div>
    </div>
  )
}
