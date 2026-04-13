
import { motion } from "framer-motion";

export default function About() {
  return (
    <section style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "5vw", paddingRight: "5vw", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        
        {/* Left Hand Image */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ flex: "1 1 400px", display: "flex", alignSelf: "stretch" }}>
          <img 
            src="/images/Club1_service3.jpg" 
            alt="Team" 
            style={{ width: "100%", minHeight: "400px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} 
          />
        </motion.div>

        {/* Right Hand Text */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "30px", fontWeight: "800" }}>
            Know More About Us
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.05rem", textAlign: "justify", marginBottom: "20px" }}>
            The Rotaract Club of BIT is an institution based Rotaract Club established in the year 1991. Rotaract is a global youth service organization that is sponsored by Rotary International. It is designed for young adults who are interested in community service, leadership development, and networking. The Rotaract Club of BIT aims in community service and professional development of an individual. 
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "1.05rem", textAlign: "justify", marginBottom: "30px" }}>
            The club comes under the Rotaract District Organization 3191 and its sponsor club is Rotary Bangalore South. The Rotaract Club of BIT conducts innumerable events making it one of the most active Rotaract clubs. Some of these events are-Blood Donation Camp, Paper Drive, Rush Hours, Secret Santa, Akshara, Trek and Uptown Junk. All of these events create a positive impact on our community and also helps the individuals to enhance their professional as well as personal skills.
          </p>

        </motion.div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{
              margin: "80px auto 0",
              padding: "40px",
              borderRadius: "20px",
              maxWidth: "800px",
              textAlign: "center"
          }}
      >
          <h2>Our Guiding Principles</h2>
          <ul
              style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "20px auto 0",
                  opacity: 0.8,
                  lineHeight: "2",
                  maxWidth: "600px",
                  textAlign: "left",
                  fontSize: "1.05rem"
              }}
          >
              <li><strong style={{ color: "var(--accent-pink)" }}>1.</strong> Encouraging members to develop their professional and interpersonal skills.</li>
              <li><strong style={{ color: "var(--accent-pink)" }}>2.</strong> Providing leadership experiences through planning and executing meaningful projects.</li>
              <li><strong style={{ color: "var(--accent-pink)" }}>3.</strong> Inspiring creativity, innovation, and personal excellence.</li>
              <li><strong style={{ color: "var(--accent-pink)" }}>4.</strong> Upholding values of integrity, respect, and service in everything we undertake.</li>
              <li><strong style={{ color: "var(--accent-pink)" }}>5.</strong> Creating opportunities that foster cultural exchange, teamwork, and a deeper sense of global understanding.</li>
          </ul>
      </motion.div>
    </section>
  );
}
