import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import DestinationCard from './components/DestinationCard.jsx'
import PackageDetail from './components/PackageDetail.jsx'
import { destinations, getPackage } from './data/destinations.js'

const SUGGESTIONS = ['Goa', 'Kerala Backwaters', 'Paris']

export default function App() {
  const [query, setQuery] = useState('')
  const [activePkg, setActivePkg] = useState(null)
  const [notFound, setNotFound] = useState(false)

  function handleSearch(explicitValue) {
    const q = explicitValue ?? query
    if (!q.trim()) return
    const result = getPackage(q)
    if (result) {
      setActivePkg(result)
      setNotFound(false)
    } else {
      setActivePkg(null)
      setNotFound(true)
    }
  }

  function handleBack() {
    setActivePkg(null)
    setNotFound(false)
    setQuery('')
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
          Search a destination and get hotels, food spots, and a day-by-day itinerary — instantly.
        </p>

        <div className="mt-10">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            suggestions={SUGGESTIONS}
          />
        </div>

        {notFound && (
          <p className="text-sm font-body text-ink/50 mt-6">
            No package yet for "{query}" — try one of the destinations below.
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
