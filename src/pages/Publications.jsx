import { motion } from "framer-motion";
import { FileText, Calendar, Download } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Publications() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const documents = [
    {
      title: "Rotaract BIT Club Report & Highlights",
      link: "/docs/annual-report.pdf",
      description: "A detailed digital report capturing the major service projects, flagship events, and leadership activities carried out by Rotaract BIT.",
      icon: <FileText size={32} color="#E01966" />
    },
    {
      title: "Future Event Calendar: 2025–2026",
      link: "/docs/event-calender.pptx",
      description: "An official planning document showcasing our upcoming service projects, awareness drives, and fellowship activities scheduled for the year ahead.",
      icon: <Calendar size={32} color="#1EB8A6" />
    }
  ];

  return (
    <section style={{ textAlign: "center", paddingTop: isMobile ? "100px" : "120px", paddingBottom: "60px", paddingLeft: "5vw", paddingRight: "5vw" }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: isMobile ? "2rem" : "2.5rem" }}
      >
        Publications & Resources
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          opacity: 0.85,
          lineHeight: "1.8",
          marginBottom: isMobile ? "40px" : "60px",
          fontSize: isMobile ? "1rem" : "1.1rem"
        }}
      >
        A growing archive of our initiatives, milestones, and moments of impact — documented for
        today and preserved for tomorrow.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? "280px" : "320px"}, 1fr))`,
          justifyContent: "center",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {documents.map((doc, index) => (
          <motion.a
            key={doc.title}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className="card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 30px",
            }}
            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.45)" }}
          >
            <div style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "50%",
              marginBottom: "20px"
            }}>
              {doc.icon}
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "15px", minHeight: "56px", display: "flex", alignItems: "center" }}>
              {doc.title}
            </h3>
            <p style={{ opacity: 0.7, fontSize: "0.95rem", lineHeight: "1.6", flex: 1, marginBottom: "25px" }}>
              {doc.description}
            </p>
            <span className="btn" style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              width: "100%", 
              justifyContent: "center" 
            }}>
              <Download size={18} /> Download
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
