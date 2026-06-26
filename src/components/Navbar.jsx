export default function Navbar({ onLogoClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.95), rgba(10,10,15,0))', backdropFilter: 'blur(12px)' }}>
      <button onClick={onLogoClick} className="flex items-center gap-2 group">
        <span className="text-2xl font-display font-semibold tracking-wide text-cream group-hover:text-gold transition-colors duration-300">
          Set<span className="text-gold">Go</span>
        </span>
      </button>
      <div className="flex items-center gap-6">
        <a href="#destinations" className="text-sm font-body text-muted hover:text-cream transition-colors duration-300">Destinations</a>
        <a href="#about" className="text-sm font-body text-muted hover:text-cream transition-colors duration-300">About</a>
        <button className="text-sm font-body px-4 py-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300">
          Plan a Trip
        </button>
      </div>
    </nav>
  )
}
