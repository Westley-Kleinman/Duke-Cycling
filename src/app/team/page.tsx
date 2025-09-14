import Image from 'next/image'

export default function TeamPage() {
  const officers = [
    { 
      name: "President", 
      person: "Westley Kleinman",
      details: "Sophomore, from Hot Springs, Arkansas",
      email: "Westley.Kleinman@duke.edu",
      phone: "501-701-7973",
      photo: "/images/West.jpeg"
    },
    { 
      name: "Treasurer", 
      person: "Hannah Groos",
      details: "Senior",
      email: "hmg29@duke.edu"
    },
    { 
      name: "Safety Officer", 
      person: "Shreyas",
      details: "Senior",
      email: "sbk24@duke.edu",
      photo: "/images/Shreyas.JPG"
    },
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Team & Officers</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Student officers and ride leaders keep the club rolling.
      </p>
      <div className="mt-6 space-y-6">
        {officers.map((o) => (
          <div key={o.name} className="rounded-lg border p-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Photo on left */}
              {o.photo && (
                <div className="flex-shrink-0">
                  <Image
                    src={o.photo}
                    alt={`${o.person} - ${o.name}`}
                    width={400}
                    height={600}
                    className="w-32 h-auto object-contain rounded-lg"
                  />
                </div>
              )}
              
              {/* Content on right */}
              <div className="flex-1 min-w-0">
                <div className="text-slate-500 text-sm">{o.name}</div>
                <div className="font-bold text-xl mb-2">{o.person}</div>
                {o.details && (
                  <div className="text-base text-slate-600 mb-3">{o.details}</div>
                )}
                <div className="space-y-1">
                  {o.email && (
                    <div className="text-sm text-duke-700">
                      <a href={`mailto:${o.email}`} className="hover:underline">
                        {o.email}
                      </a>
                    </div>
                  )}
                  {o.phone && (
                    <div className="text-sm text-slate-600">
                      <a href={`tel:${o.phone}`} className="hover:underline">
                        {o.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
