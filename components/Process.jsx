const steps = [
  {
    number: '01',
    title: 'Meet',
    desc: 'We visit your shop, understand your business, and see what you actually need.',
  },
  {
    number: '02',
    title: 'Plan',
    desc: 'We pick the right plan together — no pressure, no confusing options.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We design and build everything — website, listing, social pages — while you run your shop.',
  },
  {
    number: '04',
    title: 'Go Live & Grow',
    desc: 'Your shop goes online, starts ranking, and customers start finding you.',
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-12 md:py-16 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-snug">
            Simple process, no confusion
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connecting line (desktop only, not on last item) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-28px)] h-px bg-border" />
              )}

              <div className="relative z-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-5">
                  {step.number}
                </span>
                <h3 className="font-bold text-ink text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}