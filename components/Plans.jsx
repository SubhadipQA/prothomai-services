const plans = [
  {
    number: '01',
    name: 'Starter',
    price: '4,999',
    period: 'one-time',
    desc: 'Perfect for shops who just want to start their online journey.',
    features: [
      'Single-page professional website',
      'Mobile responsive design',
      'Google Business Profile setup',
      'WhatsApp & Call button integration',
      'Basic contact form',
      '1 round of revisions',
    ],
    highlight: false,
  },
  {
    number: '02',
    name: 'Growth',
    price: '9,999',
    period: 'one-time',
    desc: 'For shops serious about getting found and showcasing their products.',
    features: [
      'Multi-page website (up to 5 pages)',
      'Product showcase with images & prices',
      'Get Quote / Enquiry button per product',
      'SEO setup (rank on Google search)',
      'Google Business + JustDial + Maps listing',
      'Social media setup (Facebook + Instagram)',
      '2 rounds of revisions',
      '1 month support',
    ],
    highlight: true,
  },
  {
    number: '03',
    name: 'Pro Business',
    price: '17,999',
    period: 'one-time',
    desc: 'Full e-commerce solution — let customers browse, add to cart & pay online.',
    features: [
      'Everything in Growth plan',
      'Full e-commerce with Buy Now & Cart',
      'Online checkout & order management',
      'Payment gateway (UPI / Card / COD)',
      'Amazon & Flipkart product sync',
      'Content writing (5 posts + product descriptions)',
      '2 Instagram reels',
      '3 months priority support',
    ],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="px-6 py-12 md:py-16 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="inline-block bg-accent/10 text-accent font-bold text-sm tracking-wide uppercase mb-4 px-4 py-2 rounded-full">
            💰 Transparent Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-snug mb-4">
            More Than Just a <span className="text-primary">Google Listing</span>
          </h2>
          <p className="text-muted text-lg">
            A listing alone won&apos;t bring customers. You need a complete online presence — website, SEO, social media, and more. Pick what fits your shop today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 relative flex flex-col ${
                plan.highlight
                  ? 'border-primary shadow-xl bg-primary/5 md:scale-105'
                  : 'border-border bg-offwhite'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-extrabold text-primary/20">{plan.number}</span>
                <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              </div>
              
              <p className="text-sm text-muted mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-ink">₹{plan.price}</span>
                <span className="text-sm text-muted"> / {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-primary shrink-0 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+919242404198"
                className={`block text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                  plan.highlight
                    ? 'bg-accent hover:bg-accent-dark text-white'
                    : 'bg-white border border-border hover:border-primary text-ink'
                }`}
              >
                Call to Book
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}