export default function Publications() {
  const annualReportLink = "/docs/annual-report.pdf"
  const eventCalendarLink = "/docs/event-calender.pptx" 

  return (
    <section style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>📚 Publications</h1>
      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          opacity: 0.85,
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        A growing archive of our initiatives, milestones, and moments of impact — documented for
        today and preserved for tomorrow.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* CARD 1: Annual Club Report */}
        <a
          href={annualReportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{
            width: "300px",
            padding: "25px",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")
          }
        >
          <h3>Rotaract BIT Club Report &amp; Highlights</h3>
          <p style={{ opacity: 0.7, textAlign: "left" }}>
            A detailed digital report capturing the major service projects, flagship events, and
            leadership activities carried out by Rotaract BIT during the academic year. This
            document reflects our commitment to service, teamwork, and meaningful community impact.
          </p>
          <p style={{ marginTop: "15px", fontWeight: "bold", color: "#e91e63" }}>
            Click to View Document
          </p>
        </a>

        {/* CARD 2: Future Event Calendar */}
        <a
          href={eventCalendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{
            width: "300px",
            padding: "25px",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")
          }
        >
          <h3>Future Event Calendar: 2025–2026</h3>
          <p style={{ opacity: 0.7, textAlign: "left" }}>
            An official planning document showcasing our upcoming service projects, awareness
            drives, professional development programs, and fellowship activities scheduled for the
            year ahead.
          </p>
          <p style={{ marginTop: "15px", fontWeight: "bold", color: "#e91e63" }}>
            Click to View Document
          </p>
        </a>
      </div>
    </section>
  )
}
