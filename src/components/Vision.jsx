import { motion } from 'framer-motion';
import { Shield, Cpu, Target } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Protect',
    desc: 'Build a culture of security awareness and resilience across campus.'
  },
  {
    icon: Cpu,
    title: 'Learn',
    desc: 'Hands-on workshops on ethical hacking, forensics, and cloud security.'
  },
  {
    icon: Target,
    title: 'Lead',
    desc: 'Compete in CTFs, host events, and mentor the next wave of defenders.'
  }
];

const Vision = () => {
  return (
    <section id="vision" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000003] to-black" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Vision & Goals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-gray-300 max-w-3xl"
        >
          We empower students at KFUPM with practical cybersecurity skills, a strong ethical mindset, and opportunities to collaborate on real-world challenges.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_20px_rgba(97,4,236,0.2)]"
            >
              <f.icon className="h-8 w-8 text-[#6104EC]" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
