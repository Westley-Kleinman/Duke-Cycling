import Image from 'next/image'

export default function TeamPage() {
  const officers = [
    {
      name: "President",
      person: "Westley Kleinman",
      details:
        "I'm Westley Kleinman, a sophomore mechanical engineering major who spent four seasons racing NICA, now helping coach when I'm back home. I've raced for the MaccabiUSA national team, won the Arkansas state cyclocross championship, and just love finding any excuse to ride.",
      email: "Westley.Kleinman@duke.edu",
      phone: "501-701-7973",
      photo: "/images/West.jpeg"
    },
    {
      name: "Race & Event Coordinator",
      person: "Jack Stapleton",
      details:
        "I'm a freshman from Greenville, South Carolina, and I've been racing bikes for almost nine years—including NICA, the US Cup circuit, and USAC Nationals. Two state titles later, my favorite rides are still in Dupont State Forest, and I'm excited to keep the club fun and always rolling."
    },
    {
      name: "Social Media & Outreach",
      person: "Gia Weaver",
      details:
        "Gia makes sure every ride, race, and service project gets the spotlight it deserves by leading our outreach and social channels."
    },
    {
      name: "Safety Officer",
      person: "Shreyas",
      details: "Senior",
      email: "sbk24@duke.edu",
      photo: "/images/Shreyas.JPG"
    }
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Team & Officers</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Student officers and ride leaders keep the club rolling.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {officers.map((o) => (
          <div key={o.name} className="rounded-lg border p-4">
            <div className="flex gap-2 items-start">
              {/* Photo on left */}
              {o.photo && (
                <div className="flex-shrink-0">
                  <Image
                    src={o.photo}
                    alt={`${o.person} - ${o.name}`}
                    width={400}
                    height={600}
                    className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain rounded-lg"
                  />
                </div>
              )}
              
              {/* Content on right */}
              <div className="flex-1 min-w-0">
                <div className="text-slate-500 text-xs">{o.name}</div>
                <div className="font-semibold text-sm mb-1">{o.person}</div>
                {o.details && (
                  <div className="text-xs text-slate-600 mb-2">{o.details}</div>
                )}
                <div className="space-y-0.5">
                  {o.email && (
                    <div className="text-xs text-duke-700">
                      <a href={`mailto:${o.email}`} className="hover:underline break-all">
                        {o.email}
                      </a>
                    </div>
                  )}
                  {o.phone && (
                    <div className="text-xs text-slate-600">
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
