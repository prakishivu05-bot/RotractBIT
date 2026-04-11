import { Video, Camera, Briefcase, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      background: "var(--bg-secondary)", 
      padding: "60px 5vw 20px", 
      textAlign: "center", 
      borderTop: "1px solid var(--bg-primary)",
      color: "var(--text-primary)"
    }}>
      <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "25px", flexWrap: "wrap", background: "var(--bg-primary)", padding: "10px", borderRadius: "10px", alignSelf: "center", maxWidth: "600px", margin: "0 auto 30px" }}>
        <img src="/images/rotaract3191.png" alt="Rotaract 3191" style={{ height: "70px", objectFit: "contain" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/logo.jpg" alt="Rotaract Club of BIT" style={{ height: "65px", objectFit: "contain", maxWidth: "250px" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/rotary3191.png" alt="Rotary 3191" style={{ height: "70px", objectFit: "contain" }} />
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "100px", 
        flexWrap: "wrap",
        marginBottom: "40px"
      }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "var(--text-primary)", fontSize: "1.1rem" }}>President</h4>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>Rtr. Vijhortha VS</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>president@rotaractbit.com</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>+91 99999 99999</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "var(--text-primary)", fontSize: "1.1rem" }}>Secretary</h4>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>Rtr. Taksha Tangudu</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>secretary@rotaractbit.com</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>+91 88888 88888</p>
        </div>
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        marginBottom: "30px"
      }}>
        <a href="#" style={{ color: "var(--text-secondary)" }}><Video size={24} /></a>
        <a href="#" style={{ color: "var(--text-secondary)" }}><Camera size={24} /></a>
        <a href="#" style={{ color: "var(--text-secondary)" }}><Briefcase size={24} /></a>
        <a href="#" style={{ color: "var(--text-secondary)" }}><Mail size={24} /></a>
        <a href="#" style={{ color: "var(--text-secondary)" }}><FileText size={24} /></a>
      </div>

      <p style={{ 
        color: "var(--text-light)", 
        fontSize: "0.9rem", 
        margin: 0,
        fontWeight: "500"
      }}>
        © 2026 Rotaract Club of BIT. All Rights Reserved.
      </p>
    </footer>
  );
}
