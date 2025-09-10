export default function TeamPage() {
  const officers = [
    { name: "President & Safety Officer", person: "TBD" },
    { name: "Treasurer", person: "TBD" },
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Team & Officers</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Student officers and ride leaders keep the club rolling.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {officers.map((o) => (
          <div key={o.name} className="rounded-lg border p-4">
            <div className="text-slate-500 text-sm">{o.name}</div>
            <div className="font-medium">{o.person}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
