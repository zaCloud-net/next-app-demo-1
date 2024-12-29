import Hero from './components/home/Hero';
import { Stats } from './components/home/sections/Stats';
import { Integration } from './components/home/sections/Integration';
import { Testimonials } from './components/home/sections/Testimonials';
import Features from './components/home/Features';
import Pricing from './components/home/Pricing';
import FAQ from './components/home/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Integration />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}