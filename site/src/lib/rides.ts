import { Ride } from "@/types"

export function startOfDayISO(d = new Date()) {
  const x = new Date(d)
  x.setHours(0,0,0,0)
  return x.toISOString()
}

export function isSameDay(a: Date, b: Date) {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate()
}

export function isThisWeek(d: Date) {
  const now = new Date()
  const start = new Date(now)
  start.setDate(now.getDate() - now.getDay()) // Sunday
  start.setHours(0,0,0,0)
  const end = new Date(start)
  end.setDate(start.getDate() + 7)
  return d >= start && d < end
}

export function groupByDay(rides: Ride[]) {
  const groups: Record<string, Ride[]> = {}
  for (const r of rides) {
    const d = new Date(r.start)
    const key = d.toISOString().slice(0,10)
    if (!groups[key]) groups[key] = []
    groups[key].push(r)
  }
  return groups
}
