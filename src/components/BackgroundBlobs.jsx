import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] 
                   top-[-10%] left-[-10%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-1)" }}
        animate={{ y: [0, 40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] 
                   bottom-[10%] right-[-5%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-2)" }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] 
                   top-[40%] left-[40%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-3)" }}
        animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Blob 4 */}
      <motion.div
        className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] 
                   bottom-[20%] left-[10%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-1)" }}
        animate={{ y: [0, -40, 0], x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Blob 5 */}
      <motion.div
        className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] 
                   top-[20%] right-[20%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-2)" }}
        animate={{ y: [0, 50, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Blob 6 */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] 
                   top-[60%] right-[30%] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blob-3)" }}
        animate={{ y: [0, -30, 0], x: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

    </div>
  );
}