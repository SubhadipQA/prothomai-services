const addOns = [
  { 
    icon: '📄',
    name: 'Extra Website Page', 
    price: '999',
    unit: 'per page',
    desc: 'Gallery, Testimonials, Team, About — add any page you need.'
  },
  { 
    icon: '🛒',
    name: 'E-commerce Upgrade', 
    price: '6,999',
    unit: 'one-time',
    desc: 'Upgrade to full store with Buy Now, Cart & Checkout.'
  },
  { 
    icon: '💳',
    name: 'Payment Gateway Setup', 
    price: '2,999',
    unit: 'one-time',
    desc: 'Accept UPI, Cards, Net Banking & COD on your site.'
  },
  { 
    icon: '✍️',
    name: 'Content Writing', 
    price: '299',
    unit: 'per post',
    desc: 'Blog posts, product descriptions, social media content.'
  },
  { 
    icon: '🎬',
    name: 'Instagram Reel', 
    price: '499',
    unit: 'per video',
    desc: 'Short, engaging videos to showcase your products.'
  },
  { 
    icon: '📱',
    name: 'Monthly Social Media', 
    price: '2,999',
    unit: 'per month',
    desc: 'We handle posting, engagement & growth for you.'
  },
  { 
    icon: '📈',
    name: 'Monthly SEO Management', 
    price: '3,999',
    unit: 'per month',
    desc: 'Ongoing optimization to keep you ranking on Google.'
  },
  { 
    icon: '🔧',
    name: 'Custom Functionality', 
    price: 'Custom',
    unit: 'quote',
    desc: 'Booking systems, forms, APIs — tell us what you need.'
  },
];

export default function AddOns() {
  return (
    <section className="px-6 py-12 md:py-16 bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="inline-block bg-accent/10 text-accent font-bold text-sm tracking-wide uppercase mb-4 px-4 py-2 rounded-full">
            ➕ Add-ons
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink leading-snug">
            Need something <span className="text-primary">extra</span>?
          </h2>
          <p className="text-muted mt-3">
            Every shop is different — add only what you need on top of your plan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {addOns.map((addon, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">{addon.icon}</span>
                <h3 className="font-bold text-ink text-sm">{addon.name}</h3>
              </div>
              <p className="text-xs text-muted mb-3 leading-relaxed">{addon.desc}</p>
              <div className="pt-3 border-t border-border">
                {addon.price === 'Custom' ? (
                  <span className="text-accent font-bold text-sm">Get Quote</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted">From</span>
                    <span className="text-lg font-extrabold text-primary">₹{addon.price}</span>
                    <span className="text-xs text-muted">/ {addon.unit}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center space-y-4">
          <a
            href="tel:+919242404198"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            📞 Discuss Your Requirements
          </a>
          <p className="text-xs text-muted">
            * Final pricing confirmed on call before any work starts. No hidden charges.
          </p>
        </div>
      </div>
    </section>
  );
}