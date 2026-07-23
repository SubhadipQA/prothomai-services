const services = [
  {
    icon: '🌐',
    title: 'Website Building',
    desc: 'We build a professional, mobile-friendly website for your business — no design skills needed from your side.',
  },
  {
    icon: '🔍',
    title: 'Google Ranking (SEO)',
    desc: 'We optimize your site so customers find you when they search for products or services you offer.',
  },
  {
    icon: '📱',
    title: 'Social Media Setup',
    desc: 'We create and set up your Instagram & Facebook business pages, ready to attract followers.',
  },
  {
    icon: '✍️',
    title: 'Content Writing',
    desc: 'We write compelling posts and website content that speaks to your customers and drives action.',
  },
  {
    icon: '🎬',
    title: 'Instagram Reels',
    desc: 'We create short, engaging videos that showcase your shop, products, and what makes you unique.',
  },
  {
    icon: '📍',
    title: 'Google & JustDial Setup',
    desc: 'We list your business on Google Maps and JustDial so local customers can find and call you directly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="inline-block bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase mb-4 px-4 py-2 rounded-full">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-snug">
            Everything your shop needs to <span className="text-primary">grow online</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }, i) => (
            <div 
              key={i} 
              className="group bg-white border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl group-hover:grayscale group-hover:brightness-200">{icon}</span>
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}