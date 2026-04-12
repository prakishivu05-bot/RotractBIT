import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds to show off the premium animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const tagline = "Rotaract Club of Bangalore Institute Of Technology".split(" ");

  // Generate deterministic randomized particles/bubbles memory-safely on load
  const particles = useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 12 + 4, // 4px to 16px wide
    left: `${Math.random() * 100}vw`, // Random X position
    delay: Math.random() * 1.5,
    duration: Math.random() * 2 + 1.5, // 1.5s to 3.5s speed
    isPink: Math.random() > 0.5
  })), []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'var(--bg-primary, #ffffff)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
          }}
        >
          {/* Animated Ambient Background Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '150vw',
              height: '150vh',
              background: 'radial-gradient(circle, var(--accent-pink, #e91e63) 0%, transparent 50%)',
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />

          {/* Floating Professional Particles / Bubbles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: '110vh', opacity: 0, scale: 0 }}
              animate={{ y: '-10vh', opacity: [0, 0.8, 0], scale: [0, 1, 0.5] }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: "easeOut",
              }}
              style={{
                position: 'absolute',
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                background: p.isPink ? 'var(--accent-pink, #e91e63)' : '#1EB8A6',
                boxShadow: `0 0 10px ${p.isPink ? 'rgba(233, 30, 99, 0.5)' : 'rgba(30, 184, 166, 0.5)'}`,
                zIndex: 1
              }}
            />
          ))}

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              zIndex: 10
            }}
          >
            {/* 3D Appering Logo Container */}
            <motion.div 
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20, 
                delay: 0.1 
              }}
            >
              {/* Dynamic Scaling Rings */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  border: '2px solid var(--accent-pink, #e91e63)',
                  zIndex: 0
                }}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0, 0.8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                style={{
                  position: 'absolute',
                  inset: -5,
                  borderRadius: '50%',
                  border: '2px solid #1EB8A6',
                  zIndex: 0
                }}
              />

              {/* Glowing Aura behind logo */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'var(--accent-pink, #e91e63)',
                  filter: 'blur(25px)',
                  zIndex: 0
                }}
              />

              {/* The new logo_ring.jpg */}
              <motion.img
                src="/images/logo_ring.jpg"
                alt="Rotaract Ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '150px',
                  height: '150px',
                  position: 'relative',
                  zIndex: 1,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 0 0 4px var(--bg-primary, #ffffff)',
                  willChange: 'transform'
                }}
              />
            </motion.div>

            {/* Animated Staggered Tagline */}
            <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--text-primary, #333)',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '1px',
                  textAlign: 'center',
                  margin: '0',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '6px',
                  maxWidth: '90%'
                }}
              >
                {tagline.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              
              {/* Sleek Loading Bar */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "150px", opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                style={{
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, var(--accent-pink, #e91e63), #1EB8A6, transparent)',
                  borderRadius: '10px',
                  marginTop: '15px'
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
