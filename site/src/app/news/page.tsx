export default function NewsPage() {
  const posts = [
    { title: "Welcome to Fall Semester", date: "2025-08-28" },
  ]
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">News & Updates</h1>
      <ul className="mt-4 space-y-3">
        {posts.map((p) => (
          <li key={p.title} className="rounded-lg border p-4">
            <div className="text-slate-500 text-sm">{p.date}</div>
            <div className="font-semibold">{p.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
