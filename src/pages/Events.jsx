import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Search, Image as ImageIcon } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { eventsData } from "../data/eventsData";

const CATEGORIES = [
  { label: "All Updates", value: "All" },
  { label: "Activities", value: "Activity" },
  { label: "Meetings", value: "Meeting" },
  { label: "Installations", value: "Installation" },
  { label: "Projects", value: "Project" }
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

export default function Events() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("All"); 
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const filteredEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let result = eventsData.map(e => ({
      ...e,
      status: e.date >= today ? "Upcoming" : "Completed",
      formattedDate: e.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      displayImage: e.image && e.image.includes("placeholder") ? FALLBACK_IMAGE : e.image || FALLBACK_IMAGE,
    }));

    
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        e =>
          e.title.toLowerCase().includes(lowerSearch) ||
          e.location.toLowerCase().includes(lowerSearch) ||
          e.description.toLowerCase().includes(lowerSearch)
      );
    }

    
    if (activeTab !== "All") {
      result = result.filter(e => e.category === activeTab);
    }

    
    if (dateFilter !== "All") {
      result = result.filter(e => e.status === dateFilter);
    }

    
    result.sort((a, b) => b.date - a.date);

    return result;
  }, [searchTerm, activeTab, dateFilter]);

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  return (
    <section style={{ minHeight: "100vh", position: "relative", paddingTop: "120px" }}>
      
      <div className="section-header" style={{ marginBottom: "40px" }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Club Platform: Events & Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore our activities, meetings, installations, and mega projects all in one place.
        </motion.p>
      </div>

      
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "30px"
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.value}
            onClick={() => { setActiveTab(cat.value); setVisibleCount(6); }}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: `2px solid ${activeTab === cat.value ? "var(--accent-pink)" : "rgba(0,0,0,0.1)"}`,
              background: activeTab === cat.value ? "var(--accent-pink)" : "transparent",
              color: activeTab === cat.value ? "white" : "var(--text-secondary)",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px",
        maxWidth: "1200px", margin: "0 auto 40px auto", padding: isMobile ? "15px" : "20px", background: "var(--bg-secondary)",
        borderRadius: "16px", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
        flexDirection: isMobile ? "column" : "row",
        border: "1px solid rgba(128,128,128,0.15)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: "1", minWidth: isMobile ? "100%" : "250px", background: "var(--bg-primary)", padding: "12px 20px", borderRadius: "12px" }}>
          <Search size={20} color="var(--text-light)" />
          <input
            type="text"
            placeholder="Search events, venues, keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", background: "transparent", outline: "none", width: "100%", color: "var(--text-primary)", fontSize: "1rem" }}
          />
        </div>
        
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(128,128,128,0.2)",
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              fontWeight: "500",
              outline: "none",
              cursor: "pointer",
              appearance: "none",
              width: isMobile ? "100%" : "auto",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d91b5c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 15px center",
              paddingRight: "45px"
            }}
          >
            <option value="All">All Time</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "280px" : "340px"}, 1fr))`,
        gap: "35px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <AnimatePresence>
          {displayedEvents.map((event, index) => (
            <motion.div
              layout
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative"
              }}
              onClick={() => navigate(`/events/${event.id}`)}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(192, 31, 92, 0.2)" }}
            >
              
              <div style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                background: "rgba(255, 255, 255, 0.9)",
                color: "var(--accent-pink)",
                padding: "6px 14px",
                borderRadius: "30px",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1px",
                zIndex: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}>
                {event.category}
              </div>

              
              <div style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: event.status === "Upcoming" ? "var(--accent-pink)" : "rgba(15, 23, 42, 0.8)",
                color: "white",
                padding: "6px 14px",
                borderRadius: "30px",
                fontSize: "0.75rem",
                fontWeight: "700",
                zIndex: 2,
                backdropFilter: "blur(4px)"
              }}>
                {event.status}
              </div>

              
              <div style={{ height: "220px", overflow: "hidden" }}>
                <motion.img
                  src={event.displayImage}
                  alt={event.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              
              <div style={{ padding: "25px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "15px", color: "var(--text-primary)", lineHeight: "1.3" }}>
                  {event.title}
                </h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: "500" }}>
                    <Calendar size={16} color="var(--accent-pink)" />
                    {event.formattedDate}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: "500" }}>
                    <MapPin size={16} color="var(--accent-pink)" />
                    <span style={{ maxWidth: "150px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {event.location}
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", flex: 1, marginBottom: "20px" }}>
                  {event.description}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "15px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-light)" }}>
                    {event.monthYear}
                  </span>
                  <span style={{ color: "var(--accent-pink)", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.9rem" }}>
                    Details <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredEvents.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-secondary)" }}>
          <ImageIcon size={48} color="var(--text-light)" style={{ margin: "0 auto 15px auto", opacity: 0.5 }} />
          <h3>No events found</h3>
          <p>Try adjusting your search or filters to find what you&apos;re looking for.</p>
        </div>
      )}

      {visibleCount < filteredEvents.length && (
        <div style={{ textAlign: "center", marginTop: "50px", paddingBottom: "50px" }}>
          <button className="btn" onClick={() => setVisibleCount(prev => prev + 6)}>
            Load More Events <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </button>
        </div>
      )}

    </section>
  );
}
