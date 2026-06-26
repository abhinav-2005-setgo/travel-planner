export default function SearchBar({ value, onChange, onSearch, suggestions }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') onSearch()
  }
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-3 py-3 shadow-2xl"
        style={{ boxShadow: '0 0 40px rgba(201,168,76,0.08)' }}>
        <span className="text-muted pl-2">✦</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Where do you want to go?"
          className="flex-1 bg-transparent text-cream placeholder:text-muted font-body text-base focus:outline-none"
        />
        <button onClick={onSearch} className="btn-gold text-obsidian font-body font-semibold text-sm px-6 py-3 rounded-xl">
          Plan Trip →
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => { onChange(s); onSearch(s); }}
            className="text-xs font-body text-muted border border-border rounded-full px-4 py-2 hover:border-gold/40 hover:text-gold transition-all duration-300"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
