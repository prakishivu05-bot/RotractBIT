import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    "/images/Gallery1.jpeg",
    "/images/Gallery2.jpeg",
    "/images/Gallery3.jpeg",
    "/images/Gallery4.jpeg",
    "/images/Gallery5.jpeg",
    "/images/Gallery6.jpeg",
    "/images/Gallery7.jpeg",
    "/images/Gallery8.png",
    "/images/Gallery9.png",
    "/images/Gallery10.png",
    "/images/Gallery11.png",
    "/images/Gallery12.png",
    "/images/Gallery14.png",
    "/images/Gallery15.png",
    "/images/Gallery16.jpeg",
    "/images/Gallery17.jpeg"
  
  ];

  return (
    <section style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "5vw", paddingRight: "5vw", minHeight: "100vh" }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "40px", textTransform: "uppercase" }}
      >
        Image Gallery
      </motion.h1>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "25px"
      }}>
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", rotate: Math.random() > 0.5 ? 2 : -2 }}
            transition={{ duration: 0.4 }}
            style={{ borderRadius: "12px", overflow: "hidden", height: "300px", background: "var(--bg-secondary)", cursor: "pointer", border: "1px solid rgba(0,0,0,0.05)" }}
          >
            <img src={img} alt={`Gallery highlight ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
