import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./nav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Calendar", path: "/calendar" },
    { name: "Image Gallery", path: "/gallery" },
    { name: "Our Publications", path: "/publications" },
    { name: "Updates & Announcements", path: "/updates" },
  ];

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/images/logo_no_bg.png"
            alt="Rotaract BIT Logo"
            className="logo-blend"
          />
        </Link>
        <div className="nav-desktop">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <Link to="/contact" className="btn contact-btn">
            CONTACT US
          </Link>
        </div>
        <button className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn contact-btn" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
