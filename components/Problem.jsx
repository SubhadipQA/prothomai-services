export default function Problem() {
  const points = [
    {
      icon: '🔍',
      stat: '98%',
      text: 'of customers search online before visiting any local shop — even ones they already know about.',
    },
    {
      icon: '📍',
      stat: '42%',
      text: 'of people click only the shops that show up on Google Maps — the rest stay invisible.',
    },
    {
      icon: '📈',
      stat: '70%',
      text: 'more likely to visit your shop if you have a proper Google Business Profile + website set up.',
    },
  ];

  return (
    <section className="bg-white px-6 py-12 md:py-16 border-y border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: statement */}
        <div>
          <p className="inline-block bg-accent/10 text-accent font-bold text-sm tracking-wide uppercase mb-4 px-4 py-2 rounded-full">
            🇮🇳 Local for Vocal
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-snug mb-6">
            Your shop exists.
            <br />
            Does it exist{' '}
            <span className="relative">
              <span className="text-primary">online</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full"></span>
            </span>
            <span className="text-accent">?</span>
          </h2>
          <p className="text-muted text-lg">
            Local for vocal only works when people can actually find you.
            Right now, most shops in your area are invisible to anyone
            searching outside a 2-minute walk.
          </p>
        </div>

        {/* Right: reality points - more visual */}
        <div className="space-y-6">
          {points.map((point, i) => (
            <div key={i} className="bg-offwhite border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{point.icon}</span>
                <div>
                  <span className="text-2xl font-extrabold text-primary block mb-1">
                    {point.stat}
                  </span>
                  <p className="text-muted text-sm">{point.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}