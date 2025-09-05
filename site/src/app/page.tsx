import Link from "next/link"
import RideList from "@/components/RideList"

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Duke Club Cycling
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join Duke&apos;s premier cycling community. From casual rides around campus to competitive racing, 
              we welcome cyclists of all levels to explore Durham and beyond.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/rides/submit"
                className="bg-duke-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Submit a Ride
              </Link>
              <Link
                href="/calendar"
                className="border-2 border-duke-blue text-duke-blue px-8 py-3 rounded-lg font-semibold hover:bg-duke-blue hover:text-white transition-colors"
              >
                View Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rides Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Rides
            </h2>
            <p className="text-lg text-gray-600">
              Stay up to date with today&apos;s rides, this week&apos;s schedule, and our monthly calendar
            </p>
          </div>
          
          <RideList />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/races" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-duke-blue">
                  Race Schedule
                </h3>
                <p className="text-gray-600">
                  View upcoming collegiate races and competition events
                </p>
              </div>
            </Link>
            
            <Link href="/local" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-duke-blue">
                  Local Groups
                </h3>
                <p className="text-gray-600">
                  Connect with other cycling organizations in the Durham area
                </p>
              </div>
            </Link>
            
            <Link href="/sponsors" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-duke-blue">
                  Sponsors
                </h3>
                <p className="text-gray-600">
                  Learn about our partners and sponsorship opportunities
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
