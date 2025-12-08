export default function Footer() {
  return (
    <footer
      style={{
        padding: "50px 10vw",
        background: "rgba(0,0,0,0.25)",
        marginTop: "80px",
        textAlign: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        <img
          src="/src/assets/rotaract3191.png"
          alt="Rotaract District 3191"
          style={{ height: "60px", opacity: 0.9 }}
        />

        <img
          src="/src/assets/rotary3191.png"
          alt="Rotary District 3191"
          style={{ height: "60px", opacity: 0.9 }}
        />

        <img
          src="/src/assets/ufg.png"
          alt="Unite For Good"
          style={{ height: "60px", opacity: 0.9 }}
        />

        <img
          src="/src/assets/zoneyodha.png"
          alt="Zone Yodha"
          style={{ height: "60px", opacity: 0.9 }}
        />
        <img
          src="src\assets\logo.jpg"
          alt="Rotract_Logo"
          style={{ height: "60px", opacity: 0.9 }}
        />
      </div>
      

      <div style={{ marginTop: "25px", color: "#999" }}>
        © 2025 Rotaract BIT
      </div>
    </footer>
  );
}
