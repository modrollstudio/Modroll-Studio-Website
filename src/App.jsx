import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import ModPage from './pages/ModPage.jsx';
import NotFound from './pages/NotFound.jsx';

// a hash (e.g. /#mods from the nav) scrolls to that section; otherwise a new page starts at the top
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
      return;
    }
    document.documentElement.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mods/:slug" element={<ModPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
