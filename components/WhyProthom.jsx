export default function WhyProthom() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl">
            <p className="inline-block bg-white/20 text-white font-bold text-sm tracking-wide uppercase mb-4 px-4 py-2 rounded-full">
              🇮🇳 Why Prothom?
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
              <span className="text-accent">Prothom</span> means <span className="text-accent">First</span> — and we were the first to think differently.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Before starting, we did real ground research. We saw how small shops and local businesses were being left behind — or worse, getting cheated by agencies charging lakhs for basic websites.
            </p>
            <p className="text-white/80 leading-relaxed">
              We built <strong>Prothom Analytica</strong> with one mission: <em>connect every local business to the online world — affordably, honestly, and in one touch.</em> No jargon. No fraud. Just results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
