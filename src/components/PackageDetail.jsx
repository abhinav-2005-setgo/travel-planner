import HotelList from './HotelList.jsx'
import FoodList from './FoodList.jsx'
import ItineraryTimeline from './ItineraryTimeline.jsx'

export default function PackageDetail({ pkg, onBack }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <button
        onClick={onBack}
        className="text-sm font-body text-ink/50 hover:text-ink mb-6 flex items-center gap-1"
      >
        ← Back to search
      </button>

      <div className="mb-10">
        <h2 className="font-display text-4xl text-ink leading-tight">{pkg.name}</h2>
        <p className="text-ink/60 font-body mt-1">{pkg.tagline}</p>

        <div className="grid sm:grid-cols-3 gap-3 mt-6">
          <div className="bg-white border border-ink/10 rounded-xl px-4 py-3">
            <p className="text-[11px] font-body text-ink/40 uppercase tracking-wide">Best time</p>
            <p className="text-sm font-body font-medium text-ink mt-0.5">{pkg.bestTime}</p>
          </div>
          <div className="bg-white border border-ink/10 rounded-xl px-4 py-3">
            <p className="text-[11px] font-body text-ink/40 uppercase tracking-wide">Daily budget</p>
            <p className="text-sm font-body font-medium text-ink mt-0.5">{pkg.budget}</p>
          </div>
          <div className="bg-white border border-ink/10 rounded-xl px-4 py-3">
            <p className="text-[11px] font-body text-ink/40 uppercase tracking-wide">Language</p>
            <p className="text-sm font-body font-medium text-ink mt-0.5">{pkg.language}</p>
          </div>
        </div>
      </div>

      <section className="mb-10">
        <h3 className="font-display text-xl text-ink mb-4">Where to stay</h3>
        <HotelList hotels={pkg.hotels} />
      </section>

      <section className="mb-10">
        <h3 className="font-display text-xl text-ink mb-4">Best food spots</h3>
        <FoodList foodSpots={pkg.foodSpots} />
      </section>

      <section className="mb-10">
        <h3 className="font-display text-xl text-ink mb-4">Suggested itinerary</h3>
        <ItineraryTimeline itinerary={pkg.itinerary} />
      </section>

      <section>
        <h3 className="font-display text-xl text-ink mb-4">Travel tips</h3>
        <div className="bg-moss/5 border border-moss/15 rounded-2xl p-5 flex flex-col gap-2">
          {pkg.tips.map((t) => (
            <p key={t} className="text-sm font-body text-ink/70 flex gap-2">
              <span className="text-moss">→</span>
              <span>{t}</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
