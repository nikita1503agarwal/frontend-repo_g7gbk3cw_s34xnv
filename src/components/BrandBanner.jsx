import { motion } from 'framer-motion';

const BrandBanner = () => {
  return (
    <section className="relative w-full py-20" aria-label="Cybersecurity Club Banner">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #2B40A1 0%, #19123D 50%, #3B1F6F 100%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-[#E5E5E5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 h-28 w-28 rounded-full bg-white/5 backdrop-blur border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(97,4,236,0.5)]"
        >
          {/* Placeholder for techno eagle mascot */}
          <span className="text-4xl">🦅</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Cybersecurity Club
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-xl"
        >
          نادي الأمن السيبراني
        </motion.p>
      </div>
    </section>
  );
};

export default BrandBanner;
