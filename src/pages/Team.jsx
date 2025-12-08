import TeamCard from "../components/TeamCard"

export default function Team() {
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
    { name: "Rtr.Sanjana Rao", designation: "Event Co-Ordinator", logo_path: "/images/Sanjana_Rao.png" },
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
  ]

  return (
    <section style={{ textAlign: "center" }}>
      <h1>The Architects of Impact</h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          opacity: 0.85,
          lineHeight: "1.8",
        }}
      >
        Our club is powered by passionate individuals who believe in teamwork,
        leadership, and service. Each member brings unique strengths, ideas, and
        energy, working together to turn vision into action and ideas into impact.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {members.map(member => (
          <TeamCard
            key={member.name}
            name={member.name}
            designation={member.designation}
            logo_path={member.logo_path}
          />
        ))}
      </div>
    </section>
  )
}
