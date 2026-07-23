export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Soft glow background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
            For Local Shops & Small Businesses
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-6">
            Your Shop Deserves a{' '}
            <span className="text-primary">Digital</span>{' '}
            <span className="text-accent">Identity</span>
          </h1>

          <p className="text-lg text-muted max-w-xl mb-8">
            Website, Google ranking, social media & content — everything in one affordable plan. Get found by local customers without the agency price tag.
          </p>

          <div className="flex flex-wrap gap-4">
            
          <a
            href="tel:+919242404198"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Call Now
          </a>
            
          <a
            href="#plans"
            className="bg-white border border-border hover:border-primary text-ink font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            See Plans
          </a>
          </div>
        </div>

        {/* Right: floating plan preview card */}
        <div className="relative hidden md:flex justify-center">
          <div className="relative bg-white border border-border rounded-2xl shadow-xl p-6 w-72 rotate-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔥</span>
              <div>
                <span className="font-bold text-ink">Growth Plan</span>
                <span className="block text-xs text-primary font-semibold">₹9,999 one-time</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Multi-page website
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Product showcase
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> SEO + Google ranking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Google Maps + JustDial
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Social media setup
              </li>
            </ul>
          </div>

          {/* Small accent card peeking behind */}
          <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl shadow-lg p-4 w-40 -rotate-6">
            <p className="text-xs font-semibold opacity-80">Get Found On</p>
            <p className="text-lg font-extrabold">Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}