export default function DestinationCard({ destination, onSelect }) {
  return (
    <button
      onClick={() => onSelect(destination.name)}
      className="text-left bg-card border border-border rounded-2xl overflow-hidden card-hover group"
    >
      <div className="relative h-44 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${destination.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-body text-gold/80 uppercase tracking-widest">{destination.bestTime}</span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl text-cream leading-tight">{destination.name}</h4>
        <p className="text-sm font-body text-muted mt-1 leading-relaxed">{destination.tagline}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-body text-muted">{destination.budget}</span>
          <span className="text-xs font-body text-gold group-hover:underline">Explore →</span>
        </div>
      </div>
    </button>
  )
}
