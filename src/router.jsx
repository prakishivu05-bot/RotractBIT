import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import CalendarPage from './pages/CalendarPage';
import Contact from './pages/Contact';
import EventDetailPage from './pages/EventDetailPage';
import Events from './pages/Events';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/Home';
import Members from './pages/Members';
import Publications from './pages/Publications';
import Updates from './pages/Updates';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/members' element={<Members />} />
      <Route path='/events' element={<Events />} />
      <Route path='/events/:eventId' element={<EventDetailPage />} />
      <Route path='/updates' element={<Updates />} />
      <Route path='/publications' element={<Publications />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
    </Routes>
  );
}
