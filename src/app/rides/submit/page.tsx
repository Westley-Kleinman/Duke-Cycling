"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function SubmitRidePage() {
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
      // Check if Supabase is configured
      if (!supabase) {
        console.error('Supabase client not initialized - environment variable missing')
        alert('Database not configured. Please contact the administrator.')
        setSubmitStatus('error')
        return
      }

      console.log('Attempting to save to database...')
      
      // Save to Supabase database
      const { error } = await supabase
        .from('rides')
        .insert([
          {
            title: formData.title,
            start_time: formData.start,
            type: formData.type,
            pace: formData.pace,
            location: formData.location,
            route: formData.route,
            distance: formData.distance,
            notes: formData.notes,
            approved: false // Requires admin approval
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      console.log('Successfully saved to database')

      // Also send notification email via Formspree (optional)
      try {
        await fetch('https://formspree.io/f/xandvqvg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            message: 'New ride submitted - check admin panel for approval'
          }),
        });
        console.log('Email notification sent')
      } catch (emailError) {
        console.warn('Email notification failed, but ride was saved:', emailError)
      }

      setSubmitStatus('success')
      console.log('Form submission completed successfully')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          start: '',
          type: 'social',
          pace: 'B',
          location: '',
          route: '',
          notes: '',
          distance: ''
        })
        setSubmitStatus('idle')
      }, 4000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
            Submit a Ride
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Propose a club ride for the community. Your submission will be reviewed and added to our calendar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-95 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 shadow-xl">
            
            {submitStatus === 'success' && (
              <div className="md:col-span-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-6" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your ride has been submitted for review. Thanks!</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative mb-6" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> Something went wrong. Please try again later.</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                  Ride Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="e.g., Morning Training Ride"
                />
              </div>

              {/* Date/Time */}
              <div className="md:col-span-2">
                <label htmlFor="start" className="block text-sm font-semibold text-slate-700 mb-2">
                  Date & Start Time *
                </label>
                <input
                  type="datetime-local"
                  id="start"
                  name="start"
                  required
                  value={formData.start}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                />
              </div>

              {/* Ride Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-slate-700 mb-2">
                  Ride Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all bg-white"
                >
                  <option value="social">Social</option>
                  <option value="training">Training</option>
                  <option value="race">Race</option>
                  <option value="special-event">Special Event</option>
                </select>
              </div>

              {/* Pace */}
              <div>
                <label htmlFor="pace" className="block text-sm font-semibold text-slate-700 mb-2">
                  Pace Group *
                </label>
                <select
                  id="pace"
                  name="pace"
                  required
                  value={formData.pace}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all bg-white"
                >
                  <option value="A">A (&gt;21 mph)</option>
                  <option value="B">B (18-21 mph)</option>
                  <option value="C">C (15-18 mph)</option>
                  <option value="D">D (&lt;15 mph)</option>
                  <option value="all">All Paces</option>
                </select>
              </div>

              {/* Location */}
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-2">
                  Start Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="e.g., Duke Chapel"
                />
              </div>

              {/* Route Link */}
              <div>
                <label htmlFor="route" className="block text-sm font-semibold text-slate-700 mb-2">
                  Route Link
                </label>
                <input
                  type="url"
                  id="route"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="https://strava.com/routes/..."
                />
              </div>

              {/* Distance */}
              <div>
                <label htmlFor="distance" className="block text-sm font-semibold text-slate-700 mb-2">
                  Distance (miles)
                </label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="e.g., 40"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="e.g., No-drop ride, bring lights, etc."
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto btn btn-primary px-12 py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Ride'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
