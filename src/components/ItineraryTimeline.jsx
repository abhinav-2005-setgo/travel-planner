export default function ItineraryTimeline({ itinerary }) {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink/10" aria-hidden="true" />
      <div className="flex flex-col gap-6">
        {itinerary.map((day, idx) => (
          <div key={day.day} className="relative flex gap-5">
            <div className="relative z-10 w-8 h-8 rounded-full bg-terracotta text-sand font-body text-xs font-medium flex items-center justify-center flex-shrink-0">
              {idx + 1}
            </div>
            <div className="bg-white border border-ink/10 rounded-2xl p-5 flex-1">
              <p className="text-xs font-body text-ink/40 uppercase tracking-wide">{day.day}</p>
              <h4 className="font-display text-lg text-ink mt-0.5">{day.title}</h4>
              <ul className="mt-3 flex flex-col gap-1.5">
                {day.activities.map((a) => (
                  <li key={a} className="text-sm font-body text-ink/70 flex gap-2">
                    <span className="text-terracotta">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
