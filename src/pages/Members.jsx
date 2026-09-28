import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import TeamCard from "../components/TeamCard";

export default function Members() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedYear, setSelectedYear] = useState("2026–2027");
  const [direction, setDirection] = useState(1);

  const handleYearChange = (year) => {
    if (year === selectedYear) return;
    setDirection(year === "2026–2027" ? 1 : -1);
    setSelectedYear(year);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const members2025 = [
    { designation: "President", name: "Rtr.Vijhortha VS", logo_path: "/images/Vijhortha.png" },
    { name: "Rtr.Varun V", designation: "Vice President", logo_path: "/images/Varun.png" },
    { name: "Rtr.Sharanya S Devadiga", designation: "Club Advisor", logo_path: "/images/Sharanya.png" },
    { name: "Rtr.Taksha Tangudu", designation: "Secretary", logo_path: "/images/Taksha.png" },
    { name: "Rtr.Parwath Sri Raju K", designation: "Joint Secretary", logo_path: "/images/Parwath.png" },
    { designation: "Treasurer", name: "Rtr.Rashi Goyal", logo_path: "/images/Rashi.png" },
    { name: "Rtr.Mitu Shyam", designation: "Sergeant", logo_path: "/images/Mitu_shyam.png" },
    { name: "Rtr.Yuvaraj Gowda", designation: "Club Media Lead", logo_path: "/images/Yuvaraj.png" },
    { name: "Rtr.Kushal", designation: "Professional Service Director", logo_path: "/images/Kushal.png" },
    { name: "Rtr.Abdullah", designation: "International Service Director", logo_path: "/images/Abdullah.png" },
    { name: "Rtr.Medha Balaji", designation: "Club Service Director", logo_path: "/images/Medha.png" },
    { name: "Rtr.Sudhanshu Kumar", designation: "Immediate Past President", logo_path: "/images/Sudhanshu.png" },
    { designation: "Community Service Director", name: "Rtr.Srujan", logo_path: "/images/Srujan.png" },
    { name: "Rtr.Shreya Srinivas", designation: "PR Director", logo_path: "/images/Shreya.png" },
    { name: "Rtr.Anirudh", designation: "Event Coordinator", logo_path: "/images/Anirudh.png" },
    { name: "Rtr.Sanjana R Rao", designation: "Event Coordinator", logo_path: "/images/Sanjana_Rao.png" },
    { designation: "Event Coordinator", name: "Rtr.Parinetha", logo_path: "/images/Parinetha.png" },
    { name: "Rtr.Varshita Buddula", designation: "Event Coordinator", logo_path: "/images/Varshita.png" },
    { name: "Rtr.Judah Samuel", designation: "Photography", logo_path: "/images/Judah.png" },
    { designation: "Editorial", name: "Rtr.Shihaz Arfath", logo_path: "/images/Shihaz.png" },
    { name: "Rtr.Harshitha Jadhav", designation: "Graphic Designer", logo_path: "/images/Harshitha.png" },
    { designation: "Graphic Designer", name: "Rtr.Shreyas", logo_path: "/images/Shreyas.png" },
    { name: "Rtr.Rohith HM", designation: "Graphic Designer", logo_path: "/images/Rohit.png" },
    { name: "Rtr.Aishwarya Darshini S", designation: "Graphic Designer", logo_path: "/images/Aishwarya.png" },
    { name: "Rtr.Manish", designation: "Marketing", logo_path: "/images/Manish.png" },
    { name: "Rtr.Prachi Rawat", designation: "Marketing", logo_path: "/images/Prachi.png" },
    { name: "Rtr.Raja", designation: "Creative", logo_path: "/images/Raja.png" },
    { name: "Rtr.Devika Sitalgeri", designation: "Creative", logo_path: "/images/Devika.png" },
    { name: "Rtr.Pragathi", designation: "Creative", logo_path: "/images/Pragathi.png" },
    { name: "Rtr.Vasundhara V", designation: "Creative", logo_path: "/images/Vasundhara.png" },
    { name: "Rtr.Prakhyath S", designation: "Web Designer", logo_path: "/images/Prakhyath_s.png" },
  ];

  const members2026 = [
    { name: "Shreya Srinivas", designation: "President", logo_path: "/images/Shreya.png" },
    { name: "Prakhyath S", designation: "Secretary", logo_path: "/images/Prakhyath_s.png" },
    { name: "Pragathi", designation: "Vice President", logo_path: "/images/Pragathi.png" },
    { name: "Anirudh G", designation: "Joint Secretary", logo_path: "/images/Anirudh.png" },
    { name: "Harshita Jadhav", designation: "Sergeant", logo_path: "/images/Harshitha.png" },
    { name: "Medha Balaji", designation: "Treasurer", logo_path: "/images/Medha.png" },
    { name: "Shihaz Arfath", designation: "Media Lead", logo_path: "/images/Shihaz.png" },
    { name: "Aadya Singh", designation: "Professional Service Director", logo_path: "/images/Aadya_Singh.jpg" },
    { name: "Abdullah", designation: "International Service Director", logo_path: "/images/Abdullah.png" },
    { name: "Bhavesh Patel", designation: "Club Service Director", logo_path: "/images/Bhavesh_Patel.jpg" },
    { name: "S. Purvi", designation: "Joint Club Service Director", logo_path: "/images/S_Purvi.jpg" },
    { name: "Srujan N", designation: "Community Service Director", logo_path: "/images/Srujan.png" },
    { name: "Asmita Majumdar", designation: "Joint Community Service Director", logo_path: "/images/Asmita_Majumdar.jpg" },
    { name: "Anish Bandapelly", designation: "Next Gen Director", logo_path: "/images/Anish_Bandapelly.jpg" },
    { name: "Adithya Bolar", designation: "PR Director", logo_path: "/images/Adithya_Bolar.jpg" },
    { name: "Varshitha Buddula", designation: "Event Coordinator", logo_path: "/images/Varshitha_Buddula.jpg" },
    { name: "Sanskar Khandelwal", designation: "Event Coordinator", logo_path: "/images/Sanskar_Khandelwal.jpg" },
    { name: "Sadgi Gupta", designation: "Event Coordinator", logo_path: "/images/Sadgi_Gupta.jpg" },
    { name: "Chethak L N", designation: "Editorial", logo_path: "/images/Chetak_LN.jpg" },
    { name: "P. Narain Balaji", designation: "Editorial", logo_path: "/images/Narain_Balaji.jpg" },
    { name: "Vasundhara V", designation: "Creative", logo_path: "/images/Vasundhara_V.jpg" },
    { name: "Shiyana Devaiah", designation: "Creative", logo_path: "/images/Shiyana_Devaiah.jpg" },
    { name: "Yuvraj Mehta", designation: "Marketing", logo_path: "/images/Yuvraj_Mehta.jpg" },
    { name: "Koushik K L", designation: "Marketing", logo_path: "/images/Koushik_KL.jpg" },
    { name: "Ruthu Bhairavi C", designation: "Marketing", logo_path: "/images/Ruthu_Bhairavi.jpg" },
    { name: "MD Sofi", designation: "Photography", logo_path: "/images/MD_Sofi.jpg" },
    { name: "Aishwarya Darshini S", designation: "Design Team", logo_path: "/images/Aishwarya.png" },
    { name: "Harshini Reddy", designation: "Design Team", logo_path: "/images/Harshini_Reddy.jpg" },
    { name: "Skanda K N", designation: "Web Designer", logo_path: "/images/Skanda_KN.jpg" }
  ];

  const containerVariants = {
    hidden: (dir) => ({
      opacity: 0,
      rotateY: dir >= 0 ? 80 : -80,
      rotateZ: dir >= 0 ? -6 : 6,
      x: dir >= 0 ? 140 : -140,
      z: -320,
      scale: 0.85,
      filter: "blur(8px)"
    }),
    visible: {
      opacity: 1,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.025
      }
    },
    exit: (dir) => ({
      opacity: 0,
      rotateY: dir >= 0 ? -80 : 80,
      rotateZ: dir >= 0 ? 6 : -6,
      x: dir >= 0 ? -140 : 140,
      z: -320,
      scale: 0.85,
      filter: "blur(8px)",
      transition: {
        duration: 0.6,
        ease: [0.7, 0, 0.84, 0]
      }
    })
  };

  const cardVariants = {
    hidden: (dir) => ({ 
      opacity: 0, 
      rotateY: dir >= 0 ? 45 : -45, 
      rotateX: 8,
      z: -120,
      scale: 0.8
    }),
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      rotateX: 0,
      z: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 190,
        damping: 20
      }
    }
  };

  const currentMembers = selectedYear === "2025–2026" ? members2025 : members2026;

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingBottom: "100px" }}>

      <div style={{ width: "100%", height: isMobile ? "250px" : "450px", overflow: "hidden", marginTop: "85px" }}>
        <img
          src="/images/Gallery17.jpeg"
          alt="Team Group"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid rgba(128,128,128,0.2)",
        maxWidth: "1000px",
        margin: "0 auto 30px",
        paddingTop: "20px"
      }}>
        <div style={{ padding: "15px 30px", color: "var(--text-primary)", fontWeight: "700", borderBottom: "3px solid #d91b5c", fontSize: "1.25rem", textTransform: "uppercase" }}>
          Our Team
        </div>
      </div>

      {/* Ultra-Cool Sliding Tab Bar */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto 50px",
        padding: "0 20px"
      }}>
        <div style={{
          display: "inline-flex",
          background: "rgba(128, 128, 128, 0.08)",
          padding: "6px",
          borderRadius: "40px",
          border: "1px solid rgba(217, 27, 92, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
          gap: "8px"
        }}>
          {["2025–2026", "2026–2027"].map((year) => {
            const isActive = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                style={{
                  position: "relative",
                  padding: isMobile ? "10px 22px" : "14px 36px",
                  borderRadius: "35px",
                  fontSize: isMobile ? "0.95rem" : "1.15rem",
                  fontWeight: "800",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "transparent",
                  color: isActive ? "#ffffff" : "var(--text-primary)",
                  transition: "color 0.3s ease",
                  outline: "none",
                  zIndex: 1
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeYearIndicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "35px",
                      background: "linear-gradient(135deg, #d91b5c 0%, #ff4b8b 100%)",
                      boxShadow: "0 4px 20px rgba(217, 27, 92, 0.45)",
                      zIndex: -1
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {year}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Earth-Orbit Perspective Grid */}
      <div style={{ perspective: "1600px", maxWidth: "1150px", margin: "0 auto", padding: "0 5vw" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedYear}
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "30px 20px" : "60px 40px",
              justifyContent: "center",
              transformStyle: "preserve-3d"
            }}
          >
            {currentMembers.map(member => (
              <motion.div
                key={member.name + member.designation}
                custom={direction}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 12,
                  rotateX: -6,
                  z: 35,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                style={{ width: isMobile ? "160px" : "240px", transformStyle: "preserve-3d" }}
              >
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  logo_path={member.logo_path}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
