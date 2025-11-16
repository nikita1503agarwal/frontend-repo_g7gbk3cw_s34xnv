import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = ({ id, title, subtitle, children, tint = '#6104EC' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.3]);
  const glow = `0 0 40px ${tint}55`;

  return (
    <section ref={ref} id={id} className="relative min-h-[90vh] py-20 bg-black text-white snap-start">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(800px 400px at 50% 20%, rgba(97,4,236,0.08), transparent 60%)'
      }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 style={{ y, opacity }} className="text-3xl md:text-5xl font-bold" >{title}</motion.h2>
        {subtitle && (
          <motion.p style={{ y, opacity }} className="mt-3 max-w-3xl text-gray-300">{subtitle}</motion.p>
        )}
        <motion.div style={{ y, opacity }} className="mt-10" >
          {children}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
      >
        <div className="mx-auto h-px max-w-6xl" style={{ boxShadow: glow, background: 'linear-gradient(90deg, transparent, rgba(229,229,229,0.4), transparent)' }} />
      </motion.div>
    </section>
  );
};

export default StorySection;
