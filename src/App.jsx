import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import DestinationCard from './components/DestinationCard.jsx'
import PackageDetail from './components/PackageDetail.jsx'
import { destinations, getPackage, generatePackage } from './data/destinations.js'

const SUGGESTIONS = ['Goa', 'Kerala Backwaters', 'Paris']

export default function App() {
  const [query, setQuery] = useState('')
  const [activePkg, setActivePkg] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSearch(explicitValue) {
    const q = explicitValue ?? query
    if (!q.trim()) return

    setNotFound(false)
    setError(false)

    const local = getPackage(q)
    if (local) {
      setActivePkg(local)
      return
    }

    setLoading(true)
    try {
      const aiPkg = await generatePackage(q)
      setActivePkg(aiPkg)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function handleBack() {
    setActivePkg(null)
    setNotFound(false)
    setError(false)
    setQuery('')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-sand flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl text-ink mb-2">Planning your trip...</p>
          <p className="text-sm font-body text-ink/50">Asking the AI for hotels, food, and an itinerary</p>
        </div>
      </main>
    )
  }

  if (activePkg) {
    return (
      <main className="min-h-screen bg-sand">
        <div className="pt-10">
          <PackageDetail pkg={activePkg} onBack={handleBack} />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-sand">
      <section className="pt-20 pb-10 px-6 text-center">
        <p className="text-xs font-body uppercase tracking-[0.2em] text-terracotta mb-3">Wayfare</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl mx-auto">
          Your next trip, planned end to end
        </h1>
        <p className="text-ink/55 font-body mt-3 max-w-md mx-auto">
          Search any destination and get hotels, food spots, and a day-by-day itinerary — instantly.
        </p>

        <div className="mt-10">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            suggestions={SUGGESTIONS}
          />
        </div>

        {error && (
          <p className="text-sm font-body text-terracotta mt-6">
            Couldn't generate a package right now — try again in a moment.
          </p>
        )}
      </section>

      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <h3 className="font-display text-xl text-ink mb-4">Popular packages</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} onSelect={handleSearch} />
          ))}
        </div>
      </section>
    </main>
  )
}
