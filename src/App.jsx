import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import DestinationCard from './components/DestinationCard.jsx'
import PackageDetail from './components/PackageDetail.jsx'
import { destinations, getPackage, generatePackage } from './data/destinations.js'

const SUGGESTIONS = ['Goa', 'Ladakh', 'Rajasthan', 'Munnar', 'Varanasi', 'Paris']

const STATS = [
  { value: '50+', label: 'Destinations' },
  { value: 'AI', label: 'Powered planning' },
  { value: '100%', label: 'Free to use' },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [activePkg, setActivePkg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSearch(explicitValue) {
    const q = explicitValue ?? query
    if (!q.trim()) return
    setError(false)
    const local = getPackage(q)
    if (local) { setActivePkg(local); return }
    setLoading(true)
    try {
      const aiPkg = await generatePackage(q)
      setActivePkg(aiPkg)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function handleBack() {
    setActivePkg(null)
    setError(false)
    setQuery('')
  }

  if (loading) {
    return (
      <div className="min-h-screen hero-bg flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-5xl animate-float mb-6">✦</div>
          <p className="font-display text-3xl text-cream mb-3">Curating your journey...</p>
          <p className="text-sm font-body text-muted">Finding the finest hotels, food spots and experiences</p>
          <div className="flex justify-center gap-1 mt-8">
            {[0,1,2].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-gold/60 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (activePkg) {
    return (
      <div className="min-h-screen bg-obsidian">
        <Navbar onLogoClick={handleBack} />
        <div className="pt-24">
          <PackageDetail pkg={activePkg} onBack={handleBack} />
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar onLogoClick={handleBack} />

      {/* Hero */}
      <section className="hero-bg min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center relative overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />

        <div className="animate-fade-up delay-100">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold mb-6">✦ Premium AI Travel Planning</p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl text-cream leading-[1.05] max-w-3xl animate-fade-up delay-200">
          Every journey,<br />
          <span className="gold-shimmer">perfectly planned</span>
        </h1>

        <p className="text-muted font-body mt-6 max-w-lg text-lg leading-relaxed animate-fade-up delay-300">
          Search any destination and receive a curated travel package — hotels, food spots, and a day-by-day itinerary, instantly.
        </p>

        <div className="w-full mt-10 animate-fade-up delay-400">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            suggestions={SUGGESTIONS}
          />
        </div>

        {error && (
          <p className="text-sm font-body text-red-400/80 mt-5 animate-fade-in">
            Couldn't generate a package right now — try again in a moment.
          </p>
        )}

        {/* Stats */}
        <div className="flex gap-10 mt-16 animate-fade-up delay-500">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-gold">{s.value}</p>
              <p className="text-xs font-body text-muted mt-1 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations grid */}
      <section id="destinations" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <p className="text-xs font-body text-gold uppercase tracking-widest mb-1">✦ Curated</p>
            <h2 className="font-display text-4xl text-cream">Featured destinations</h2>
          </div>
          <div className="flex-1 h-px bg-border ml-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((d, i) => (
            <div key={d.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <DestinationCard destination={d} onSelect={handleSearch} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-xs font-body text-gold uppercase tracking-widest mb-3">✦ Simple</p>
        <h2 className="font-display text-4xl text-cream mb-14">How SetGo works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: '🔍', step: '01', title: 'Search a destination', desc: 'Type any city, region, or country you want to explore.' },
            { icon: '✦', step: '02', title: 'AI builds your package', desc: 'Our AI curates hotels, food spots, and a full itinerary instantly.' },
            { icon: '✈️', step: '03', title: 'Go explore', desc: 'Download your plan and embark on a perfectly tailored journey.' },
          ].map((item, i) => (
            <div key={item.step} className="bg-card border border-border rounded-2xl p-7 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}>
              <p className="text-3xl mb-4">{item.icon}</p>
              <p className="text-xs font-body text-gold uppercase tracking-widest mb-2">{item.step}</p>
              <h4 className="font-display text-xl text-cream mb-2">{item.title}</h4>
              <p className="text-sm font-body text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
