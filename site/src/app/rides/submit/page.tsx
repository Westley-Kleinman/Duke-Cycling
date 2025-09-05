"use client"
import { useState } from "react"

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
    
    try {
      // Format the GitHub issue body
      const issueBody = `# New Ride Submission
title: ${formData.title}
start: ${formData.start}
type: ${formData.type}
pace: ${formData.pace}
location: ${formData.location}
${formData.route ? `route: ${formData.route}` : ''}
${formData.distance ? `distance: ${formData.distance} miles` : ''}
notes: ${formData.notes || 'No additional notes.'}`

      // Create GitHub issue URL
      const issueUrl = `https://github.com/Westley-Kleinman/Duke-Cycling/issues/new?labels=ride&title=${encodeURIComponent(`Ride: ${formData.title}`)}&body=${encodeURIComponent(issueBody)}`
      
      // Open in new tab
      window.open(issueUrl, '_blank')
      
      setSubmitStatus('success')
      
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
      }, 3000)
      
    } catch (error) {
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

              {/* Date & Time */}
              <div>
                <label htmlFor="start" className="block text-sm font-semibold text-slate-700 mb-2">
                  Date & Time *
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

              {/* Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-slate-700 mb-2">
                  Ride Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                >
                  <option value="social">Social</option>
                  <option value="training">Training</option>
                  <option value="racing">Racing</option>
                  <option value="road">Road</option>
                  <option value="mountain">Mountain</option>
                  <option value="gravel">Gravel</option>
                </select>
              </div>

              {/* Pace */}
              <div>
                <label htmlFor="pace" className="block text-sm font-semibold text-slate-700 mb-2">
                  Pace Group
                </label>
                <select
                  id="pace"
                  name="pace"
                  value={formData.pace}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                >
                  <option value="A">A (Fast/Competitive)</option>
                  <option value="B">B (Moderate)</option>
                  <option value="C">C (Relaxed/Social)</option>
                  <option value="mixed">Mixed Pace</option>
                </select>
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
                  placeholder="e.g., 25"
                  min="1"
                  max="200"
                />
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
                  placeholder="e.g., BC Plaza, Duke Campus"
                />
              </div>

              {/* Route URL */}
              <div className="md:col-span-2">
                <label htmlFor="route" className="block text-sm font-semibold text-slate-700 mb-2">
                  Route URL (optional)
                </label>
                <input
                  type="url"
                  id="route"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all"
                  placeholder="https://ridewithgps.com/routes/..."
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
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-duke-blue focus:border-transparent transition-all resize-none"
                  placeholder="Any additional details about the ride..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !formData.title || !formData.start || !formData.location}
                className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg ${
                  isSubmitting || !formData.title || !formData.start || !formData.location
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Ride'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Ride submitted successfully!</span>
                </div>
                <p className="text-green-700 mt-1">
                  Your ride has been submitted for review. Check GitHub for updates.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center gap-2 text-red-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-semibold">Submission failed</span>
                </div>
                <p className="text-red-700 mt-1">
                  Please try again or contact us if the problem persists.
                </p>
              </div>
            )}
          </form>

          {/* Help Text */}
          <div className="mt-8 bg-blue-50 bg-opacity-90 backdrop-blur-sm border border-blue-200 border-opacity-30 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Submission Guidelines</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Submit rides at least 24 hours in advance</li>
              <li>• Include clear meeting location and time</li>
              <li>• Specify appropriate pace for the intended group</li>
              <li>• Provide route details when possible</li>
              <li>• All riders must follow Duke Club Cycling safety guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
