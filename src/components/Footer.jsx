import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        background: "var(--bg-secondary)", 
        padding: "80px 5vw 40px", 
        textAlign: "center", 
        borderTop: "1px solid rgba(128,128,128,0.15)",
        color: "var(--text-primary)",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}
    >
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "35px", 
        marginBottom: "40px",
        alignItems: "center"
      }}>
        <motion.a 
          whileHover={{ scale: 1.1, color: "#e91e63" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://www.instagram.com/rotaract.bit?igsh=MWhlaWFiem10NGxoeg==" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.25-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
          </svg>
        </motion.a>
        
        <motion.a 
          whileHover={{ scale: 1.1, color: "#0077B5" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://www.linkedin.com/company/rotaractclubofbit/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.8-2.1 3.9-2.1 4.2 0 5 2.8 5 6.5V23h-4v-7.3c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V23h-4V8z" />
          </svg>
        </motion.a>

        <motion.a 
          whileHover={{ scale: 1.1, color: "#e91e63" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="mailto:bitrotaract@gmail.com" 
          style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center" }}
        >
          <Mail size={24} />
        </motion.a>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <p style={{ 
          color: "var(--text-secondary)", 
          fontSize: "0.95rem", 
          margin: 0,
          fontWeight: "400",
          letterSpacing: "0.3px"
        }}>
          © 2026 Rotaract Club of BIT. All Rights Reserved.
        </p>
        
        <p style={{ 
          color: "var(--text-primary)", 
          fontSize: "0.9rem", 
          margin: 0,
          fontWeight: "500",
          letterSpacing: "0.5px",
          opacity: 0.9
        }}>
          Designed & Developed by <motion.span 
            whileHover={{ opacity: 0.7, color: "var(--vibrant-pink)" }}
            style={{ cursor: "pointer", transition: "color 0.3s" }}
          >
            Rtr. Prakhyath S
          </motion.span> - Web Designer
        </p>
      </div>
    </motion.footer>
  );
}