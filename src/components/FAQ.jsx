import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Rotaract?",
      answer: "Rotaract is a global youth service organization sponsored by Rotary International. It provides young adults aged 18 to 30 with opportunities for personal and professional development through community service, leadership training, and networking."
    },
    {
      question: "How can one be a part of the Rotaract Club of BIT?",
      answer: "Inductions generally happen at the start of the academic year. Stay tuned to our social media channels to know exactly when!"
    },
    {
      question: "Does one need any prior experience in order to be a part of Rotaract?",
      answer: "Not entirely! While experience helps, passion, dedication and a drive for serving society are what really matters to us."
    },
    {
      question: "How will joining Rotaract help one grow as an individual?",
      answer: "Through massive network expansions, professional skill building, event management, and serving the real needs of the community, you'll grow leaps and bounds in emotional quotient and leadership."
    }
  ];

  return (
    <section style={{ padding: "80px 5vw", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "60px", textTransform: "uppercase" }}>
        FAQ
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "flex-start" }}>
        
        
        <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "15px" }}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)", 
                  borderRadius: "8px", 
                  overflow: "hidden",
                  background: "var(--bg-secondary)" 
                }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 25px",
                    background: isActive ? "var(--accent-pink)" : "var(--bg-secondary)",
                    color: isActive ? "white" : "var(--text-primary)",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
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
                      style={{ padding: "0 25px", background: "var(--bg-secondary)" }}
                    >
                      <p style={{ padding: "20px 0", margin: 0, color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        
        <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/logo_no_bg.png" 
            alt="Club Logo" 
            className="logo-blend"
            style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", objectFit: "contain", background: "var(--bg-secondary)", padding: "20px" }}
          />
        </div>

      </div>
    </section>
  );
}
