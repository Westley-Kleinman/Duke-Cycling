export const metadata = {
  title: "History",
  description: "Duke Cycling achievements and nationals highlights",
}

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Club History</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Highlights from Duke Cycling’s racing history. We’re compiling results from archives and race reports.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2014 Collegiate Road Nationals (Richmond, VA)</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li>Men’s TTT: 6th (Division II)</li>
          <li>Women’s TTT: 8th (Division II)</li>
          <li>Road Race: Matt Howe 8th, Kaleb Naegeli 15th, Eoin McDonnell 22nd</li>
          <li>Men’s team won the combined road race score; overall team moved from 10th to 6th</li>
        </ul>
        <p className="text-sm text-slate-600">
          Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-race-reports/146-2014-collegiate-nationals" target="_blank" rel="noreferrer">2014 Duke Cycling race report</a>
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold">2013 Season</h2>
        <p className="text-slate-700">Duke won the ACCC DII season omnium; Men’s A TTT, Women’s B TTT, and Women’s C TTT wins at Conference Championships.</p>
        <p className="text-sm text-slate-600">
          Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-race-reports/122-conference-champs-recap" target="_blank" rel="noreferrer">Conference Champs recap</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">More years</h2>
        <p className="text-slate-700">We’re gathering additional nationals results from earlier years. If you have details, photos, or links, please email duke.cycling@duke.edu.</p>
      </section>
    </div>
  )
}
