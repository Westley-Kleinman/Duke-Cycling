import { site } from "@/data/site"

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Sponsors & Partners</h1>
      <p className="mt-3 text-slate-700 max-w-prose">
        We’re grateful for local shops and organizations that support Duke Cycling. Interested in partnering? Send us a note and we’ll follow up fast.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-6 text-center">Your logo here</div>
      </div>

      <div className="mt-10 max-w-xl">
        <h2 className="text-xl font-semibold">Sponsor inquiry</h2>
        <form className="mt-3 grid gap-3" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <input required name="Company" placeholder="Company" className="border rounded-md px-3 py-2" />
          <input required name="Contact" placeholder="Contact name" className="border rounded-md px-3 py-2" />
          <input required type="email" name="Email" placeholder="Email" className="border rounded-md px-3 py-2" />
          <textarea name="Message" placeholder="How would you like to partner?" className="border rounded-md px-3 py-2 min-h-32" />
          <button className="rounded-md bg-duke-700 text-white px-4 py-2 font-medium hover:bg-duke-800" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
