import { useNavigate } from "react-router-dom"

import Achievements from "../components/Achievements"
import Gallery from "../components/Gallery"

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          position: "relative",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/Gallery1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.45)",
            zIndex: 1,
          }}
        ></div>

        {/* Neon Glow Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(224, 25, 102, 0.25), transparent 70%)",
            animation: "pulseGlow 6s ease-in-out infinite",
            zIndex: 2,
          }}
        ></div>

        {/* Hero Content */}
        <div style={{ zIndex: 3, maxWidth: "850px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Rotaract Club of BIT
          </h1>

          <p
            style={{
              opacity: 0.85,
              lineHeight: "1.6",
              fontSize: "1.1rem",
              marginBottom: "35px",
            }}
          >
            Creating impact through service, leadership, teamwork and innovation.
          </p>

          <button onClick={() => setTimeout(() => navigate("/team"), 3 * 1000)} className="btn" style={{ padding: "14px 32px" }}>
            Our Team
          </button>
        </div>
      </section>

      {/* MAIN TEXT */}
      <section style={{ textAlign: "center" }}>
        <p
          style={{
            maxWidth: "850px",
            margin: "40px auto",
            opacity: 0.85,
            lineHeight: "1.8",
          }}
        >
          The Rotaract Club of Bangalore Institute of Technology is a dynamic
          community of young leaders driven by service, creativity, and a passion
          for making a real impact. We bring together students who believe in
          leadership, integrity, teamwork, growth, and meaningful friendships
          while working toward a better society.
          <br />
          <br />
          With strong teamwork, innovative ideas, and bold, creative events, we
          aim to inspire those around us and create experiences that matter. Our
          projects span across community service, professional development,
          educational outreach, and impactful campus initiatives.
          <br />
          <br />
          As a youth-led movement, we strive to learn, lead, and uplift—
          turning our ideas into action and our actions into lasting change.
        </p>
      </section>

      <Gallery />
      <Achievements />
    </>
  )
}
