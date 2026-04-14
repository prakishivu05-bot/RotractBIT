import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function TeamCard({ name, designation, logo_path }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%"
      }}
      whileHover={{ y: -5 }}
    >
      <div 
        style={{
          width: isMobile ? "140px" : "210px",
          height: isMobile ? "140px" : "210px",
          borderRadius: "50%",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid rgba(128,128,128,0.1)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "15px"
        }}
      >
        <img
          src={logo_path}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      <h3 style={{ margin: "0 0 10px 0", fontSize: "1.05rem", fontWeight: "800", color: "var(--text-primary)" }}>
        {name}
      </h3>
      <div style={{ 
        background: "#d91b5c",
        color: "white",
        padding: "4px 12px",
        borderRadius: "4px",
        fontSize: "0.65rem",
        fontWeight: "800",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        display: "inline-block"
      }}>
        {designation}
      </div>
    </motion.div>
  );
}
