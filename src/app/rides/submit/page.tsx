"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function SubmitRidePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    type: 'social',
    pace: 'B',
    location: '',
    route: '',
    notes: '',
    distance: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    console.log('Form submitted with data:', formData)
    
    try {
      let databaseSaved = false;
      
      // Try to save to Supabase database if available
      if (supabase) {
        console.log('Attempting to save to database...')
        
        const { error } = await supabase
          .from('rides')
          .insert([
            {
              title: formData.title,
              start_time: new Date(formData.start).toISOString(), // Convert to proper UTC ISO string
              type: formData.type,
              pace: formData.pace,
              location: formData.location,
              route: formData.route,
              distance: formData.distance,
              notes: formData.notes,
              approved: true // Auto-approve rides for immediate display
            }
          ])

        if (error) {
          console.error('Supabase error:', error)
        } else {
          console.log('Successfully saved to database')
          databaseSaved = true;
        }
      } else {
        console.log('Supabase not configured, skipping database save')
      }

      // Send notification email via Formspree
      console.log('Sending email notification...')
      const formspreeResponse = await fetch('https://formspree.io/f/xandvqvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          subject: `New Ride Submission: ${formData.title}`,
          title: formData.title,
          start_time: new Date(formData.start).toISOString(), // Convert to proper UTC ISO string
          type: formData.type,
          pace: formData.pace,
          location: formData.location,
          route: formData.route,
          distance: formData.distance,
          notes: formData.notes,
          database_saved: databaseSaved,
          message: databaseSaved 
            ? 'New ride submitted and automatically published to the website' 
            : 'New ride submitted via email - database not available'
        }),
      });

      if (!formspreeResponse.ok) {
        throw new Error('Failed to submit form');
      }
      
      console.log('Email notification sent successfully')
      setSubmitStatus('success')
      
      // Show success message and redirect after 2 seconds
      setTimeout(() => {
        router.push('/rides')
      }, 2000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Submit a New Ride
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Share a ride with the Duke Cycling community. Your submission will be reviewed and added to our calendar.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-2xl flex items-center gap-3" role="alert">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-bold">Success!</strong>
                  <span className="ml-2">Your ride has been submitted. Redirecting to rides page...</span>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-2xl flex items-center gap-3" role="alert">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-bold">Error!</strong>
                  <span className="ml-2">Something went wrong. Please try again or contact us directly.</span>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Title */}
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-bold text-slate-800 mb-3">
                  Ride Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium"
                  placeholder="e.g., Saturday Morning Training Ride"
                />
              </div>

              {/* Date/Time */}
              <div className="md:col-span-2">
                <label htmlFor="start" className="block text-sm font-bold text-slate-800 mb-3">
                  Date & Start Time *
                </label>
                <input
                  type="datetime-local"
                  id="start"
                  name="start"
                  required
                  value={formData.start}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium"
                />
              </div>

              {/* Ride Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-bold text-slate-800 mb-3">
                  Ride Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium bg-white"
                >
                  <option value="social">Social</option>
                  <option value="training">Training</option>
                  <option value="race">Race</option>
                  <option value="special-event">Special Event</option>
                </select>
              </div>

              {/* Pace */}
              <div>
                <label htmlFor="pace" className="block text-sm font-bold text-slate-800 mb-3">
                  Pace Group *
                </label>
                <select
                  id="pace"
                  name="pace"
                  required
                  value={formData.pace}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium bg-white"
                >
                  <option value="5-7">5-7 mph (Recovery/Social)</option>
                  <option value="7-10">7-10 mph (Easy Social)</option>
                  <option value="10-13">10-13 mph (Casual)</option>
                  <option value="13-16">13-16 mph (Moderate)</option>
                  <option value="16-20">16-20 mph (Brisk)</option>
                  <option value="20+">20+ mph (Fast/Training)</option>
                  <option value="all">All Paces</option>
                </select>
              </div>

              {/* Location */}
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-bold text-slate-800 mb-3">
                  Start Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium"
                  placeholder="e.g., Duke Chapel Parking Lot"
                />
              </div>

              {/* Route Link */}
              <div>
                <label htmlFor="route" className="block text-sm font-bold text-slate-800 mb-3">
                  Route Link
                  <span className="text-slate-500 font-normal ml-1">(optional)</span>
                </label>
                <input
                  type="url"
                  id="route"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium"
                  placeholder="https://strava.com/routes/..."
                />
              </div>

              {/* Distance */}
              <div>
                <label htmlFor="distance" className="block text-sm font-bold text-slate-800 mb-3">
                  Distance
                  <span className="text-slate-500 font-normal ml-1">(miles, optional)</span>
                </label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium"
                  placeholder="e.g., 40"
                  min="1"
                  max="200"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-bold text-slate-800 mb-3">
                  Additional Notes
                  <span className="text-slate-500 font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all duration-200 text-slate-900 font-medium resize-none"
                  placeholder="e.g., No-drop ride, bring lights for early morning start, coffee stop planned..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-12 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none min-w-[200px]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit Ride'
                )}
              </button>
              <p className="text-slate-500 text-sm mt-4">
                Your ride will be reviewed and published to the calendar
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
