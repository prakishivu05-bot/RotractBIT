import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section style={{ padding: "100px 5vw", textAlign: "center", background: "var(--bg-secondary)" }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "20px" }}
      >
        Some Club Achievements
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "40px" }}
      >
        Miraculous Club Recognition
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{
          padding: "20px",
          background: "linear-gradient(to bottom right, #eef2f3, #8e9eab)",
          borderRadius: "16px",
          display: "inline-block",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        }}>
          
          <img 
            src="/images/Awards.jpg"  
            alt="Certificate of Appreciation" 
            style={{ 
              width: "100%", 
              maxWidth: "550px", 
              height: "auto",
              borderRadius: "4px", 
              border: "10px solid #111",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
            }} 
          />
        </div>
      </motion.div>
    </section>
  );
}
