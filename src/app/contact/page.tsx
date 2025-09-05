import { site } from "@/data/site"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-slate-700">
        Email us at <a className="text-duke-700" href={`mailto:${site.email}`}>{site.email}</a> or DM us on Instagram.
      </p>
    </div>
  )
}
