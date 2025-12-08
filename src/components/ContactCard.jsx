// src/components/ContactCard.jsx
export default function ContactCard({ role, name, phone, email }) {
  return (
    <div
      className="card contact-card"
      style={{
        width: "300px",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{role}</h2>
      <p style={{ opacity: 0.75, marginBottom: "6px" }}>{name}</p>
      <p style={{ opacity: 0.65 }}>{phone}</p>
      <p style={{ opacity: 0.65 }}>{email}</p>
    </div>
  )
}
