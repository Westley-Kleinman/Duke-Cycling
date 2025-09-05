import { site } from "@/data/site"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-duke-700 mb-4">{site.name}</h3>
            <p className="text-gray-600 max-w-md leading-relaxed">
              {site.tagline}. Building community through group rides, racing, and
              social events at Duke University.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <a 
                  className="text-gray-600 hover:text-duke-700 transition-colors" 
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>
              <div className="text-gray-600">{site.address}</div>
              <div className="flex space-x-4 pt-2">
                <a 
                  className="text-gray-400 hover:text-duke-700 transition-colors" 
                  href={site.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a 
                  className="text-gray-400 hover:text-duke-700 transition-colors" 
                  href={site.strava} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Strava"
                >
                  Strava
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
