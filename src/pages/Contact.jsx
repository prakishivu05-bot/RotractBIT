import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, HelpCircle, UserPlus, Users, Briefcase, X } from 'lucide-react';
import React, { useState } from 'react';

import FAQ from '../components/FAQ';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubject, setFormSubject] = useState("");

  const openForm = (subject) => {
    setFormSubject(subject);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("to_email", "bitrotaract@gmail.com");
    formData.append("replyto", formData.get("email"));

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (res.success) {
        alert("Message sent successfully!");
        setIsModalOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-[var(--bg-primary)] flex flex-col font-['Inter'] transition-colors duration-500">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[var(--blob-1)] blur-[120px] transition-colors duration-500"></div>
          <div className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] rounded-full bg-[var(--blob-3)] blur-[120px] transition-colors duration-500"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-5 relative z-10 text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-[1.1] mb-6 font-['Montserrat'] tracking-tight transition-colors duration-500">
                Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-pink to-pink-500">Catalyst.</span><br />
                Connect with Us.
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors duration-500">
                Whether you&apos;re a student looking to make an impact or an organization seeking a partner, let&apos;s unite for good.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group bg-[var(--bg-secondary)] backdrop-blur-xl border border-[rgba(128,128,128,0.2)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(233,30,99,0.15)] rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--blob-3)] to-[var(--blob-1)] rounded-bl-full -z-10 transition-transform group-hover:scale-110 opacity-30"></div>
                <div className="w-12 h-12 bg-[var(--blob-3)] text-[var(--text-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vibrant-pink group-hover:text-white transition-colors duration-300">
                  <UserPlus size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 font-['Montserrat']">I want to Join.</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-8 flex-1">Start your journey as a leader and make a real difference on campus.</p>
                <button
                  onClick={() => openForm("Membership Application")}
                  className="w-full py-4 text-lg md:text-base px-6 rounded-xl bg-vibrant-pink text-white font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                >
                  Introduce Yourself
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group bg-[var(--bg-secondary)] backdrop-blur-xl border border-[rgba(128,128,128,0.2)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,31,63,0.15)] rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--blob-1)] to-[var(--blob-3)] rounded-bl-full -z-10 transition-transform group-hover:scale-110 opacity-30"></div>
                <div className="w-12 h-12 bg-[var(--blob-1)] text-vibrant-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vibrant-pink group-hover:text-white transition-colors duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 font-['Montserrat']">Partner with Us.</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-8 flex-1">For clubs and NGOs looking to co-host events and amplify impact.</p>
                <button
                  onClick={() => openForm("Collaboration Proposal")}
                  className="w-full py-4 text-lg md:text-base px-6 rounded-xl border-2 border-vibrant-pink text-vibrant-pink font-semibold hover:bg-vibrant-pink hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Submit Proposal
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="sm:col-span-2 lg:col-span-2 group bg-[var(--bg-secondary)] backdrop-blur-xl border border-[rgba(128,128,128,0.2)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(233,30,99,0.15)] rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[var(--blob-1)] to-[var(--blob-3)] rounded-bl-full -z-10 transition-transform group-hover:scale-110 opacity-30"></div>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-[var(--blob-3)] text-[var(--text-primary)] rounded-2xl flex items-center justify-center mb-6 sm:mb-4 group-hover:bg-vibrant-pink group-hover:text-white transition-colors duration-300">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 font-['Montserrat']">Invest in Impact.</h3>
                  <p className="text-lg text-[var(--text-secondary)] max-w-md">For brands and mentors ready to support the next generation of changemakers.</p>
                </div>

                <button
                  onClick={() => openForm("Sponsorship Inquiry")}
                  className="w-full sm:w-auto mt-auto sm:mt-0 py-4 text-lg md:text-base px-8 rounded-xl bg-gradient-to-r from-vibrant-pink to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-vibrant-pink/30 hover:-translate-y-1 transition-all whitespace-nowrap"
                >
                  Get Partnership Deck
                </button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 pt-10 border-t border-[rgba(128,128,128,0.2)] flex flex-col sm:flex-row flex-wrap items-center justify-between gap-6 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full sm:w-auto items-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer">
                <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-secondary)] border border-[rgba(128,128,128,0.2)] flex items-center justify-center group-hover:bg-[var(--blob-3)] transition-colors">
                  <MapPin size={22} className="text-vibrant-pink sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="font-medium text-lg sm:text-sm">Bangalore Institute of Technology, Bengaluru</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer">
                <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-secondary)] border border-[rgba(128,128,128,0.2)] flex items-center justify-center group-hover:bg-[var(--blob-3)] transition-colors">
                  <Mail size={22} className="text-vibrant-pink sm:w-[18px] sm:h-[18px]" />
                </div>
                <a href="mailto:bitrotaract@gmail.com" className="font-medium text-lg sm:text-sm text-center">bitrotaract@gmail.com</a>
              </div>
            </div>

            <a href="#faq" className="flex items-center gap-2 text-[var(--text-primary)] font-semibold text-lg sm:text-sm hover:text-vibrant-pink transition-colors mx-auto sm:mx-0 mt-4 sm:mt-0">
              <HelpCircle size={22} className="sm:w-[18px] sm:h-[18px]" />
              Frequently Asked Questions
            </a>
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ zIndex: 1001 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--bg-secondary)] border border-[rgba(128,128,128,0.2)] rounded-3xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[95vh] relative"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors bg-[var(--bg-primary)] p-2 rounded-full border border-[rgba(128,128,128,0.2)] hover:bg-[var(--blob-3)]"
                >
                  <X size={24} />
                </button>

                <div className="p-6 md:p-10 mt-4 md:mt-0">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-3 font-['Montserrat']">Send a message.</h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-8">We&apos;re here to answer any questions you may have.</p>

                  <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                      <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-4 sm:py-3 text-lg sm:text-base text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[rgba(128,128,128,0.2)] rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/50 focus:border-vibrant-pink transition-all placeholder:text-[var(--text-secondary)]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <input type="email" name="email" placeholder="Your email address" required className="w-full px-4 py-4 sm:py-3 text-lg sm:text-base text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[rgba(128,128,128,0.2)] rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/50 focus:border-vibrant-pink transition-all placeholder:text-[var(--text-secondary)]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <input type="text" name="subject" placeholder="Subject" value={formSubject} onChange={(e) => setFormSubject(e.target.value)} required className="w-full px-4 py-4 sm:py-3 text-lg sm:text-base text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[rgba(128,128,128,0.2)] rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/50 focus:border-vibrant-pink transition-all placeholder:text-[var(--text-secondary)]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <textarea name="message" placeholder="Your Message" rows="4" required className="w-full px-4 py-4 sm:py-3 text-lg sm:text-base text-[var(--text-primary)] bg-[var(--bg-primary)] border border-[rgba(128,128,128,0.2)] rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/50 focus:border-vibrant-pink transition-all resize-none placeholder:text-[var(--text-secondary)]"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="mt-2 w-full py-4 text-lg px-6 rounded-xl bg-vibrant-pink text-white font-bold tracking-wide uppercase hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending..." : "Send Email"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
      <div id="faq" className="w-full bg-[var(--bg-primary)] border-t border-[rgba(128,128,128,0.2)]">
        <FAQ />
      </div>
    </>
  );
};

export default Contact;
