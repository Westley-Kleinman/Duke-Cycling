import { site } from "@/data/site"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{site.name}</h3>
          <p className="text-slate-600 mt-2 max-w-prose">
            {site.tagline}. Building community through group rides, racing, and
            social events at Duke University.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a className="hover:text-slate-900" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a className="hover:text-slate-900" href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-slate-900" href={site.strava} target="_blank" rel="noreferrer">
                Strava Club
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  )
}
