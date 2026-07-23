export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Soft glow background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
          For Local Shops & Small Businesses
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-ink leading-tight mb-6">
          Your Shop Deserves a{' '}
          <span className="text-primary">Digital</span>{' '}
          <span className="text-accent">Presence</span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mb-10">
          Website, Google ranking, social media, and content — all in one
          nominal plan. Get discovered by customers in your area and beyond,
          without the confusion or the big-agency price tag.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+919242404198"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
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
    </section>
  );
}