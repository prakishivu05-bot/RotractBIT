import TeamCard from "../components/TeamCard"

export default function Team() {
  const members = [
    { designation: "President", name: "Rtr.Vijhortha VS", logo_path: "/public/images/Vijhortha.png" },
    { name: "Rtr.Varun V", designation: "Vice President", logo_path: "/public/images/Varun.png" },
    { name: "Rtr.Sharanya S Devadiga", designation: "Club Advisor", logo_path: "/public/images/Sharanya.png" },
    { name: "Rtr.Taksha Tangudu", designation: "Secretary", logo_path: "/public/images/Taksha.png" },
    { name: "Rtr.Parwath Sri Raju K", designation: "Joint Secretary", logo_path: "/public/images/Parwath.png" },
    { designation: "Treasurer", name: "Rtr.Rashi Goyal", logo_path: "/public/images/Rashi.png" },
    { name: "Rtr.Mitu Shyam", designation: "Sergeant", logo_path: "/public/images/Mitu_shyam.png" },
    { name: "Rtr.Yuvaraj Gowda", designation: "Club Media Lead", logo_path: "/public/images/Yuvaraj.png" },
    { name: "Rtr.Kushal", designation: "Professional Service Director", logo_path: "/public/images/Kushal.png" },
    { name: "Rtr.Abdullah", designation: "International Service Director", logo_path: "/public/images/Abdullah.png" },
    { name: "Rtr.Medha Balaji", designation: "Club Service Director", logo_path: "/public/images/Medha.png" },
    { designation: "Community Service Director", name: "Rtr.Srujan", logo_path: "/public/images/Srujan.png" },
    { name: "Rtr.Shreya Srinivas", designation: "PR Director", logo_path: "/public/images/Shreya.png" },
    { name: "Rtr.Anirudh", designation: "Event Co-Ordinator", logo_path: "/public/images/Anirudh.png" },
    { name: "Rtr.Sudhanshu Kumar", designation: "Immediate Past President", logo_path: "/public/images/Sudhanshu.png" },
    { designation: "Event Co-Ordinator", name: "Rtr.Parinetha", logo_path: "/public/images/Parinetha.png" },
    { name: "Rtr.Sanjana Rao", designation: "Event Co-Ordinator", logo_path: "/public/images/Sanjana_Rao.png" },
    { name: "Rtr.Judah Samuel", designation: "Photography", logo_path: "/public/images/Judah.png" },
    { designation: "Editorial", name: "Rtr.Khushi Nahata", logo_path: "/public/images/Khushi.png" },
    { name: "Rtr.Harshitha Jadhav", designation: "Graphic Designer", logo_path: "/public/images/Harshitha.png" },
    { designation: "Graphic Designer", name: "Rtr.Shreyas", logo_path: "/public/images/Shreyas.png" },
    { name: "Rtr.Rohith HM", designation: "Graphic Designer", logo_path: "/public/images/Rohit.png" },
    { name: "Rtr.Manish", designation: "Marketing", logo_path: "/public/images/Manish.png" },
    { name: "Rtr.Prachi Rawat", designation: "Marketing", logo_path: "/public/images/Prachi.png" },
    { name: "Rtr.Raja", designation: "Creative", logo_path: "/public/images/Raja.png" },
    { name: "Rtr.Devika Sitalgeri", designation: "Creative", logo_path: "/public/images/Devika.png" },
    { name: "Rtr.Pragathi", designation: "Creative", logo_path: "/public/images/Pragathi.png" },
    { designation: "Web Designer", name: "Rtr.Vignesh BS", logo_path: "/public/images/Vignesh.png" },
    { name: "Rtr.Prakhyath S", designation: "Web Designer", logo_path: "/public/images/Prakhyath.png" },
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
