"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link href="/" className="nav-brand">
          Duke Cycling
        </Link>
        
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
            className="btn btn-primary text-sm"
          >
            Submit Ride
          </Link>
        </div>
      </div>
    </nav>
  )
}
