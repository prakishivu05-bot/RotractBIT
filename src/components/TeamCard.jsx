
import "./team.css"

export default function TeamCard({ name, designation, logo_path }) {
  return (
    <div
      className="card team-card"
      style={{
        width: "260px",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <img
        src={logo_path}
        alt={name}
        className="team-photo"
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "18px",
          border: "3px solid rgba(255,255,255,0.25)",
        }}
      />
      <h3 style={{ marginBottom: "6px" }}>{name}</h3>
      <p style={{ opacity: 0.7 }}>{designation}</p>
    </div>
  )
}
