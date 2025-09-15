export type RideType = "practice" | "social" | "training" | "race" | "other"

export interface Ride {
  id: string
  title: string
  start: string // ISO datetime
  durationMins?: number
  distanceMiles?: number
  pace?: string // e.g., A/B/C or mph range
  type: RideType
  startLocation?: string
  routeUrl?: string
  leader?: string
  notes?: string
  organizerName?: string
  organizerEmail?: string
  organizerPhone?: string
}
