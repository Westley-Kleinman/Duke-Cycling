export default function RoutesPage() {
  const routes = [
    { name: "Duke Loop - Social", href: "#" },
    { name: "Paceline - Training", href: "#" },
    { name: "Gravel - Duke Forest", href: "#" },
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Routes</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Our favorite road and gravel routes around Durham. Replace with Strava
        or RideWithGPS links.
      </p>
      <ul className="mt-4 space-y-2">
        {routes.map((r) => (
          <li key={r.name}>
            <a className="text-duke-700 hover:underline" href={r.href} target="_blank" rel="noreferrer">
              {r.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
