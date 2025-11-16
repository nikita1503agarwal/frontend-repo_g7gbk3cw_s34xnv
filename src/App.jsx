import StoryHero from './components/StoryHero';
import StorySection from './components/StorySection';
import Vision from './components/Vision';
import Events from './components/Events';
import Contact from './components/Contact';
import BrandBanner from './components/BrandBanner';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-black text-white snap-y snap-mandatory overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      <StoryHero />

      <StorySection id="vision" title="Vision & Goals" subtitle="We empower students at KFUPM with practical cybersecurity skills, a strong ethical mindset, and opportunities to collaborate on real-world challenges.">
        <Vision />
      </StorySection>

      <StorySection id="brand" title="Identity & Pride" subtitle="A neon cyber shield, deep-space gradients, and a techno eagle represent our ethos.">
        <BrandBanner />
      </StorySection>

      <StorySection id="events" title="Missions & Operations" subtitle="Join upcoming workshops, CTFs, and talks. Review past missions to learn and iterate.">
        <Events />
      </StorySection>

      <StorySection id="contact" title="Signal the Shield" subtitle="Questions, partnerships, or ideas? Send us a secure message.">
        <Contact />
      </StorySection>

      <footer className="snap-start border-t border-white/10 bg-black/90 py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} KFUPM Cybersecurity Club — Neon cyber aesthetic.</p>
      </footer>
    </div>
  );
}

export default App;
