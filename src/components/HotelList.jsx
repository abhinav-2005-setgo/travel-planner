const tierStyle = {
  Budget: 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/40',
  'Mid-range': 'bg-blue-900/30 text-blue-400 border border-blue-800/40',
  Luxury: 'bg-gold/10 text-gold border border-gold/20',
}

export default function HotelList({ hotels }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {hotels.map((h, i) => (
        <div key={h.name}
          className="bg-card border border-border rounded-2xl p-5 card-hover animate-fade-up"
          style={{ animationDelay: `${i * 0.1}s` }}>
          <span className={`inline-block text-[11px] font-body font-medium px-3 py-1 rounded-full ${tierStyle[h.type] || 'bg-muted/20 text-muted'}`}>
            {h.type}
          </span>
          <h4 className="font-display text-xl text-cream mt-3 leading-snug">{h.name}</h4>
          <p className="text-sm font-body text-muted mt-2 leading-relaxed">{h.highlight}</p>
          <p className="text-sm font-body font-semibold text-gold mt-4">{h.price}</p>
        </div>
      ))}
    </div>
  )
}
