export default function DestinationCard({ destination, onSelect }) {
  return (
    <button
      onClick={() => onSelect(destination.name)}
      className="text-left bg-white border border-ink/10 rounded-2xl overflow-hidden hover:border-ink/25 transition-colors group"
    >
      <div
        className="h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      />
      <div className="p-4">
        <h4 className="font-display text-lg text-ink">{destination.name}</h4>
        <p className="text-sm font-body text-ink/55 mt-0.5">{destination.tagline}</p>
        <p className="text-xs font-body text-terracotta mt-3 group-hover:underline">View package →</p>
      </div>
    </button>
  )
}
