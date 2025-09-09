export default function LocalRidesPage(){
  const links = [
    { name: "Durham Bike Co-op", href: "https://www.durhambikecoop.org/" },
    { name: "Triangle MTB", href: "https://www.trianglemtb.com/" },
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Local Group Rides</h1>
      <p className="mt-3 text-slate-700">Links to shops and groups that host regular rides.</p>
      <ul className="mt-4 space-y-2">
        {links.map(l=> (
          <li key={l.name}><a className="text-duke-700 hover:underline" href={l.href} target="_blank" rel="noreferrer">{l.name}</a></li>
        ))}
      </ul>
    </div>
  )
}
