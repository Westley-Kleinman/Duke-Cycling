"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link href="/" className="nav-brand">
          Duke Cycling
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links hidden md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'bg-blue-50 duke-blue' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link 
            href="/rides/submit" 
            className="btn btn-primary text-sm hidden sm:inline-flex"
          >
            Submit Ride
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-3">
            <ul className="space-y-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-slate-600 font-medium transition-colors ${
                      pathname === item.href ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100 mt-3">
                <Link 
                  href="/rides/submit" 
                  className="block btn btn-primary text-sm text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Submit Ride
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
