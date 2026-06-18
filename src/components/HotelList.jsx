const tierColor = {
  Budget: 'bg-moss/10 text-moss',
  'Mid-range': 'bg-sky/10 text-sky',
  Luxury: 'bg-terracotta/10 text-terracotta',
}

export default function HotelList({ hotels }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {hotels.map((h) => (
        <div key={h.name} className="bg-white border border-ink/10 rounded-2xl p-5 flex flex-col gap-2">
          <span className={`inline-block w-fit text-[11px] font-body font-medium px-2.5 py-1 rounded-full ${tierColor[h.type] || 'bg-ink/10 text-ink'}`}>
            {h.type}
          </span>
          <h4 className="font-display text-lg leading-snug text-ink">{h.name}</h4>
          <p className="text-sm text-ink/60 font-body leading-relaxed">{h.highlight}</p>
          <p className="text-sm font-body font-medium text-ink mt-auto pt-2">{h.price}</p>
        </div>
      ))}
    </div>
  )
}
