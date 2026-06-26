import HotelList from './HotelList.jsx'
import FoodList from './FoodList.jsx'
import ItineraryTimeline from './ItineraryTimeline.jsx'

export default function PackageDetail({ pkg, onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24 pt-6">
      <button onClick={onBack}
        className="text-sm font-body text-muted hover:text-gold transition-colors mb-8 flex items-center gap-2 group">
        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span> Back to destinations
      </button>

      <div className="mb-12 animate-fade-up">
        <p className="text-xs font-body text-gold uppercase tracking-widest mb-3">✦ SetGo Travel Package</p>
        <h2 className="font-display text-5xl text-cream leading-tight">{pkg.name}</h2>
        <p className="text-muted font-body mt-2 text-lg italic font-display">{pkg.tagline}</p>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Best time to visit', value: pkg.bestTime },
            { label: 'Daily budget', value: pkg.budget },
            { label: 'Language', value: pkg.language },
          ].map(item => (
            <div key={item.label} className="bg-card border border-border rounded-2xl px-5 py-4">
              <p className="text-xs font-body text-muted uppercase tracking-widest">{item.label}</p>
              <p className="text-sm font-body font-medium text-cream mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-12">
        <SectionHead>Where to stay</SectionHead>
        <HotelList hotels={pkg.hotels} />
      </section>

      <section className="mb-12">
        <SectionHead>Best food spots</SectionHead>
        <FoodList foodSpots={pkg.foodSpots} />
      </section>

      <section className="mb-12">
        <SectionHead>Suggested itinerary</SectionHead>
        <ItineraryTimeline itinerary={pkg.itinerary} />
      </section>

      <section>
        <SectionHead>Travel tips</SectionHead>
        <div className="bg-card border border-gold/15 rounded-2xl p-6 flex flex-col gap-3"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05), rgba(26,26,36,1))' }}>
          {pkg.tips.map((t) => (
            <p key={t} className="text-sm font-body text-muted flex gap-3 items-start">
              <span className="text-gold flex-shrink-0 mt-0.5">✦</span>
              <span>{t}</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

function SectionHead({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h3 className="font-display text-2xl text-cream">{children}</h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
