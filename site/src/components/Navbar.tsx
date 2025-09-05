"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-header">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-duke-700">Duke Cycling</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-duke-700 border-b-2 border-duke-700 pb-4"
                    : "text-gray-600 hover:text-duke-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link
              href="/rides/submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-duke-700 border border-transparent rounded-md shadow-sm hover:bg-duke-800 transition-colors"
            >
              Submit Ride
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
