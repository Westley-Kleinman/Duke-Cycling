import type { Ride } from "@/types"

export default function RideCard({ ride }: { ride: Ride }) {
  const dt = new Date(ride.start)
  const date = dt.toLocaleString(undefined, {
    weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
  })
  return (
    <div className="rounded-lg border p-4 bg-white">
      <div className="text-sm text-slate-500">{date}</div>
      <div className="font-semibold mt-1">{ride.title}</div>
      <div className="text-sm text-slate-600 mt-1 flex flex-wrap gap-2">
        {ride.type && <span className="px-2 py-0.5 rounded-full bg-slate-100">{ride.type}</span>}
        {ride.pace && <span className="px-2 py-0.5 rounded-full bg-slate-100">{ride.pace}</span>}
        {ride.distanceMiles && <span className="px-2 py-0.5 rounded-full bg-slate-100">{ride.distanceMiles} mi</span>}
      </div>
      {ride.startLocation && <div className="text-sm mt-1">Start: {ride.startLocation}</div>}
      <div className="text-sm mt-1">
        {ride.routeUrl && (
          <a className="text-duke-700 hover:underline" href={ride.routeUrl} target="_blank" rel="noreferrer">Route</a>
        )}
      </div>
      {ride.notes && <p className="text-sm text-slate-600 mt-2 line-clamp-3">{ride.notes}</p>}
    </div>
  )
}
