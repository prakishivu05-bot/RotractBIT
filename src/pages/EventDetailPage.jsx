import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, Users, ArrowRight, Share2, Heart, ShieldQuestion, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';



export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const event = eventsData.find(e => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Event Not Found</h2>
        <button onClick={() => navigate('/events')} className="btn">Back to Events</button>
      </div>
    );
  }

  // Derive extra details
  const displayImage = event.image || "";
  const galleryImages = event.images && event.images.length > 0 
    ? event.images 
    : (event.image ? [event.image] : []);
  
  // Staggered animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", position: "relative" }}>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.95)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {/* Close Button */}
            <button onClick={() => setLightboxIndex(null)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '54px', height: '54px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(217, 27, 92, 0.8)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1)); }} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '60px', height: '60px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}>
              <ChevronLeft size={36} />
            </button>

            {/* Next Button */}
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0)); }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '60px', height: '60px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}>
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} src={galleryImages[lightboxIndex]} alt={`Enlarged view ${lightboxIndex + 1}`} style={{ maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', borderRadius: '12px' }} />

            {/* Pagination Counter */}
            <div style={{ position: 'absolute', bottom: '30px', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', fontWeight: '500', letterSpacing: '1px' }}>
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Navbar replacement for back button */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 9999 }}
      >
        <Link 
          to="/events"
          style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            background: 'var(--bg-secondary)', backdropFilter: 'blur(10px)',
            padding: '10px 20px', borderRadius: '50px', border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer',
            fontWeight: '600', color: 'var(--text-primary)', transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
        >
          <ArrowLeft size={18} /> Back
        </Link>
      </motion.div>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '70vh', width: '100%', overflow: 'hidden' }}>
        <motion.div style={{ width: '100%', height: '120%', y: y1, backgroundImage: `url(${displayImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '-10%', left: 0 }} />
        <motion.div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,15,30,0.95))', opacity }} />
        
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '5vw', color: 'white', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span style={{ 
              background: 'var(--accent-pink)', padding: '6px 16px', borderRadius: '30px', 
              fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px',
              display: 'inline-block', marginBottom: '15px' 
            }}>
              {event.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', marginBottom: '15px', lineHeight: '1.1', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              {event.title}
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>
              {event.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '-50px auto 0', padding: '0 5vw 100px', position: 'relative', zIndex: 20 }}>
        
        {/* Info Cards Row */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '60px' }}
        >
          {[{
            icon: <Calendar size={24} color="var(--accent-pink)" />, title: "Date & Time",
            desc1: event.formattedDate, desc2: "9:00 AM - 4:00 PM (IST)"
          }, {
            icon: <MapPin size={24} color="var(--accent-pink)" />, title: "Location",
            desc1: event.location, desc2: "Get Directions"
          }, {
            icon: <Users size={24} color="var(--accent-pink)" />, title: "Expected Audience",
            desc1: "250+ Attendees", desc2: "Open to District"
          }].map((info, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              background: 'var(--bg-secondary)', padding: '30px', borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)', display: 'flex', gap: '20px', alignItems: 'center'
            }}>
              <div style={{ background: 'rgba(217, 27, 92, 0.1)', padding: '15px', borderRadius: '50%' }}>
                {info.icon}
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{info.title}</h4>
                <p style={{ margin: 0, fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{info.desc1}</p>
                <p style={{ margin: '5px 0 0', color: 'var(--accent-pink)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '600' }}>{info.desc2}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Layout */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ width: '100%' }}>
            {/* About Section */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Star size={28} color="var(--accent-pink)" /> About The Event
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
                {event.longDescription || "Join us for an incredible experience that brings together passionate individuals from across the community. This event is designed to foster growth, networking, and impactful actions!"}
              </p>
            </motion.div>

            {/* Impact Section */}
            {event.impact && event.impact.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Star size={28} color="var(--accent-pink)" /> Our Impact
                </h2>
                <ul style={{ fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: '1.9', listStyleType: 'disc', paddingLeft: '20px' }}>
                  {event.impact.map((point, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Agenda/Schedule Section Placeholder */}
            {event.schedule && event.schedule.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Clock size={28} color="var(--accent-pink)" /> Event Schedule
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {event.schedule.map((item, i) => (
                    <div key={i} style={{ 
                      display: 'flex', gap: '20px', padding: '20px', background: 'var(--bg-secondary)', 
                      borderRadius: '16px', borderLeft: '4px solid var(--accent-pink)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{ fontWeight: '700', color: 'var(--accent-pink)', minWidth: '85px' }}>{item.time}</div>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.title}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Event Gallery */}
            {galleryImages.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>Event Gallery</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: '200px', gap: '15px' }}>
                {galleryImages.map((img, i) => {
                  let styleSpan = { gridColumn: 'span 4', gridRow: 'span 1' };
                  if (galleryImages.length === 1) {
                    styleSpan = { gridColumn: 'span 12', gridRow: 'span 2' };
                  } else if (galleryImages.length === 2) {
                    styleSpan = i === 0 ? { gridColumn: 'span 8', gridRow: 'span 2' } : { gridColumn: 'span 4', gridRow: 'span 2' };
                  } else if (galleryImages.length === 3) {
                    styleSpan = i === 0 ? { gridColumn: 'span 8', gridRow: 'span 2' } : { gridColumn: 'span 4', gridRow: 'span 1' };
                  } else {
                    const spans = [
                      { gridColumn: 'span 8', gridRow: 'span 2' },
                      { gridColumn: 'span 4', gridRow: 'span 1' },
                      { gridColumn: 'span 4', gridRow: 'span 1' },
                      { gridColumn: 'span 4', gridRow: 'span 1' },
                      { gridColumn: 'span 4', gridRow: 'span 1' },
                      { gridColumn: 'span 4', gridRow: 'span 1' },
                    ];
                    styleSpan = spans[i] || { gridColumn: 'span 4', gridRow: 'span 1' };
                  }

                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 0.98, filter: 'brightness(1.1)' }}
                      onClick={() => setLightboxIndex(i)}
                      style={{ 
                        ...styleSpan, borderRadius: '20px', overflow: 'hidden', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer' 
                      }}
                    >
                      <img src={img} alt={`Gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
