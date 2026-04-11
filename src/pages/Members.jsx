import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TeamCard from "../components/TeamCard";

export default function Members() {
  const navigate = useNavigate();
  const members = [
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
    { designation: "Community Service Director", name: "Rtr.Srujan", logo_path: "/images/Srujan.png" },
    { name: "Rtr.Shreya Srinivas", designation: "PR Director", logo_path: "/images/Shreya.png" },
    { name: "Rtr.Anirudh", designation: "Event Co-Ordinator", logo_path: "/images/Anirudh.png" },
    { name: "Rtr.Sudhanshu Kumar", designation: "Immediate Past President", logo_path: "/images/Sudhanshu.png" },
    { designation: "Event Co-Ordinator", name: "Rtr.Parinetha", logo_path: "/images/Parinetha.png" },
    { name: "Rtr.Sanjana R Rao", designation: "Event Co-Ordinator", logo_path: "/images/Sanjana_Rao.png" },
    { name: "Rtr.Judah Samuel", designation: "Photography", logo_path: "/images/Judah.png" },
    { designation: "Editorial", name: "Rtr.Khushi Nahata", logo_path: "/images/Khushi.png" },
    { name: "Rtr.Harshitha Jadhav", designation: "Graphic Designer", logo_path: "/images/Harshitha.png" },
    { designation: "Graphic Designer", name: "Rtr.Shreyas", logo_path: "/images/Shreyas.png" },
    { name: "Rtr.Rohith HM", designation: "Graphic Designer", logo_path: "/images/Rohit.png" },
    { name: "Rtr.Manish", designation: "Marketing", logo_path: "/images/Manish.png" },
    { name: "Rtr.Prachi Rawat", designation: "Marketing", logo_path: "/images/Prachi.png" },
    { name: "Rtr.Raja", designation: "Creative", logo_path: "/images/Raja.png" },
    { name: "Rtr.Devika Sitalgeri", designation: "Creative", logo_path: "/images/Devika.png" },
    { name: "Rtr.Pragathi", designation: "Creative", logo_path: "/images/Pragathi.png" },
    { designation: "Web Designer", name: "Rtr.Vignesh BS", logo_path: "/images/Vignesh.png" },
    { name: "Rtr.Prakhyath S", designation: "Web Designer", logo_path: "/images/Prakhyath.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={{ background: "white", minHeight: "100vh", paddingBottom: "100px" }}>
      {/* Top Banner Image */}
      <div style={{ width: "100%", height: "450px", overflow: "hidden", marginTop: "85px" }}>
        <img 
          src="/images/Gallery17.jpeg" 
          alt="Team Group" 
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} 
        />
      </div>

      {/* Tab Navigation Simulator */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "60px", 
        borderBottom: "1px solid rgba(0,0,0,0.1)", 
        maxWidth: "1000px", 
        margin: "0 auto 60px",
        paddingTop: "20px"
      }}>
        <div 
          style={{ padding: "15px 10px", color: "var(--text-secondary)", fontWeight: "600", cursor: "pointer", fontSize: "1.05rem" }}
          onClick={() => navigate("/about")}
        >
          About us
        </div>
        <div style={{ padding: "15px 10px", color: "var(--text-primary)", fontWeight: "700", borderBottom: "3px solid #d91b5c", cursor: "pointer", fontSize: "1.05rem" }}>
          Our Team
        </div>
      </div>

      {/* Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px 40px",
          justifyContent: "center",
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "0 5vw"
        }}
      >
        {members.map(member => (
          <motion.div key={member.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ width: "240px" }}>
            <TeamCard
              name={member.name}
              designation={member.designation}
              logo_path={member.logo_path}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
