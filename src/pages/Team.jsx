
import TeamCard from "../components/TeamCard"

import Vignesh from "../assets/Vignesh.png"
import Abdullah from "../assets/Abdullah.png"
import Anirudh from "../assets/Anirudh.png"
import Devika from "../assets/Devika.png"
import Harshitha from "../assets/Harshitha.png"
import Judah from "../assets/Judah.png"
import Khushi from "../assets/Khushi.png"
import Kushal from "../assets/Kushal.png"
import Manish from "../assets/Manish.png"
import Medha from "../assets/Medha.png"
import Mitu_shyam from "../assets/Mitu_shyam.png"
import Parinetha from "../assets/Parinetha.png"
import Parwath from "../assets/Parwath.png"
import Raja from "../assets/Raja.png"
import Rohit from "../assets/Rohit.png"
import Sanjana_Rao from "../assets/Sanjana_Rao.png"
import Sharanya from "../assets/Sharanya.png"
import Shreya from "../assets/Shreya.png"
import Shreyas from "../assets/Shreyas.png"
import Srujan from "../assets/Srujan.png"
import Sudhanshu from "../assets/Sudhanshu.png"
import Taksha from "../assets/Taksha.png"
import Varun from "../assets/Varun.png"
import Yuvaraj from "../assets/Yuvaraj.png"
import Prakhyath from "../assets/Prakhyath.png"
import Vijhortha from "../assets/Vijhortha.png"
import Rashi from "../assets/Rashi.png"
import Pragathi from "../assets/Pragathi.png"
import Prachi from "../assets/Prachi.png"

export default function Team() {
  const members = [
    {
      designation: "President",
      name: "Rtr.Vijhortha VS",
      logo_path: Vijhortha,
    },
    {
      name: "Rtr.Varun V",
      designation: "Vice President",
      logo_path: Varun,
    },
    {
      name: "Rtr.Sharanya S Devadiga",
      designation: "Club Advisor",
      logo_path: Sharanya,
    },
    {
      name: "Rtr.Taksha Tangudu",
      designation: "Secretary",
      logo_path: Taksha,
    },
    {
      name: "Rtr.Parwath Sri Raju K",
      designation: "Joint Secretary",
      logo_path: Parwath,
    },
    {
      designation: "Treasurer",
      name: "Rtr.Rashi Goyal",
      logo_path: Rashi,
    },
    {
      name: "Rtr.Mitu Shyam",
      designation: "Sergeant",
      logo_path: Mitu_shyam,
    },
    {
      name: "Rtr.Yuvaraj Gowda",
      designation: "Club Media Lead",
      logo_path: Yuvaraj,
    },
    {
      name: "Rtr.Kushal",
      designation: "Professional Service Director",
      logo_path: Kushal,
    },
    {
      name: "Rtr.Abdullah",
      designation: "International Service Director",
      logo_path: Abdullah,
    },
    {
      name: "Rtr.Medha Balaji",
      designation: "Club Service Director",
      logo_path: Medha,
    },
    {
      designation: "Community Service Director",
      name: "Rtr.Srujan",
      logo_path: Srujan,
    },
    {
      name: "Rtr.Shreya Srinivas",
      designation: "PR Director",
      logo_path: Shreya,
    },
    {
      name: "Rtr.Anirudh",
      designation: "Event Co-Ordinator",
      logo_path: Anirudh,
    },
    {
      name: "Rtr.Sudhanshu Kumar",
      designation: "Immediate Past President",
      logo_path: Sudhanshu,
    },
    {
      designation: "Event Co-Ordinator",
      name: "Rtr.Parinetha",
      logo_path: Parinetha,
    },
    {
      name: "Rtr.Sanjana Rao",
      designation: "Event Co-Ordinator",
      logo_path: Sanjana_Rao,
    },
    {
      name: "Rtr.Judah Samuel",
      designation: "Photography",
      logo_path: Judah,
    },
    {
      designation: "Editorial",
      name: "Rtr.Khushi Nahata",
      logo_path: Khushi,
    },
    {
      name: "Rtr.Harshitha Jadhav",
      designation: "Graphic Designer",
      logo_path: Harshitha,
    },
    {
      designation: "Graphic Designer",
      name: "Rtr.Shreyas",
      logo_path: Shreyas,
    },
    {
      name: "Rtr.Rohith HM",
      designation: "Graphic Designer",
      logo_path: Rohit,
    },
    {
      name: "Rtr.Manish",
      designation: "Marketing",
      logo_path: Manish,
    },
    {
      name: "Rtr.Prachi Rawat",
      designation: "Marketing",
      logo_path: Prachi,
    },
    {
      name: "Rtr.Raja",
      designation: "Creative",
      logo_path: Raja,
    },
    {
      name: "Rtr.Devika Sitalgeri",
      designation: "Creative",
      logo_path: Devika,
    },
    {
      name: "Rtr.Pragathi",
      designation: "Creative",
      logo_path: Pragathi,
    },
    {
      designation: "Web Designer",
      name: "Rtr.Vignesh BS",
      logo_path: Vignesh,
    },
    {
      name: "Rtr.Prakhyath S",
      designation: "Web Designer",
      logo_path: Prakhyath,
    },
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
        energy, working together to turn vision into action and ideas into
        impact.
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
