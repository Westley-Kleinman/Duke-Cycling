export default function RidesPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Group Rides</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Weekly rides during the semester. No-drop social rides and training
        rides by pace. Check our Instagram/Strava for up-to-date ride posts.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">No-Drop Social</h3>
          <p className="text-slate-600">15–25 miles, conversational pace.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Training Ride</h3>
          <p className="text-slate-600">Groups by pace, 20–40+ miles.</p>
        </div>
      </div>
    </div>
  )
}
