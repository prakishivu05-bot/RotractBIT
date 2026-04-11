import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, HelpCircle, UserPlus, Users, Briefcase, X } from 'lucide-react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubject, setFormSubject] = useState("");

  const openForm = (subject) => {
    setFormSubject(subject);
    setIsModalOpen(true);
  };
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-white flex flex-col font-['Inter']">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-vibrant-pink/5 blur-[120px]"></div>
        <div className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] rounded-full bg-deep-navy/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Typography & Messaging */}
          <motion.div 
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-deep-navy leading-[1.1] mb-6 font-['Montserrat'] tracking-tight">
              Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-pink to-pink-500">Catalyst.</span><br />
              Connect with Us.
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
              Whether you're a student looking to make an impact or an organization seeking a partner, let's unite for good.
            </p>
          </motion.div>

          {/* Right Side: Action Tiles */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Tile A: Join */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(233,30,99,0.08)] rounded-3xl p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-vibrant-pink/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-deep-navy/5 text-deep-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-deep-navy group-hover:text-white transition-colors duration-300">
                <UserPlus size={24} />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-2 font-['Montserrat']">I want to Join.</h3>
              <p className="text-slate-500 mb-8 flex-1">Start your journey as a leader and make a real difference on campus.</p>
              <button 
                onClick={() => openForm("Membership Application")}
                className="w-full py-3 px-6 rounded-xl bg-deep-navy text-white font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Introduce Yourself
              </button>
            </motion.div>

            {/* Tile B: Collaborate */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,31,63,0.08)] rounded-3xl p-8 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-deep-navy/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-vibrant-pink/5 text-vibrant-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vibrant-pink group-hover:text-white transition-colors duration-300">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-2 font-['Montserrat']">Partner with Us.</h3>
              <p className="text-slate-500 mb-8 flex-1">For clubs and NGOs looking to co-host events and amplify impact.</p>
              <button 
                onClick={() => openForm("Collaboration Proposal")}
                className="w-full py-3 px-6 rounded-xl border-2 border-vibrant-pink text-vibrant-pink font-semibold hover:bg-vibrant-pink hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Submit Proposal
              </button>
            </motion.div>

            {/* Tile C: Sponsorship */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="sm:col-span-2 lg:col-span-2 group bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(233,30,99,0.08)] rounded-3xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-50 to-vibrant-pink/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="flex-1">
                <div className="w-12 h-12 bg-deep-navy/5 text-deep-navy rounded-2xl flex items-center justify-center mb-6 sm:mb-4 group-hover:bg-deep-navy group-hover:text-white transition-colors duration-300">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-2 font-['Montserrat']">Invest in Impact.</h3>
                <p className="text-slate-500 max-w-md">For brands and mentors ready to support the next generation of changemakers.</p>
              </div>
              
              <button 
                onClick={() => openForm("Sponsorship Inquiry")}
                className="w-full sm:w-auto mt-auto py-4 px-8 rounded-xl bg-gradient-to-r from-vibrant-pink to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-vibrant-pink/30 hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                Get Partnership Deck
              </button>
            </motion.div>

          </motion.div>

        </div>

        {/* Functional Footer */}
        <motion.div 
          className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-6 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex items-center gap-3 text-slate-600 hover:text-deep-navy transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-deep-navy/5 transition-colors">
                <MapPin size={18} className="text-vibrant-pink" />
              </div>
              <span className="font-medium text-sm">[Insert Building/Room Number]</span>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600 hover:text-deep-navy transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-deep-navy/5 transition-colors">
                <Mail size={18} className="text-vibrant-pink" />
              </div>
              <a href="mailto:info@rotaractclub.org" className="font-medium text-sm">[Insert General Email]</a>
            </div>
          </div>

          <a href="#faq" className="flex items-center gap-2 text-deep-navy font-semibold text-sm hover:text-vibrant-pink transition-colors">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </a>
        </motion.div>

      </div>

      {/* Email Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 p-2 rounded-full hover:bg-slate-200"
              >
                <X size={20} />
              </button>
              
              <div className="p-8 sm:p-10">
                <h2 className="text-3xl font-extrabold text-deep-navy mb-2 font-['Montserrat']">Send a message.</h2>
                <p className="text-slate-500 mb-8">We're here to answer any questions you may have.</p>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); setIsModalOpen(false); }}>
                  <div className="flex flex-col gap-1">
                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/30 focus:border-vibrant-pink transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <input type="email" placeholder="Your email address" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/30 focus:border-vibrant-pink transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <input type="text" placeholder="Subject" value={formSubject} onChange={(e) => setFormSubject(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/30 focus:border-vibrant-pink transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <textarea placeholder="Your Message" rows="4" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vibrant-pink/30 focus:border-vibrant-pink transition-all resize-none"></textarea>
                  </div>
                  
                  <button type="submit" className="mt-4 w-full py-4 px-6 rounded-xl bg-vibrant-pink text-white font-bold tracking-wide uppercase hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/30">
                    Send Email
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
