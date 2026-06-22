export default function SearchBar({ value, onChange, onSearch, suggestions }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') onSearch()
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center gap-2 bg-white border border-ink/10 rounded-full px-2 py-2 shadow-sm">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Where to? Try Goa, Kerala, or Paris"
          className="flex-1 bg-transparent px-4 py-2 text-ink placeholder:text-ink/40 focus:outline-none font-body"
        />
        <button
          onClick={onSearch}
          className="bg-terracotta hover:bg-terracotta/90 text-sand font-body font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          Plan trip
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => {
              onChange(s)
              onSearch(s)
            }}
            className="text-xs font-body text-ink/60 border border-ink/15 rounded-full px-3 py-1.5 hover:border-ink/30 hover:text-ink transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
