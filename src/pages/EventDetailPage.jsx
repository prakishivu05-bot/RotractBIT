import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock, Users, ArrowRight, Share2, Heart, ShieldQuestion, Star } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523580494112-071d16944140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558008258-3256797b401e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

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
  const displayImage = event.image && event.image.includes("placeholder") ? FALLBACK_IMAGES[0] : (event.image || FALLBACK_IMAGES[0]);
  const galleryImages = [displayImage, ...FALLBACK_IMAGES.slice(1, 6)]; // Total 6 images
  
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr lg:1fr', gap: '60px' }}>
          
          <div style={{ flex: '1 1 60%' }}>
            {/* About Section */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Star size={28} color="var(--accent-pink)" /> About The Event
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '20px' }}>
                {event.longDescription || "Join us for an incredible experience that brings together passionate individuals from across the community. This event is designed to foster growth, networking, and impactful actions!"}
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                Beyond the core agenda, attendees will have the opportunity to engage in interactive workshops, panel discussions, and hands-on activities that leave a lasting impact. Whether you are a seasoned member or joining us for the first time, this event promises value, learning, and fellowship.
              </p>
            </motion.div>

            {/* Agenda/Schedule Section Placeholder */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Clock size={28} color="var(--accent-pink)" /> Event Schedule
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { time: '09:00 AM', title: 'Registration & Welcome Kit Distribution' },
                  { time: '10:00 AM', title: 'Inaugural Ceremony & Keynote Address' },
                  { time: '12:00 PM', title: 'Interactive Sessions & Workshops' },
                  { time: '01:30 PM', title: 'Networking Lunch' },
                  { time: '02:30 PM', title: 'Group Activities & Implementations' },
                  { time: '04:00 PM', title: 'Closing Ceremony & Vote of Thanks' }
                ].map((item, i) => (
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

            {/* Event Gallery */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>Event Gallery</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: '200px', gap: '15px' }}>
                {galleryImages.map((img, i) => {
                  // Masonry style dynamic spanning
                  const spans = [
                    { gridColumn: 'span 8', gridRow: 'span 2' }, // Large main image
                    { gridColumn: 'span 4', gridRow: 'span 1' }, // Small side
                    { gridColumn: 'span 4', gridRow: 'span 1' }, // Small side
                    { gridColumn: 'span 4', gridRow: 'span 1' }, // Bottom small
                    { gridColumn: 'span 4', gridRow: 'span 1' }, // Bottom small
                    { gridColumn: 'span 4', gridRow: 'span 1' }, // Bottom small
                  ];
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 0.98, filter: 'brightness(1.1)' }}
                      style={{ 
                        ...spans[i], borderRadius: '20px', overflow: 'hidden', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer' 
                      }}
                    >
                      <img src={img} alt={`Gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

          </div>
          
          {/* Sticky Sidebar */}
          <div style={{ flex: '1 1 35%' }}>
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Registration / Action Card */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                style={{ 
                  background: 'var(--bg-secondary)', padding: '40px', borderRadius: '30px', 
                  boxShadow: '0 25px 50px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.03)',
                  textAlign: 'center'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <span style={{ 
                    background: 'rgba(30, 184, 166, 0.1)', color: '#1EB8A6', padding: '8px 20px', 
                    borderRadius: '30px', fontWeight: '700', fontSize: '0.9rem' 
                  }}>
                    {event.status === "Upcoming" ? "Registration Open" : "Event Concluded"}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Join the Action!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.6' }}>
                  Don't miss out on this incredible opportunity. Secure your spot now and be part of the change.
                </p>
                
                <button className="btn" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginBottom: '15px' }} disabled={event.status === "Completed"}>
                  {event.status === "Upcoming" ? "Register Now" : "View Post-Event Report"}
                </button>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <button style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', 
                    border: '1px solid rgba(0,0,0,0.1)', padding: '10px 20px', borderRadius: '50px',
                    fontWeight: '600', color: 'var(--text-primary)', cursor: 'pointer', flex: 1, justifyContent: 'center'
                  }}>
                    <Share2 size={16} /> Share
                  </button>
                  <button style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', 
                    border: '1px solid rgba(0,0,0,0.1)', padding: '10px 20px', borderRadius: '50px',
                    fontWeight: '600', color: 'var(--text-primary)', cursor: 'pointer', flex: 1, justifyContent: 'center'
                  }}>
                    <Heart size={16} /> Save
                  </button>
                </div>
              </motion.div>

              {/* Coordinator Card */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                style={{ 
                  background: 'var(--bg-secondary)', padding: '30px', borderRadius: '30px', 
                  boxShadow: '0 15px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldQuestion size={20} color="var(--accent-pink)" /> Have questions?
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src="https://i.pravatar.cc/150?img=11" alt="Coordinator" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5 style={{ margin: '0 0 5px', fontSize: '1.1rem' }}>John Doe</h5>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Event Chairperson</p>
                    <a href="mailto:contact@rotaract.org" style={{ color: 'var(--accent-pink)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block', marginTop: '5px' }}>
                      Contact Organizer →
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
