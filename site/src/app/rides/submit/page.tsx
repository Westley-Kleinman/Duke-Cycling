import Link from "next/link"

const template = encodeURIComponent(`# New Ride Submission
title: Campus Social Spin
start: 2025-09-04T18:00:00-04:00
type: social
pace: C
location: BC Plaza
route: https://ridewithgps.com/routes/123
notes: Add any details here.`)

const issueUrl = `https://github.com/Westley-Kleinman/Duke-Cycling/issues/new?labels=ride&title=${encodeURIComponent("Ride: ")}&body=${template}`

export default function SubmitRidePage(){
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Submit a Ride</h1>
      <p className="mt-3 text-slate-700 max-w-prose">Anyone can propose a club ride. We’ll show open submissions on the site automatically.</p>
      <Link className="inline-block mt-4 rounded-md bg-duke-700 text-white px-4 py-2" href={issueUrl} target="_blank">Open submission form</Link>
    </div>
  )
}
