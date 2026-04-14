import { motion } from "framer-motion";
import { Bell, Megaphone, Trophy } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Updates() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const updates = [
    {
      id: 1,
      date: "April 05, 2026",
      title: "New Board Members Announced for 2026-2027",
      content: "We are thrilled to announce the newly elected core committee that will lead the club to new heights next year.",
      icon: <Trophy size={24} color="#1EB8A6" />
    },
    {
      id: 2,
      date: "March 20, 2026",
      title: "Tech Symposium Registration Now Open!",
      content: "Ensure you register your teams for the upcoming coding hackathons and ideation challenges. Early bird closes soon.",
      icon: <Megaphone size={24} color="#E01966" />
    },
    {
      id: 3,
      date: "March 02, 2026",
      title: "Club Meets Target Blood Units",
      content: "Thank you to all 400+ participants who came down to BIT campus and donated blood. You've saved lives today.",
      icon: <Bell size={24} color="#EE2E84" />
    }
  ];

  return (
    <section style={{ paddingTop: isMobile ? "100px" : "120px", paddingBottom: "60px", paddingLeft: "5vw", paddingRight: "5vw", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "60px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: isMobile ? "2rem" : "2.5rem" }}
        >
          Updates & Announcements
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ opacity: 0.8 }}
        >
          Stay informed with the latest news, notices, and milestones from Rotaract BIT.
        </motion.p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {updates.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="card"
            style={{ 
              display: "flex", 
              gap: isMobile ? "15px" : "20px", 
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start", 
              padding: isMobile ? "20px" : "30px",
              textAlign: isMobile ? "center" : "left"
            }}
          >
            <div style={{ 
              background: "rgba(255,255,255,0.05)", 
              padding: "15px", 
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {item.icon}
            </div>
            <div>
              <span style={{ opacity: 0.6, fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                {item.date}
              </span>
              <h3 style={{ margin: "10px 0", fontSize: "1.3rem" }}>{item.title}</h3>
              <p style={{ opacity: 0.85, lineHeight: "1.6", margin: 0 }}>
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
