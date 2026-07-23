import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/images/logo-full.webp"
          alt="Prothom Analytica"
          width={160}
          height={36}
          className="h-7 w-auto brightness-0 invert opacity-90"
        />

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#plans" className="hover:text-white transition-colors">Plans</a>
          <a href="#process" className="hover:text-white transition-colors">How It Works</a>
          <a href="tel:+919242404198" className="hover:text-white transition-colors">Call Now</a>
        </nav>

        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Prothom Analytica
        </p>
      </div>
    </footer>
  );
}