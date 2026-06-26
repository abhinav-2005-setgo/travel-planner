export default function ItineraryTimeline({ itinerary }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
      <div className="flex flex-col gap-6">
        {itinerary.map((day, idx) => (
          <div key={day.day} className="relative flex gap-5 animate-fade-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="relative z-10 w-10 h-10 rounded-full border border-gold/40 bg-card text-gold font-body text-xs font-semibold flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ boxShadow: '0 0 12px rgba(201,168,76,0.15)' }}>
              {idx + 1}
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 flex-1">
              <p className="text-xs font-body text-gold/70 uppercase tracking-widest">{day.day}</p>
              <h4 className="font-display text-xl text-cream mt-1">{day.title}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {day.activities.map((a) => (
                  <li key={a} className="text-sm font-body text-muted flex gap-2 items-start">
                    <span className="text-gold mt-0.5 flex-shrink-0">→</span>
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
