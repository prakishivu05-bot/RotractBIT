import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      background: "var(--bg-secondary)", 
      padding: "60px 5vw 20px", 
      textAlign: "center", 
      borderTop: "1px solid var(--bg-primary)",
      color: "var(--text-primary)"
    }}>
      <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "25px", flexWrap: "wrap", background: "var(--bg-primary)", padding: "15px 25px", borderRadius: "15px", alignSelf: "center", maxWidth: "1000px", margin: "0 auto 40px" }}>
        <img src="/images/rotaract3191.png" alt="Rotaract 3191" style={{ height: "70px", objectFit: "contain" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/zoneyodha.png" alt="Zone Yodha" style={{ height: "65px", objectFit: "contain" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/rotary3191.png" alt="Rotary 3191" style={{ height: "70px", objectFit: "contain" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/ufg.png" alt="Unite For Good" style={{ height: "65px", objectFit: "contain" }} />
        <div style={{ width: "2px", height: "50px", background: "rgba(0,0,0,0.1)" }}></div>
        <img src="/images/logo_no_bg.png" alt="Rotaract Club of BIT" className="logo-blend" style={{ height: "65px", objectFit: "contain", maxWidth: "250px" }} />
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "60px", 
        flexWrap: "wrap",
        marginBottom: "40px"
      }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "var(--text-primary)", fontSize: "1.1rem" }}>President</h4>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>Rtr. Vijhortha VS</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>vijho2211@gmail.com</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>+91 83107 32653</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "var(--text-primary)", fontSize: "1.1rem" }}>Secretary</h4>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>Rtr. Taksha Tangudu</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>taksha.tangudu@gmail.com</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>+91 96862 39172</p>
        </div>
        
        <div style={{ textAlign: "center" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "var(--text-primary)", fontSize: "1.1rem" }}>Club Advisor</h4>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>Rtr. Sharanya S Devadiga</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>devadigasharanya18@gmail.com</p>
          <p style={{ margin: "5px 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>+91 94491 68630</p>
        </div>
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "24px", 
        marginBottom: "30px",
        alignItems: "center"
      }}>
        
        <a href="https://www.instagram.com/rotaract.bit?igsh=MWhlaWFiem10NGxoeg==" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", transition: "0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--vibrant-pink)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.25-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
          </svg>
        </a>
        
        
        <a href="https://www.linkedin.com/company/rotaractclubofbit/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", transition: "0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#0077B5"} onMouseOut={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.8-2.1 3.9-2.1 4.2 0 5 2.8 5 6.5V23h-4v-7.3c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V23h-4V8z" />
          </svg>
        </a>

        
        <a href="mailto:bitrotract@gmail.com" style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", transition: "0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#e91e63"} onMouseOut={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
          <Mail size={26} />
        </a>
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
