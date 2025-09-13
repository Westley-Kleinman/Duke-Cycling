export const metadata = {
  title: "History",
  description: "Duke Cycling achievements and nationals highlights",
}

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Club History</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Duke Cycling has a rich competitive history, including a national championship team that brought home the Division II title. 
        Here are highlights from our racing legacy as we work to rebuild and compete at the highest levels again.
      </p>

      <section className="mt-8 space-y-3 bg-duke-blue text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold">🏆 2012 National Champions</h2>
        <p className="text-blue-100">
          Duke Cycling rebuilt from just a few members to win the <strong>Division II National Championship</strong>, 
          a testament to the dedication and talent of our riders and the strength of our program.
        </p>
        <div className="mt-4">
          <a 
            className="text-blue-200 hover:text-white underline" 
            href="https://today.duke.edu/2012/07/duke-cycling-team-rebuilds-win-national-championship-0" 
            target="_blank" 
            rel="noreferrer"
          >
            Read the full story on Duke Today →
          </a>
        </div>
      </section>

      <section className="mt-8 space-y-3 bg-duke-blue text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold">🏆 2013 Back-to-Back National Champions</h2>
        <p className="text-blue-100">
          Duke Cycling defended their title and won their <strong>second straight Team Time Trial National Championship</strong>, 
          defeating Stanford, MIT, University of Colorado-Boulder, Yale, and others at Antelope Island, Utah.
        </p>
        <ul className="list-disc pl-6 text-blue-100 space-y-1 mt-4">
          <li><strong>Team Time Trial National Champions:</strong> Rob Ferris, Matt Howe, Mike Mulvihill, and Matt Rinehart</li>
          <li><strong>Individual National Champion:</strong> Mike Mulvihill won the men's criterium, defeating 90+ riders</li>
          <li>Won the ACCC Division II season omnium (conference champions)</li>
          <li>Men's A TTT, Women's B TTT, and Women's C TTT wins at Conference Championships</li>
          <li>Five riders finished in the top 30 at the national road race, with Matt Howe placing 6th</li>
        </ul>
        <div className="mt-4">
          <a 
            className="text-blue-200 hover:text-white underline" 
            href="https://today.duke.edu/2013/05/cycling" 
            target="_blank" 
            rel="noreferrer"
          >
            Read the full story on Duke Today →
          </a>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">2014 Collegiate Road Nationals (Richmond, VA)</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li>Men's TTT: 6th (Division II)</li>
          <li>Women's TTT: 8th (Division II)</li>
          <li>Road Race: Matt Howe 8th, Kaleb Naegeli 15th, Eoin McDonnell 22nd</li>
          <li>Men's team won the combined road race score; overall team moved from 10th to 6th</li>
        </ul>
        <p className="text-sm text-slate-600">
          Source: <a className="text-duke-700 hover:underline" href="https://dukecycling.org/road/road-race-reports/146-2014-collegiate-nationals" target="_blank" rel="noreferrer">2014 Duke Cycling race report</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">The Future</h2>
        <p className="text-slate-700">
          We're working to rebuild Duke Cycling's competitive program and return to our championship form. 
          If you have details on additional national titles, podiums, photos, or race results from our history, 
          please email duke.cycling@duke.edu to help us preserve our legacy.
        </p>
      </section>
    </div>
  )
}
