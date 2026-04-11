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
      case 'service': return 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-800/50';
      case 'tech': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50';
      case 'sports': return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50';
      default: return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
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
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-['Inter'] transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-['Montserrat'] tracking-tight mb-4">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-pink to-blue-600">Hub.</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
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
                  className={`min-w-[120px] snap-start flex flex-col items-center p-4 rounded-2xl border backdrop-blur-md transition-all ${active ? 'bg-white/80 dark:bg-slate-900/80 border-vibrant-pink/20 shadow-lg' : 'bg-white/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 grayscale opacity-60'}`}
                >
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span className="text-3xl font-black font-['Montserrat']">
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
          <h2 className="text-2xl font-bold font-['Montserrat'] mb-8">Featured Events</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <CalendarIcon size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">No upcoming events found. Drop flyers in /uploads!</p>
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
                    className={`group relative overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${isWide && 'md:col-span-2'}`}
                  >
                    {/* Decorative Blob */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-vibrant-pink/10 to-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>

                        {today && (
                          <span className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full animate-pulse">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span> Live
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 leading-tight group-hover:text-vibrant-pink transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    {hasPdf && (
                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <a 
                          href={`/uploads/${event.sourceFile}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-deep-navy dark:text-blue-400 hover:text-vibrant-pink transition-colors"
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
