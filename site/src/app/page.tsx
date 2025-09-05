import Link from "next/link"
import { Suspense } from "react"
import RideList from "@/components/RideList"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
              Duke Club Cycling
            </h1>
            <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join Duke&rsquo;s premier cycling community. Whether you&rsquo;re training for competition 
              or exploring the Triangle&rsquo;s scenic routes, we ride together as one team.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                href="/rides/submit" 
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Submit a Ride
              </Link>
              <Link 
                href="/calendar" 
                className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                View Calendar
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full blur-xl opacity-40"></div>
      </section>

      {/* Rides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
              Upcoming Rides
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join us for training rides, social rides, and group adventures around the Triangle area. 
              From beginner-friendly routes to competitive training sessions, there&rsquo;s something for every cyclist.
            </p>
          </div>
          
          <div>
            <Suspense fallback={
              <div className="text-center py-12">
                <div className="animate-pulse bg-slate-200 h-8 w-96 mx-auto mb-4 rounded"></div>
                <div className="animate-pulse bg-slate-200 h-4 w-64 mx-auto rounded"></div>
              </div>
            }>
              <RideList />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Local Resources Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
              Local Cycling Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Connect with the broader Triangle cycling community through these amazing local organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Durham Bike Co-op
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mb-4"></div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                A community-driven bike shop and repair space in downtown Durham. They offer affordable repair services, 
                educational workshops, and foster an inclusive cycling community. Perfect for students looking to maintain 
                their bikes on a budget while learning valuable mechanical skills.
              </p>
              
              <div className="flex items-center justify-between">
                <a 
                  href="https://durhambikecoop.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Visit Website 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="text-sm text-slate-400">Downtown Durham</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    TriangleMTB
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4"></div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                The Triangle&rsquo;s premier mountain biking community featuring comprehensive trail guides, 
                group rides, and advocacy for sustainable trail development. Discover hidden gems from technical 
                singletrack to family-friendly greenways throughout the Research Triangle area.
              </p>
              
              <div className="flex items-center justify-between">
                <a 
                  href="https://trianglemtb.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Explore Trails 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="text-sm text-slate-400">Triangle Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
              Explore More
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover all that Duke Club Cycling has to offer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/races" className="bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group block">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                Race Schedule
              </h3>
              <p className="text-slate-600">
                View upcoming collegiate races and competition events
              </p>
            </Link>
            
            <Link href="/local" className="bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group block">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                Local Groups
              </h3>
              <p className="text-slate-600">
                Connect with other cycling organizations in the Durham area
              </p>
            </Link>
            
            <Link href="/sponsors" className="bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-20 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group block">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                Sponsors
              </h3>
              <p className="text-slate-600">
                Learn about our partners and sponsorship opportunities
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
