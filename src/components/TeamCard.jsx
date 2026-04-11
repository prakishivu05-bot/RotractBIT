import { motion } from "framer-motion";

export default function TeamCard({ name, designation, logo_path }) {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%"
      }}
      whileHover={{ y: -5 }}
    >
      <div 
        style={{
          width: "210px",
          height: "210px",
          borderRadius: "50%",
          backgroundColor: "#f4f6e6",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "15px"
        }}
      >
        <img
          src={logo_path}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      <h3 style={{ margin: "0 0 10px 0", fontSize: "1.05rem", fontWeight: "800", color: "#1a3a5f" }}>
        {name}
      </h3>
      <div style={{ 
        background: "#d91b5c",
        color: "white",
        padding: "4px 12px",
        borderRadius: "4px",
        fontSize: "0.65rem",
        fontWeight: "800",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        display: "inline-block"
      }}>
        {designation}
      </div>
    </motion.div>
  );
}
