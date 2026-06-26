export default function FoodList({ foodSpots }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {foodSpots.map((f, i) => (
        <div key={f.name}
          className="bg-card border border-border rounded-2xl p-5 card-hover animate-fade-up"
          style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="flex items-start justify-between">
            <h4 className="font-display text-xl text-cream leading-snug flex-1">{f.name}</h4>
            <span className="text-xs font-body text-muted ml-3 mt-1 flex-shrink-0">{f.priceRange}</span>
          </div>
          <p className="text-sm font-body text-muted mt-2">{f.specialty}</p>
          <p className="text-sm font-body mt-3">
            <span className="text-muted">Must try — </span>
            <span className="font-semibold text-gold">{f.mustTry}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
