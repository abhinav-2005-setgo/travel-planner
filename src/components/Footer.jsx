export default function Footer() {
  return (
    <footer id="about" className="border-t border-border mt-20 px-6 py-12">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="text-2xl font-display font-semibold text-cream mb-3">
            Set<span className="text-gold">Go</span>
          </p>
          <p className="text-sm font-body text-muted leading-relaxed">
            Premium AI-powered travel planning. Every destination, perfectly curated.
          </p>
        </div>
        <div>
          <p className="text-xs font-body text-muted uppercase tracking-widest mb-4">Explore</p>
          <div className="flex flex-col gap-2">
            {['Goa', 'Kerala', 'Rajasthan', 'Ladakh', 'Munnar', 'Varanasi'].map(d => (
              <span key={d} className="text-sm font-body text-muted hover:text-gold cursor-pointer transition-colors duration-300">{d}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-body text-muted uppercase tracking-widest mb-4">SetGo</p>
          <div className="flex flex-col gap-2">
            {['About', 'How it works', 'Privacy', 'Contact'].map(item => (
              <span key={item} className="text-sm font-body text-muted hover:text-gold cursor-pointer transition-colors duration-300">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border flex justify-between items-center">
        <p className="text-xs font-body text-muted">© 2026 SetGo. All rights reserved.</p>
        <p className="text-xs font-body text-muted">Made with ✦ for explorers</p>
      </div>
    </footer>
  )
}
