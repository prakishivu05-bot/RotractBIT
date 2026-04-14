import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center bg-[var(--bg-secondary)]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4"
      >
        Some Club Achievements
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] mb-10"
      >
        Miraculous Club Recognition
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl max-w-xl w-full">
          <img
            src="/images/Awards.jpg"
            alt="Certificate of Appreciation"
            className="w-full h-auto rounded border-[8px] sm:border-[10px] border-black shadow-inner"
          />
        </div>
      </motion.div>
    </section>
  );
}