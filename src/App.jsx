import Hero from './components/Hero';
import BrandBanner from './components/BrandBanner';
import Vision from './components/Vision';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with Spline security shield */}
      <Hero />

      {/* Neon logo treatment area */}
      <section className="bg-black py-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto h-28 w-28 rounded-full border border-white/10 bg-[#000003] shadow-[0_0_40px_rgba(97,4,236,0.6)] flex items-center justify-center">
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-2 border-[#6104EC]" />
              <div className="absolute inset-0 blur-xl bg-[#6104EC]/40 rounded-full" />
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-[#E5E5E5]">
            KFUPM Cybersecurity Club
          </h2>
          <p className="mt-2 text-gray-400">
            Neon cyber identity with shield, circuitry, and a strong protective spirit.
          </p>
        </div>
      </section>

      {/* Vision & goals */}
      <Vision />

      {/* Banner with eagle and bilingual title */}
      <BrandBanner />

      {/* Events (upcoming + finished) with registration */}
      <Events />

      {/* Contact */}
      <Contact />

      <footer className="border-t border-white/10 bg-black/90 py-8 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} KFUPM Cybersecurity Club — Built with a neon cyber aesthetic.
        </p>
      </footer>
    </div>
  );
}

export default App;
