import Link from "next/link"
import { Suspense } from "react"
import RideList from "@/components/RideList"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-8">
              Duke Club Cycling
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed font-medium">
              Join Duke&rsquo;s premier cycling community. Whether you&rsquo;re training for competition 
              or exploring the Triangle&rsquo;s scenic routes, we ride together as one team.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                href="/rides/submit" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                Submit a Ride
              </Link>
              <Link 
                href="/calendar" 
                className="bg-white text-blue-700 font-bold py-4 px-8 rounded-2xl text-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                View Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rides Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Upcoming Rides
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join us for training rides, social rides, and group adventures around the Triangle area. 
              From beginner-friendly routes to competitive training sessions, there&rsquo;s something for every cyclist.
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
      </section>

      {/* Local Resources Section */}
  <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Local Cycling Resources
            </h2>
            <p className="text-lg text-slate-600">
              Connect with the broader Triangle cycling community through these amazing local organizations.
            </p>
          </div>
          <div className="grid grid-2 gap-8">
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-duke-blue rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold duke-blue mb-2">Durham Bike Co-op</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                A community-driven bike shop and repair space in downtown Durham. They offer affordable repair services, 
                educational workshops, and foster an inclusive cycling community. Perfect for students looking to maintain 
                their bikes on a budget while learning valuable mechanical skills.
              </p>
              <div className="flex items-center justify-between">
                <a 
                  href="https://durhambikecoop.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-900 font-semibold hover:text-blue-700 transition"
                >
                  Visit Website →
                </a>
                <span className="text-sm text-slate-400">Downtown Durham</span>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold duke-blue mb-2">TriangleMTB</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                The Triangle&rsquo;s premier mountain biking community featuring comprehensive trail guides, group rides, 
                and advocacy for sustainable trail development. Discover hidden gems from technical singletrack to 
                family-friendly greenways throughout the Research Triangle area.
              </p>
              <div className="flex items-center justify-between">
                <a 
                  href="https://trianglemtb.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-900 font-semibold hover:text-blue-700 transition"
                >
                  Explore Trails →
                </a>
                <span className="text-sm text-slate-400">Triangle Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
  <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Explore More
            </h2>
            <p className="text-lg text-slate-600">
              Discover all that Duke Club Cycling has to offer
            </p>
          </div>
          <div className="grid grid-2 gap-8">
            <Link href="/races" className="card block">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold duke-blue mb-3">Race Schedule</h3>
              <p className="text-slate-600">View upcoming collegiate races and competition events</p>
            </Link>

            <Link href="/sponsors" className="card block">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold duke-blue mb-3">Sponsors</h3>
              <p className="text-slate-600">Learn about our partners and sponsorship opportunities</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
