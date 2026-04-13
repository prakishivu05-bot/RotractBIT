import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Download, Clock, MapPin, Tag } from 'lucide-react';

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auto-Fetch events.json
  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => {
        // Sort by date ascending
        const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'service': return 'bg-[var(--blob-1)] text-pink-500 border border-[rgba(233,30,99,0.2)]';
      case 'tech': return 'bg-[var(--blob-3)] text-blue-500 border border-[rgba(0,123,255,0.2)]';
      case 'sports': return 'bg-green-100/10 text-green-500 border border-[rgba(40,167,69,0.2)]';
      default: return 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[rgba(128,128,128,0.2)]';
    }
  };

  // Helper to check if event is today
  const isToday = (dateString) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    return eventDate.getDate() === today.getDate() &&
           eventDate.getMonth() === today.getMonth() &&
           eventDate.getFullYear() === today.getFullYear();
  };

  // Generate "Next 7 Days" dates
  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-[var(--bg-primary)] text-[var(--text-primary)] font-['Inter'] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-['Montserrat'] tracking-tight mb-4 text-[var(--text-primary)]">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-pink to-blue-600">Hub.</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            Powered by our AI Extractor. Discover what's happening in our Rotaract community, synced directly from our official circulars.
          </p>
        </motion.div>

        {/* Horizontal Scroller for Next 7 Days */}
        <div className="mb-16 relative">
          <h2 className="text-xl font-bold font-['Montserrat'] mb-6 flex items-center gap-2">
            <CalendarIcon className="text-vibrant-pink" /> Next 7 Days
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
            {next7Days.map((date, idx) => {
              const dateStr = date.toISOString().split('T')[0];
              const dayEvents = events.filter(e => e.date === dateStr);
              const active = dayEvents.length > 0;
              const isEventToday = idx === 0;

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`min-w-[120px] snap-start flex flex-col items-center p-4 rounded-2xl border backdrop-blur-md transition-all ${active ? 'bg-[var(--bg-secondary)] border-vibrant-pink/50 shadow-lg' : 'bg-[var(--bg-secondary)] border-[rgba(128,128,128,0.2)] grayscale opacity-60'}`}
                >
                  <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-1">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span className="text-3xl font-black font-['Montserrat'] text-[var(--text-primary)]">
                    {date.getDate()}
                  </span>
                  
                  {isEventToday && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-red-500">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> Live Now
                    </div>
                  )}
                  {active && !isEventToday && (
                    <div className="mt-3 text-xs font-medium text-vibrant-pink">
                      {dayEvents.length} Event{dayEvents.length > 1 ? 's' : ''}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Featured Events (Bento Grid) */}
        <div>
          <h2 className="text-2xl font-bold font-['Montserrat'] mb-8 text-[var(--text-primary)]">Featured Events</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-[var(--bg-secondary)] rounded-3xl"></div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20 bg-[var(--bg-secondary)] rounded-3xl border border-[rgba(128,128,128,0.2)] backdrop-blur-sm">
              <CalendarIcon size={48} className="mx-auto text-[var(--text-light)] mb-4" />
              <p className="text-[var(--text-secondary)]">No upcoming events found. Drop flyers in /uploads!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
              {events.map((event, index) => {
                const today = isToday(event.date);
                const hasPdf = event.sourceFile && event.sourceFile.toLowerCase().endsWith('.pdf');
                
                // Bento styles: make every 4th item span 2 columns or rows for dynamic look
                const isWide = index % 4 === 0 || index % 5 === 0;

                return (
                  <motion.div
                    key={event.id || index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative overflow-hidden bg-[var(--bg-secondary)] backdrop-blur-xl border border-[rgba(128,128,128,0.2)] p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:border-[rgba(128,128,128,0.4)] transition-all duration-300 flex flex-col justify-between ${isWide && 'md:col-span-2'}`}
                  >
                    {/* Decorative Blob */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-vibrant-pink/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>

                        {today && (
                          <span className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-500 text-xs font-bold rounded-full animate-pulse border border-red-500/30">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span> Live
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 leading-tight text-[var(--text-primary)] group-hover:text-vibrant-pink transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm font-medium text-[var(--text-secondary)] mb-6">
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
                      </div>

                      <p className="text-[var(--text-secondary)] line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    {hasPdf && (
                      <div className="relative z-10 mt-8 pt-6 border-t border-[rgba(128,128,128,0.1)]">
                        <a 
                          href={`/uploads/${event.sourceFile}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-vibrant-pink transition-colors"
                        >
                          <Download size={18} />
                          Download Flyer
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
