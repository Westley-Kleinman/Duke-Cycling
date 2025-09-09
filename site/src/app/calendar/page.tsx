import { site } from "@/data/site"

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Calendar</h1>
      {site.calendarEmbedUrl ? (
        <div className="mt-6 aspect-video rounded-lg overflow-hidden border">
          <iframe
            src={site.calendarEmbedUrl}
            className="w-full h-full"
            title="Duke Cycling Calendar"
          />
        </div>
      ) : (
        <p className="mt-3 text-slate-700">Add a Google Calendar embed URL in <code>src/data/site.ts</code>.</p>
      )}
    </div>
  )
}
