import Link from "next/link"
import RideList from "@/components/RideList"

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Duke Club Cycling</h1>
          <p className="mt-3 text-lg text-slate-700 max-w-prose">Today’s rides, this week’s plan, and our monthly calendar—front and center.</p>
          <div className="mt-5 flex gap-3">
            <Link href="/rides/submit" className="rounded-md bg-duke-700 text-white px-4 py-2 font-medium hover:bg-duke-800">Submit a ride</Link>
            <Link href="/calendar" className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-900 hover:bg-slate-50">Open calendar</Link>
          </div>
          <div className="mt-10">
            <RideList />
          </div>
        </div>
      </section>
    </div>
  )
}
