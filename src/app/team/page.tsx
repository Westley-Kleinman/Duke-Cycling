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
      photo: {
        src: "/images/West.jpeg",
        alt: "Westley Kleinman on a gravel bike"
      }
    },
    {
      name: "Race & Event Coordinator",
      person: "Jack Stapleton",
      details:
        "I'm a freshman from Greenville, South Carolina, and I've been racing bikes for almost nine years—including NICA, the US Cup circuit, and USAC Nationals. Two state titles later, my favorite rides are still in Dupont State Forest, and I'm excited to keep the club fun and always rolling.",
      photo: {
        src: "/images/jack.jpg",
        alt: "Jack Stapleton racing down a rocky singletrack section",
        focal: "top"
      }
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
      photo: {
        src: "/images/Shreyas.JPG",
        alt: "Shreyas on a road bike"
      }
    }
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Team & Officers</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        Student officers and ride leaders keep the club rolling.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {officers.map((o) => (
          <article
            key={`${o.person}-${o.name}`}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col h-full"
          >
            {o.photo && (
              <div className="w-full max-w-[220px] mx-auto">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                  <Image
                    src={o.photo.src}
                    alt={o.photo.alt}
                    fill
                    sizes="(max-width: 640px) 60vw, (max-width: 1280px) 35vw, 240px"
                    className={`object-cover ${
                      o.photo.focal === "top" ? "object-top" : "object-center"
                    }`}
                    priority={o.name === "President"}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col flex-1 pt-4">
              <div className="text-duke-700 text-xs font-semibold tracking-wide uppercase">
                {o.name}
              </div>
              <div className="text-lg font-semibold text-slate-900 mt-1">{o.person}</div>
              {o.details && (
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {o.details}
                </p>
              )}

              <div className="mt-auto pt-4 text-sm text-slate-700 space-y-1">
                {o.email && (
                  <div>
                    <span className="sr-only">Email</span>
                    <a href={`mailto:${o.email}`} className="hover:underline break-words">
                      {o.email}
                    </a>
                  </div>
                )}
                {o.phone && (
                  <div>
                    <span className="sr-only">Phone</span>
                    <a href={`tel:${o.phone}`} className="hover:underline">
                      {o.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
