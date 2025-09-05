"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-white border-opacity-20 shadow-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Duke Cycling
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "text-blue-900 bg-blue-50 shadow-sm"
                    : "text-slate-600 hover:text-blue-900 hover:bg-white hover:bg-opacity-50"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-900 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link
              href="/rides/submit"
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Submit Ride
            </Link>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-slate-600 hover:text-blue-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
