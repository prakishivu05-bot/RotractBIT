import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div
        className="blob-bg"
        style={{ width: "600px", height: "600px", background: "var(--blob-1)", top: "-10%", left: "-10%" }}
        animate={{ y: [0, 40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob-bg"
        style={{ width: "500px", height: "500px", background: "var(--blob-2)", bottom: "10%", right: "-5%" }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="blob-bg"
        style={{ width: "400px", height: "400px", background: "var(--blob-3)", top: "40%", left: "40%" }}
        animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="blob-bg"
        style={{ width: "300px", height: "300px", background: "var(--blob-1)", bottom: "20%", left: "10%" }}
        animate={{ y: [0, -40, 0], x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="blob-bg"
        style={{ width: "250px", height: "250px", background: "var(--blob-2)", top: "20%", right: "20%" }}
        animate={{ y: [0, 50, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="blob-bg"
        style={{ width: "350px", height: "350px", background: "var(--blob-3)", top: "60%", right: "30%" }}
        animate={{ y: [0, -30, 0], x: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
