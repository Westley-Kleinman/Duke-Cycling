"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { site } from "@/data/site"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900">
          <span className="text-duke-700">Duke</span> Cycling
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-duke-700 font-medium"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="rounded-md bg-duke-700 text-white px-3 py-1.5 text-sm font-medium shadow hover:bg-duke-800"
          >
            Join
          </Link>
        </div>
      </div>
    </header>
  )
}
