import { motion, AnimatePresence } from "framer-motion";
import { 
  Users,
  Globe,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Achievements from "../components/Achievements";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";

export default function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const [activeService, setActiveService] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDirection, setHeroDirection] = useState(1);

  const heroImages = [
    {
      src: "/images/Gallery1.jpeg",
      alt: "Rotaract Club of BIT Team"
    },
    {
      src: "/images/Team_2026_2.png", // Second image: 2026-2027 installation ceremony
      alt: "Rotaract Club of BIT 2026–2027 Team"
    }
  ];

  const nextHero = (e) => {
    if (e) e.stopPropagation();
    setHeroDirection(1);
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHero = (e) => {
    if (e) e.stopPropagation();
    setHeroDirection(-1);
    setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const servicesData = [
    { id: "community", title: "COMMUNITY", description: "Empowering local change through grassroots action.", icon: <Users size={48} className="text-white" />, bgImage: "/images/community_service_1775842206321.png" },
    { id: "international", title: "INTERNATIONAL", description: "Bridging cultures and solving global challenges.", icon: <Globe size={48} className="text-white" />, bgImage: "/images/international_service_1775842258680.png" },
    { id: "vocational", title: "VOCATIONAL", description: "Skill-building and mentorship for professional growth.", icon: <Briefcase size={48} className="text-white" />, bgImage: "/images/vocational_service_1775842325242.png" },
    { id: "youth", title: "YOUTH", description: "Inspiring the next generation of leaders.", icon: <GraduationCap size={48} className="text-white" />, bgImage: "/images/youth_service_1775842351347.png" },
  ];

  return (
    <>
      
      <section style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: isMobile ? "100px 5vw 60px" : "120px 5vw 40px",
        maxWidth: "1400px",
        margin: "0 auto",
        overflow: "hidden",
        gap: isMobile ? "40px" : "0"
      }}>
        
        {[
          { color: "#22c55e", top: "10%", left: "20%", size: "8px" },
          { color: "#e91e63", top: "25%", right: "15%", size: "12px" },
          { color: "#3b82f6", top: "40%", left: "5%", size: "10px" },
          { color: "#f97316", top: "70%", right: "20%", size: "8px" },
          { color: "#22c55e", bottom: "10%", left: "30%", size: "12px" },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              y: [0, (i % 2 === 0 ? -40 : 40), 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: "50%",
              top: p.top,
              bottom: p.bottom,
              left: p.left,
              right: p.right,
              opacity: 0.6
            }}
          />
        ))}

        <motion.div 
          style={{ flex: "1 1 50%", maxWidth: "600px", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center" }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start", justifyContent: "center", width: "100%", textAlign: isMobile ? "center" : "left" }}>
            <h1 style={{ 
              fontSize: isMobile ? "2.5rem" : "3.5rem", 
              lineHeight: "1.15", 
              marginBottom: "15px", 
              color: "var(--text-primary)",
              fontWeight: "800",
              letterSpacing: "-1px"
            }}>
              Rotaract<br/>Club Of BIT
            </h1>
            <p style={{ 
              color: "var(--text-secondary)", 
              fontSize: "1.25rem", 
              marginBottom: "35px", 
              fontWeight: "500"
            }}>
              Empowering the Youth, Transforming the Future.
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", width: "100%", flexDirection: isMobile ? "column" : "row" }}>
              <button 
                onClick={() => navigate("/about")} 
                className="btn" 
                style={{ 
                  padding: "15px 35px", 
                  fontSize: "0.95rem",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                ABOUT US
              </button>
              <button 
                onClick={() => navigate("/members")} 
                style={{ 
                  background: "transparent", 
                  border: "none", 
                  color: "var(--text-primary)", 
                  fontWeight: "700", 
                  fontFamily: "Montserrat", 
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  padding: "10px",
                  width: isMobile ? "100%" : "auto"
                }}
                onMouseEnter={(e) => e.target.style.color = "var(--accent-pink)"}
                onMouseLeave={(e) => e.target.style.color = "var(--text-primary)"}
              >
                OUR TEAM
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: "1 1 50%", display: "flex", justifyContent: "flex-end", position: "relative" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "350px" : "600px",
            height: isMobile ? "300px" : "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <AnimatePresence mode="wait" custom={heroDirection}>
              <motion.img 
                key={heroIndex}
                custom={heroDirection}
                src={heroImages[heroIndex].src} 
                alt={heroImages[heroIndex].alt} 
                initial={{ opacity: 0, x: heroDirection > 0 ? 80 : -80, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ]
                }}
                exit={{ opacity: 0, x: heroDirection > 0 ? -80 : 80, scale: 0.95 }}
                transition={{ 
                  x: { type: "spring", stiffness: 220, damping: 25 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ 
                  width: "100%", 
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  boxShadow: "0 20px 50px rgba(192, 31, 92, 0.25)",
                  cursor: "pointer"
                }} 
                onClick={nextHero}
              />
            </AnimatePresence>

            {/* Next Arrow Button */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(217, 27, 92, 0.95)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextHero}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: isMobile ? "-8px" : "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: isMobile ? "40px" : "50px",
                height: isMobile ? "40px" : "50px",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.65)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                zIndex: 10,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                transition: "background 0.25s ease"
              }}
            >
              <ChevronRight size={isMobile ? 22 : 28} />
            </motion.button>

            {/* Prev Arrow Button */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(217, 27, 92, 0.95)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevHero}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: isMobile ? "-8px" : "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: isMobile ? "40px" : "50px",
                height: isMobile ? "40px" : "50px",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.65)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                zIndex: 10,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                transition: "background 0.25s ease"
              }}
            >
              <ChevronLeft size={isMobile ? 22 : 28} />
            </motion.button>

            {/* Indicator Dots */}
            <div style={{
              position: "absolute",
              bottom: isMobile ? "-28px" : "-35px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 10
            }}>
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setHeroDirection(idx > heroIndex ? 1 : -1);
                    setHeroIndex(idx);
                  }}
                  style={{
                    width: idx === heroIndex ? "26px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: idx === heroIndex ? "#d91b5c" : "rgba(128, 128, 128, 0.45)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  aria-label={`Switch to hero slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 5vw 40px" }}>
        <h2 style={{ fontSize: "2rem", color: "var(--text-primary)", marginBottom: "30px", textTransform: "uppercase" }}>
          Rotaract Club of BIT
        </h2>
        <div style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            The Rotaract Club of BIT is an institution-based Rotaract Club established to foster community service, leadership development, and professional growth among young adults.
          </p>
          <p>
            As one of the most active and distinguished Rotaract clubs, we strive to make a meaningful impact through a wide range of initiatives that provide members with opportunities for leadership, skill development, and social responsibility. Throughout the year, we organize various initiatives, including Blood Donation Camps, Paper Drives, and numerous community events.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto font-['Inter']">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-navy font-['Montserrat'] mb-4 uppercase tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            The four primary avenues through which we make a lasting impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
          {servicesData.map((service, idx) => {
            const isActive = activeService === idx;
            return (
              <motion.div
                key={service.id}
                onHoverStart={() => setActiveService(idx)}
                onHoverEnd={() => setActiveService(null)}
                
                animate={{
                  width: !isMobile ? (isActive ? "40%" : activeService !== null ? "20%" : "25%") : "100%",
                  height: isMobile ? (isActive ? "300px" : "150px") : "100%"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`group relative overflow-hidden cursor-pointer rounded-3xl flex flex-col justify-end bg-slate-900 transition-all duration-300 border-none ${
                  isActive 
                    ? "shadow-[0_0_40px_rgb(233,30,99,0.4)] z-10 scale-[1.02]" 
                    : "shadow-md opacity-90 scale-100 hover:opacity-100"
                }`}
              >
                
                <motion.div 
                  initial={false}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-60'}`}></div>

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                  <motion.div 
                    initial={false}
                    animate={{ 
                      y: isActive ? 0 : 10, 
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-3"
                  >
                    <div className={`p-4 rounded-full inline-flex ${isActive ? 'bg-vibrant-pink shadow-lg shadow-pink-500/50' : 'bg-white/10 backdrop-blur-md'} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    layout="position"
                    className="text-xl md:text-3xl font-black font-['Montserrat'] tracking-tight mb-1 uppercase"
                    style={{ color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                  >
                    {service.title}
                  </motion.h3>

                  <AnimatePresence>
                    {(isActive || isMobile) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: "8px" }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-slate-200 font-medium leading-relaxed text-sm md:text-base"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "100px 5vw", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
        >
          <img 
            src="/images/fourwaystep.jpg.png" 
            alt="The Four-Way Test" 
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </motion.div>
      </section>
      
      <Achievements />
      <Gallery />
      <FAQ />

    </>
  );
}
