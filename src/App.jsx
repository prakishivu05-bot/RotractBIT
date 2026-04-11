import BackgroundBlobs from './components/BackgroundBlobs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Router from './router';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <BackgroundBlobs />
      <Navbar />
      <Router />
      <SocialBar />
      <Footer />
      <BackToTop />
    </>
  );
}
