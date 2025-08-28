import Link from "next/link"

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Duke Club Cycling
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-prose">
                Ride with a welcoming community, train for collegiate races, and
                explore Durham and beyond. All bikes and experience levels are
                welcome.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/join"
                  className="rounded-md bg-duke-700 text-white px-4 py-2 font-medium hover:bg-duke-800"
                >
                  Join the Club
                </Link>
                <Link
                  href="/rides"
                  className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-900 hover:bg-slate-50"
                >
                  See Rides
                </Link>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-duke-300 to-duke-600 shadow-card" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Group Rides",
              desc: "Weekly no-drop and training rides for all levels.",
              href: "/rides",
            },
            {
              title: "Collegiate Racing",
              desc: "Track, road, CX, MTB with ACCC and nationals goals.",
              href: "/racing",
            },
            {
              title: "Events & Community",
              desc: "Clinics, socials, trips, and service in Durham.",
              href: "/events",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="block rounded-lg bg-white p-6 shadow-card border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-slate-600 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
