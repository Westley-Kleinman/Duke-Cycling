type Route = { miles: number; name: string; href?: string }

const localRoutes: Route[] = [
  { miles: 25, name: "Out Craig to St. Mary's" },
  { miles: 27, name: "Tour of Orange County" },
  { miles: 31, name: "NC10 – Lawrence – St. Mary's" },
  { miles: 34, name: "NC10 – NHC – Dairyland – Rogers – Eubanks – Siani" },
  { miles: 37, name: "Bahama" },
  { miles: 38, name: "Lake Jordan" },
  { miles: 40, name: "Johnson Mill" },
  { miles: 40, name: "Butner" },
  { miles: 58, name: "Hurdle Mills" },
  { miles: 66, name: "Saxapahaw" },
  { miles: 69, name: "Rougemont – Bahama" },
  { miles: 74, name: "The P-Ride" },
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
          <div key={`${r.name}-${r.miles}`} className="card p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-slate-600">{r.miles} mi</div>
            </div>
            {r.href ? (
              <a
                className="btn btn-secondary text-sm"
                href={r.href}
                target="_blank"
                rel="noreferrer"
              >
                Map & details
              </a>
            ) : (
              <span className="text-xs text-slate-500">Link coming soon</span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-600">
        Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-routes" target="_blank" rel="noreferrer">dukecycling.org/road/road-routes</a>
      </p>
    </div>
  )
}
