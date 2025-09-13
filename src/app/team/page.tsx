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
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {officers.map((o) => (
          <div key={o.name} className="rounded-lg border p-4">
            {o.photo && (
              <div className="mb-4">
                <Image
                  src={o.photo}
                  alt={`${o.person} - ${o.name}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            )}
            <div className="text-slate-500 text-sm">{o.name}</div>
            <div className="font-medium">{o.person}</div>
            {o.details && (
              <div className="text-sm text-slate-600 mt-1">{o.details}</div>
            )}
            {o.email && (
              <div className="text-sm text-duke-700 mt-2">
                <a href={`mailto:${o.email}`} className="hover:underline">
                  {o.email}
                </a>
              </div>
            )}
            {o.phone && (
              <div className="text-sm text-slate-600 mt-1">
                <a href={`tel:${o.phone}`} className="hover:underline">
                  {o.phone}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
