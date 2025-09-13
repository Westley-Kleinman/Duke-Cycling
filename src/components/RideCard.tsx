import type { Ride } from "@/types"

export default function RideCard({ ride }: { ride: Ride }) {
  const dt = new Date(ride.start)
  const date = dt.toLocaleDateString(undefined, {
    weekday: "long", 
    month: "long", 
    day: "numeric"
  })
  const time = dt.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit"
  })
  
  return (
    <div className="group bg-white rounded-xl border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:border-slate-200">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-duke-blue transition-colors">
            {ride.title}
          </h3>
          <div className="text-slate-600 font-medium text-sm">
            {date} • {time}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            {ride.type}
          </span>
          <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
            Pace {ride.pace}
          </span>
        </div>
      </div>
      
      {/* Details Section */}
      <div className="space-y-3 mb-4">
        {/* Location */}
        <div className="flex items-center text-slate-700">
          <div className="w-4 h-4 mr-2 flex-shrink-0">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="font-medium text-sm">{ride.startLocation}</span>
        </div>
        
        {/* Distance */}
        {ride.distanceMiles && (
          <div className="flex items-center text-slate-700">
            <div className="w-4 h-4 mr-2 flex-shrink-0">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="font-medium text-sm">{ride.distanceMiles} miles</span>
          </div>
        )}
        
        {/* Route */}
        {ride.routeUrl && (
          <div className="flex items-center text-slate-700">
            <div className="w-4 h-4 mr-2 flex-shrink-0">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <a 
              href={ride.routeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors text-sm"
            >
              View Route
            </a>
          </div>
        )}
      </div>
      
      {/* Notes Section */}
      {ride.notes && (
        <div className="pt-4 border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed text-sm">
            {ride.notes}
          </p>
        </div>
      )}
    </div>
  )
}
