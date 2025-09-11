import type { Ride } from "@/types"

export default function RideCard({ ride }: { ride: Ride }) {
  const dt = new Date(ride.start)
  const date = dt.toLocaleDateString(undefined, {
    weekday: "short", 
    month: "short", 
    day: "numeric"
  })
  const time = dt.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit"
  })
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-slate-900 mb-1">
            {ride.title}
          </h3>
          <div className="text-sm text-slate-600">
            {date} at {time}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {ride.type}
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            {ride.pace}
          </span>
        </div>
      </div>
      
      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{ride.startLocation}</span>
        </div>
        
        {ride.distanceMiles && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
            </svg>
            <span>{ride.distanceMiles} miles</span>
          </div>
        )}
        
        {ride.routeUrl && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
            </svg>
            <span>Route: {ride.routeUrl}</span>
          </div>
        )}
      </div>
      
      {/* Notes */}
      {ride.notes && (
        <p className="text-sm text-slate-600 leading-relaxed">
          {ride.notes}
        </p>
      )}
    </div>
  )
}
