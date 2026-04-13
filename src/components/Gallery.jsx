import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

export default function Gallery() {
  const scrollRef = useRef(null);

  const images = [
    "/images/Gallery17.jpeg",
    "/images/Gallery3.jpeg",
    "/images/Gallery4.jpeg", 
    "/images/Gallery6.jpeg",
    "/images/Gallery7.jpeg",
    "/images/Gallery2.jpeg",
    "/images/Gallery9.png", 
    "/images/Gallery1.jpeg",
    "/images/Gallery11.png",
    "/images/Gallery12.png",
    "/images/Gallery5.jpeg", 
    "/images/Gallery15.png",
    "/images/Gallery16.jpeg"
    
  ];

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: "80px 0 80px 5vw", overflow: "hidden" }}>
      <h2 style={{ fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "40px" }}>Image Gallery</h2>
      
      <div 
        ref={scrollRef}
        style={{ 
          display: "flex", 
          gap: "30px", 
          overflowX: "auto", 
          scrollbarWidth: "none", 
          scrollSnapType: "x mandatory",
          paddingBottom: "20px"
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              minWidth: "350px", 
              height: "350px", 
              scrollSnapAlign: "start",
              borderRadius: "16px",
              overflow: "hidden"
            }}
          >
            <img src={img} alt={`Gallery ${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "5vw", marginTop: "20px" }}>
        <button onClick={scrollLeft} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}>
          <ArrowLeft size={24} />
        </button>
        <button onClick={scrollRight} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-primary)" }}>
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
