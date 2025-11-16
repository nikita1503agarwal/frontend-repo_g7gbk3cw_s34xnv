import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          KFUPM Cybersecurity Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          Protect. Learn. Lead. A student community exploring security, defense, and ethical hacking.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a href="#vision" className="rounded-lg bg-[#6104EC] hover:bg-[#5a03d9] text-white px-6 py-3 font-semibold shadow-[0_0_20px_rgba(97,4,236,0.6)]">
            Our Vision
          </a>
          <a href="#events" className="rounded-lg bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-semibold border border-white/20">
            Upcoming Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
