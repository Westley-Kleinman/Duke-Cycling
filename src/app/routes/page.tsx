export const metadata = {
  title: "Routes",
  description: "Local cycling routes from Duke's campus with GPS downloads",
}

type Route = { 
  miles: number; 
  name: string; 
  description: string; 
  href: string;
}

const localRoutes: Route[] = [
  {
    miles: 25,
    name: "Out Craig to St. Mary's",
    description: "Short classic loop via Craig Rd to St. Mary's; great for easy spins.",
    href: "https://www.mapmyride.com/routes/view/29861446",
  },
  {
    miles: 27,
    name: "Tour of Orange County",
    description: "Quick sampler of quiet Orange County roads with rolling terrain.",
    href: "https://www.mapmyride.com/routes/view/23345928",
  },
  {
    miles: 31,
    name: "NC10 – Lawrence – St. Mary's",
    description: "Steady ride north of campus using NC-10 connectors and St. Mary's finish.",
    href: "https://www.mapmyride.com/routes/view/24027962",
  },
  {
    miles: 34,
    name: "NC10 – NHC – Dairyland – Rogers – Eubanks – Siani",
    description: "Popular Chapel Hill corridor with Dairyland and Rogers rollers; moderate.",
    href: "https://www.mapmyride.com/routes/view/23346022",
  },
  {
    miles: 37,
    name: "Bahama",
    description: "North Durham out-and-back to Bahama with gentle climbs and fast return.",
    href: "https://www.mapmyride.com/routes/view/23973874",
  },
  {
    miles: 38,
    name: "Lake Jordan",
    description: "Scenic spin toward Jordan Lake; mostly flat to rolling.",
    href: "https://www.mapmyride.com/routes/view/32954556",
  },
  {
    miles: 40,
    name: "Johnson Mill",
    description: "Orange County loop featuring Johnson Mill Rd rollers; great tempo route.",
    href: "https://www.mapmyride.com/routes/view/24324230",
  },
  {
    miles: 40,
    name: "Flat River",
    description: "North toward Flat River with rolling hills and pastoral scenery.",
    href: "https://www.mapmyride.com/routes/view/25911768",
  },
  {
    miles: 42,
    name: "Hillsborough",
    description: "Classic Orange County route to historic Hillsborough and back.",
    href: "https://www.mapmyride.com/routes/view/24328554",
  },
  {
    miles: 50,
    name: "Pittsboro",
    description: "Longer southwestern loop through Chatham County to Pittsboro.",
    href: "https://www.mapmyride.com/routes/view/22329112",
  },
  {
    miles: 52,
    name: "Creedmoor",
    description: "Northern adventure to Creedmoor with sustained climbs and fast descents.",
    href: "https://www.mapmyride.com/routes/view/29861528",
  },
  {
    miles: 60,
    name: "Chapel Hill – Carrboro – White Cross",
    description: "Extended tour of Chapel Hill area with White Cross climb challenge.",
    href: "https://www.mapmyride.com/routes/view/21715178",
  },
];

export default function RoutesPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Local Routes</h1>
        <p className="mt-3 text-slate-700 max-w-prose">
          All of these rides leave from Duke&apos;s campus. These are established routes from the Duke Cycling community 
          with GPS data available for download via MapMyRide.
        </p>
      </div>
      
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
                  View on MapMyRide
                </a>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">{route.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 className="font-bold text-blue-900 mb-2">Using MapMyRide</h2>
        <p className="text-blue-800 text-sm mb-3">
          Each route links to MapMyRide where you can:
        </p>
        <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
          <li>View detailed elevation profiles and turn-by-turn directions</li>
          <li>Export GPX files for your cycling computer or phone app</li>
          <li>See real-time weather and road conditions</li>
          <li>Track your rides and compare times with the community</li>
        </ul>
      </div>
      
      <p className="mt-6 text-sm text-slate-600">
        Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-routes" target="_blank" rel="noreferrer">Duke Cycling Road Routes</a>. 
        Routes range from 25-60 miles and cover the scenic roads around Durham, Chapel Hill, and Orange County.
      </p>
    </div>
  )
}
