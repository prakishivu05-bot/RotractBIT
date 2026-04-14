import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-t border-[var(--bg-primary)]">
      {/* TOP LOGOS */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[var(--bg-primary)] rounded-2xl p-4 sm:p-6 flex flex-wrap items-center justify-center gap-6">
          <img src="/images/rotaract3191.png" alt="Rotaract 3191" className="h-12 sm:h-14 object-contain" />
          <div className="hidden sm:block w-px h-10 bg-black/10"></div>

          <img src="/images/zoneyodha.png" alt="Zone Yodha" className="h-12 sm:h-14 object-contain" />
          <div className="hidden sm:block w-px h-10 bg-black/10"></div>

          <img src="/images/rotary3191.png" alt="Rotary 3191" className="h-12 sm:h-14 object-contain" />
          <div className="hidden sm:block w-px h-10 bg-black/10"></div>

          <img src="/images/ufg.png" alt="Unite For Good" className="h-12 sm:h-14 object-contain" />
          <div className="hidden sm:block w-px h-10 bg-black/10"></div>

          <img src="/images/logo_no_bg.png" alt="Rotaract Club of BIT" className="h-12 sm:h-14 max-w-[180px] object-contain logo-blend" />
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* President */}
          <div>
            <h4 className="font-semibold text-lg mb-2">President</h4>
            <p className="text-sm text-[var(--text-secondary)]">Rtr. Vijhortha VS</p>
            <p className="text-sm text-[var(--text-secondary)]">vijho2211@gmail.com</p>
            <p className="text-sm text-[var(--text-secondary)]">+91 83107 32653</p>
          </div>

          {/* Secretary */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Secretary</h4>
            <p className="text-sm text-[var(--text-secondary)]">Rtr. Taksha Tangudu</p>
            <p className="text-sm text-[var(--text-secondary)]">taksha.tangudu@gmail.com</p>
            <p className="text-sm text-[var(--text-secondary)]">+91 96862 39172</p>
          </div>

          {/* Advisor */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Club Advisor</h4>
            <p className="text-sm text-[var(--text-secondary)]">Rtr. Sharanya S Devadiga</p>
            <p className="text-sm text-[var(--text-secondary)]">devadigasharanya18@gmail.com</p>
            <p className="text-sm text-[var(--text-secondary)]">+91 94491 68630</p>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="flex justify-center items-center gap-6 pb-6">

        <a
          href="https://www.instagram.com/rotaract.bit?igsh=MWhlaWFiem10NGxoeg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--vibrant-pink)] transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.25-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/company/rotaractclubofbit/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[#0077B5] transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.8-2.1 3.9-2.1 4.2 0 5 2.8 5 6.5V23h-4v-7.3c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V23h-4V8z" />
          </svg>
        </a>

        <a
          href="mailto:bitrotract@gmail.com"
          className="text-[var(--text-secondary)] hover:text-pink-500 transition"
        >
          <Mail className="w-6 h-6" />
        </a>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-[var(--text-light)] pb-6 font-medium">
        © 2026 Rotaract Club of BIT. All Rights Reserved.
      </p>
    </footer>
  );
}