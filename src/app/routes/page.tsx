type Route = { miles: number; name: string; description: string; href?: string }

const localRoutes: Route[] = [
  {
    miles: 25,
    name: "Out Craig to St. Mary's",
    description: "Short classic loop via Craig Rd to St. Mary’s; great for easy spins.",
    // href: "https://mapmyride.com/routes/...", // legacy MapMyRide link pending
  },
  {
    miles: 27,
    name: "Tour of Orange County",
    description: "Quick sampler of quiet Orange County roads with rolling terrain.",
  },
  {
    miles: 31,
    name: "NC10 – Lawrence – St. Mary's",
    description: "Steady ride north of campus using NC-10 connectors and St. Mary’s finish.",
  },
  {
    miles: 34,
    name: "NC10 – NHC – Dairyland – Rogers – Eubanks – Siani",
    description: "Popular Chapel Hill corridor with Dairyland and Rogers rollers; moderate.",
  },
  {
    miles: 37,
    name: "Bahama",
    description: "North Durham out-and-back to Bahama with gentle climbs and fast return.",
  },
  {
    miles: 38,
    name: "Lake Jordan",
    description: "Scenic spin toward Jordan Lake; mostly flat to rolling.",
  },
  {
    miles: 40,
    name: "Johnson Mill",
    description: "Orange County loop featuring Johnson Mill Rd rollers; great tempo route.",
  },
  {
    miles: 40,
    name: "Butner",
    description: "Northern loop toward Butner; smooth roads and steady paceline sections.",
  },
  {
    miles: 58,
    name: "Hurdle Mills",
    description: "Longer endurance loop through Hurdle Mills farmland; bring snacks.",
  },
  {
    miles: 66,
    name: "Saxapahaw",
    description: "Classic weekend long ride to Saxapahaw with cafe stop options.",
  },
  {
    miles: 69,
    name: "Rougemont – Bahama",
    description: "Extended north Durham loop linking Rougemont and Bahama; punchy hills.",
  },
  {
    miles: 74,
    name: "The P-Ride",
    description: "Fast training route with lots of rolling terrain; best for experienced riders.",
  },
]

export default function RoutesPage() {
  const routes = localRoutes.sort((a, b) => a.miles - b.miles)
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Local Routes</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        All of these rides leave from Duke&rsquo;s campus. Links on the original Duke Cycling site reference MapMyRide; we’ll update to Strava or RideWithGPS where available.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {routes.map((r) => (
          <div key={`${r.name}-${r.miles}`} className="card p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-slate-600">{r.miles} mi</div>
              </div>
              <div className="flex items-center gap-3">
                {r.href ? (
                  <a
                    className="btn btn-secondary text-sm"
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View route
                  </a>
                ) : (
                  <a
                    className="btn btn-secondary text-sm opacity-50 cursor-not-allowed"
                    aria-disabled
                  >
                    View route
                  </a>
                )}
                {r.href ? (
                  <a
                    className="text-sm text-duke-700 hover:underline"
                    href={`data:text/plain;charset=utf-8,${encodeURIComponent(`[InternetShortcut]\nURL=${r.href}\n` )}`}
                    download={`${r.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.url`}
                  >
                    Download link (.url)
                  </a>
                ) : (
                  <span className="text-xs text-slate-500">Download link soon</span>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">{r.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-600">
        Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-routes" target="_blank" rel="noreferrer">dukecycling.org/road/road-routes</a>. We’re adding direct route links (MapMyRide/Strava/RideWithGPS) as we collect them.
      </p>
    </div>
  )
}
