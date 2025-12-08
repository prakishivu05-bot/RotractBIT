// src/pages/Contact.jsx  (path may be different in your project)
import ContactCard from "../components/ContactCard"
import "./contact.css"                                // ✅ contact styles

export default function Contact() {
  const contacts = [
    {
      role: "President",
      name: "Rtr.Vijhortha VS",
      phone: "+91 8310732653",
      email: "vijho2211@gmail.com",
    },
    {
      role: "Secretary",
      name: "Rtr.Taksha Tangudu",
      phone: "+91 9686239172",
      email: "taksha.tangudu@gmail.com",
    },
    {
      role: "Club Advisor",
      name: "Rtr.Sharanya S Devadiga",
      phone: "+91 9449168630",
      email: "devadigasharanya18@gmail.com",
    },
  ]

  return (
    <section className="contact-section" style={{ padding: "60px 20px" }}>
      <div
        className="contact-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT: 3D illustration */}
        <div className="contact-ill-wrapper" style={{ flex: 1, minWidth: "260px", textAlign: "center" }}>
          <img
            src='/images/shape-person.png'
            alt="Person contacting Rotaract BIT"
            className="contact-ill"
            style={{ maxWidth: "260px", width: "100%" }}
          />
        </div>

        {/* RIGHT: text + cards */}
        <div style={{ flex: 1, minWidth: "320px", textAlign: "center" }}>
          <h1>Contact Us</h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto 0",
              opacity: 0.85,
              lineHeight: "1.8",
            }}
          >
            Have a question or an idea? Reach out to our leadership team and stay
            connected with everything happening at our club.
          </p>

          <div
            className="contact-cards-wrapper"
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "35px",
              flexWrap: "wrap",
            }}
          >
            {contacts.map(person => (
              <ContactCard
                key={person.role}
                role={person.role}
                name={person.name}
                phone={person.phone}
                email={person.email}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
