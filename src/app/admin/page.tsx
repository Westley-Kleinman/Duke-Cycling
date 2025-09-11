"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { Ride as DatabaseRide } from "@/lib/supabase"

export default function AdminPage() {
  const [pendingRides, setPendingRides] = useState<DatabaseRide[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<number | null>(null)

  useEffect(() => {
    fetchPendingRides()
  }, [])

  const fetchPendingRides = async () => {
    if (!supabase) {
      console.error('Supabase not configured')
      setLoading(false)
      return
    }
    
    const { data, error } = await supabase
      .from('rides')
      .select('*')
      .eq('approved', false)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching pending rides:', error)
    } else {
      setPendingRides(data || [])
    }
    setLoading(false)
  }

  const approveRide = async (id: number) => {
    if (!supabase) {
      alert('Database not configured')
      return
    }
    
    setActionLoading(id)
    const { error } = await supabase
      .from('rides')
      .update({ approved: true })
      .eq('id', id)
    
    if (error) {
      console.error('Error approving ride:', error)
      alert('Error approving ride')
    } else {
      fetchPendingRides() // Refresh the list
    }
    setActionLoading(null)
  }

  const deleteRide = async (id: number) => {
    if (!supabase) {
      alert('Database not configured')
      return
    }
    
    setActionLoading(id)
    const { error } = await supabase
      .from('rides')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting ride:', error)
      alert('Error deleting ride')
    } else {
      fetchPendingRides() // Refresh the list
    }
    setActionLoading(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-duke-blue mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading pending rides...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
            Admin Panel
          </h1>
          <p className="text-lg text-slate-600">
            Review and approve submitted rides
          </p>
        </div>

        {pendingRides.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">All caught up!</h2>
            <p className="text-slate-600">No pending rides to review.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                {pendingRides.length} Pending Ride{pendingRides.length !== 1 ? 's' : ''}
              </h2>
            </div>
            
            {pendingRides.map((ride) => (
              <div key={ride.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{ride.title}</h3>
                    <p className="text-sm text-slate-500">
                      Submitted: {new Date(ride.created_at || '').toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => approveRide(ride.id!)}
                      disabled={actionLoading === ride.id}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {actionLoading === ride.id ? 'Approving...' : 'Approve'}
                    </button>
                    <button
                      onClick={() => deleteRide(ride.id!)}
                      disabled={actionLoading === ride.id}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {actionLoading === ride.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="font-semibold text-slate-700">Date & Time:</span>
                    <p className="text-slate-600">
                      {new Date(ride.start_time).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Type:</span>
                    <p className="text-slate-600 capitalize">{ride.type}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Pace:</span>
                    <p className="text-slate-600">{ride.pace}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Distance:</span>
                    <p className="text-slate-600">{ride.distance} miles</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Start Location:</span>
                    <p className="text-slate-600">{ride.location}</p>
                  </div>
                  {ride.route && (
                    <div>
                      <span className="font-semibold text-slate-700">Route:</span>
                      <p className="text-slate-600">
                        <a href={ride.route} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                          View Route
                        </a>
                      </p>
                    </div>
                  )}
                </div>

                {ride.notes && (
                  <div>
                    <span className="font-semibold text-slate-700">Notes:</span>
                    <p className="text-slate-600 mt-1">{ride.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
