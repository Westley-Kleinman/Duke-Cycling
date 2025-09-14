import { Suspense } from "react"
import RideList from "@/components/RideList"

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gradient mb-6 leading-tight">
          Ride Calendar
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          View all upcoming rides, training sessions, and group adventures. 
          From beginner-friendly routes to competitive training sessions, there's something for every cyclist.
        </p>
      </div>
      <div>
        <Suspense fallback={
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-sm border border-slate-100">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-slate-700 font-medium">Loading rides...</span>
            </div>
          </div>
        }>
          <RideList />
        </Suspense>
      </div>
    </div>
  )
}
