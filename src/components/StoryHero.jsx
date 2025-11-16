import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StoryHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0]);
  const splineScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const splineRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black text-white snap-start"
      aria-label="Hero 3D Scene"
    >
      <motion.div className="absolute inset-0" style={{ scale: splineScale, rotate: splineRotate }}>
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <motion.div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/80" style={{ opacity: overlayOpacity }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1 style={{ y: titleY, opacity: titleOpacity }} className="text-5xl md:text-7xl font-extrabold tracking-tight">
          KFUPM Cybersecurity Club
        </motion.h1>
        <motion.p style={{ y: titleY, opacity: titleOpacity }} className="mt-5 max-w-2xl text-lg md:text-2xl text-gray-300">
          Protect. Learn. Lead.
        </motion.p>
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="mt-8 flex flex-col sm:flex-row gap-3">
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

export default StoryHero;
