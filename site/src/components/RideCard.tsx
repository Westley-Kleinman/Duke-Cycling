import type { Ride } from "@/types"

export default function RideCard({ ride }: { ride: Ride }) {
  const dt = new Date(ride.start)
  const date = dt.toLocaleString(undefined, {
    weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
  })
  
  const getTypeIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'road':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'mountain':
      case 'mtb':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }
  
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      {/* Header with date and type */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
          {date}
        </div>
        {ride.type && (
          <div className="flex items-center gap-1 text-xs text-blue-900 bg-blue-100 px-2 py-1 rounded-full">
            {getTypeIcon(ride.type)}
            <span>{ride.type}</span>
          </div>
        )}
      </div>
      
      {/* Title */}
      <h3 className="font-bold text-lg text-blue-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
        {ride.title}
      </h3>
      
      {/* Ride details */}
      <div className="flex flex-wrap gap-2 mb-4">
        {ride.pace && (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {ride.pace}
          </span>
        )}
        {ride.distanceMiles && (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {ride.distanceMiles} mi
          </span>
        )}
      </div>
      
      {/* Location */}
      {ride.startLocation && (
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Start: {ride.startLocation}</span>
        </div>
      )}
      
      {/* Notes */}
      {ride.notes && (
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {ride.notes}
        </p>
      )}
      
      {/* Route link */}
      {ride.routeUrl && (
        <div className="pt-3 border-t border-slate-100">
          <a 
            href={ride.routeUrl} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Route
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
