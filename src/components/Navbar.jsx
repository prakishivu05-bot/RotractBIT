import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Logo + Home Link */}
      <Link to="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <img
          src="/images/logo.jpg"
          alt="Rotaract BIT Logo"
          style={{
            height: "75px",
            width: "auto",
            objectFit: "contain",
            borderRadius: "8px"
          }}
        />
      </Link>

      {/* Navigation Links */}
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}
