import type { Ride } from "@/types"

// Static seed data (fallback)
export const seedRides: Ride[] = [
  {
    id: "seed-1",
    title: "Campus Social Spin",
    start: new Date().toISOString(),
    durationMins: 60,
    distanceMiles: 15,
    pace: "No-drop",
    type: "social",
    startLocation: "BC Plaza",
    notes: "Helmets required. Lights for evening."
  },
]

// Simple GitHub Issues ingestion (public repo issues used as submissions)
// Users submit via an issue template URL; we render issues labeled 'ride'.
export async function getGithubIssueRides(): Promise<Ride[]> {
  try {
    const repo = "Westley-Kleinman/Duke-Cycling"
    const url = `https://api.github.com/repos/${repo}/issues?state=open&labels=ride`
    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) return []
  type GhIssue = { number: number; title: string; body?: string }
  const issues = (await res.json()) as GhIssue[]
  return issues.map((i) => ({
      id: String(i.number),
      title: i.title,
      start: i.body?.match(/start:\s*(.*)/i)?.[1] ?? new Date().toISOString(),
      type: (i.body?.match(/type:\s*(.*)/i)?.[1] ?? "other") as Ride["type"],
      startLocation: i.body?.match(/location:\s*(.*)/i)?.[1],
      pace: i.body?.match(/pace:\s*(.*)/i)?.[1],
      routeUrl: i.body?.match(/route:\s*(.*)/i)?.[1],
      notes: i.body,
    }))
  } catch {
    return []
  }
}

export async function getRides(): Promise<Ride[]> {
  const gh = await getGithubIssueRides()
  return [...gh, ...seedRides].sort((a,b)=>+new Date(a.start)-+new Date(b.start))
}
