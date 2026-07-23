export default function Contact() {
  return (
    <section className="px-6 py-12 md:py-16 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/70 font-semibold text-sm tracking-wide uppercase mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Let&apos;s get your shop online
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          One call is all it takes. We&apos;ll visit, understand your shop, and
          show you exactly what fits — no pressure, no confusing terms.
        </p>

        <a
          href="tel:+919242404198"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-lg transition-colors mb-4"
        >
          📞 Call Now: +91 92424 04198
        </a>

        <p className="text-white/60 text-sm">
          Available Mon–Sat, 10 AM – 7 PM
        </p>
      </div>
    </section>
  );
}