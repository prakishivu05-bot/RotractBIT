import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Members from './pages/Members';
import Events from './pages/Events';
import EventDetailPage from './pages/EventDetailPage';
import Updates from './pages/Updates';
import CalendarPage from './pages/CalendarPage';
import GalleryPage from './pages/GalleryPage';

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
