export default function FoodList({ foodSpots }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {foodSpots.map((f) => (
        <div key={f.name} className="bg-white border border-ink/10 rounded-2xl p-5 flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg leading-snug text-ink">{f.name}</h4>
              <span className="text-xs font-body text-ink/40">{f.priceRange}</span>
            </div>
            <p className="text-sm text-ink/60 font-body mt-1">{f.specialty}</p>
            <p className="text-sm font-body mt-2">
              <span className="text-ink/40">Must try — </span>
              <span className="font-medium text-terracotta">{f.mustTry}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
