import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Problem from '@/components/Problem';
import WhyProthom from '@/components/WhyProthom';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import AddOns from '@/components/AddOns';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <WhyProthom />
      <Plans />
      <AddOns />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}