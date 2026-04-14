import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Rotaract?",
      answer:
        "Rotaract is a global youth service organization sponsored by Rotary International. It provides young adults aged 18 to 30 with opportunities for personal and professional development through community service, leadership training, and networking.",
    },
    {
      question: "How can one be a part of the Rotaract Club of BIT?",
      answer:
        "Inductions generally happen at the start of the academic year. Stay tuned to our social media channels to know exactly when!",
    },
    {
      question:
        "Does one need any prior experience in order to be a part of Rotaract?",
      answer:
        "Not entirely! While experience helps, passion, dedication and a drive for serving society are what really matters to us.",
    },
    {
      question:
        "How will joining Rotaract help one grow as an individual?",
      answer:
        "Through massive network expansions, professional skill building, event management, and serving the real needs of the community, you&apos;ll grow leaps and bounds in emotional quotient and leadership.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12 md:mb-16 uppercase">
        FAQ
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* FAQ LIST */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden bg-[var(--bg-secondary)] shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                  className={`w-full text-left px-5 py-4 font-semibold text-sm sm:text-base transition-all duration-300
                    ${isActive
                      ? "text-white"
                      : "text-[var(--text-primary)]"
                    }`}
                  style={{
                    background: isActive
                      ? "var(--accent-pink)"
                      : "var(--bg-secondary)",
                  }}
                >
                  {faq.question}
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 overflow-hidden"
                    >
                      <p className="py-4 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/logo_no_bg.png"
            alt="Club Logo"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg object-contain bg-[var(--bg-secondary)] p-4"
          />
        </div>

      </div>
    </section>
  );
}