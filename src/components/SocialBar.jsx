export default function SocialBar() {
    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                right: "25px",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                zIndex: 50
            }}
        >
            
<a
  href="https://www.instagram.com/rotaract.bit?igsh=MWhlaWFiem10NGxoeg=="
  target="_blank"
  rel="noopener noreferrer"
  style={{ opacity: 0.9 }}
>
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    style={{
      transition: "0.2s",
      filter: "drop-shadow(0 0 6px rgba(225,48,108,0.8))", 
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.transform = "scale(1.2)")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.transform = "scale(1)")
    }
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.25-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
  </svg>
</a>



            
            <a
                href="https://www.linkedin.com/company/rotaractclubofbit/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.9 }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                        transition: "0.2s",
                        filter: "drop-shadow(0 0 6px rgba(30,184,166,0.8))"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.8-2.1 3.9-2.1 4.2 0 5 2.8 5 6.5V23h-4v-7.3c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V23h-4V8z" />
                </svg>
            </a>


            
            <a
                href="mailto:bitrotaract@gmail.com"
                style={{ opacity: 0.9 }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                        transition: "0.2s",
                        filter: "drop-shadow(0 0 6px rgba(255,152,0,0.8))"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </a>

        </div>
    );
}
