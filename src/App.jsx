import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Logo from './components/Logo/Logo.jsx';
import Button from './components/Button/Button.jsx';
import Home from './pages/Home.jsx';
import ModPage from './pages/ModPage.jsx';
import NotFound from './pages/NotFound.jsx';
import mods from './data/mods.js';

// a hash (e.g. /#mods from the nav) scrolls to that section; otherwise a new page starts at the top
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
      return;
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname, hash, key]);
  return null;
}

// wide screens get one link per mod; below the Navbar breakpoint a single Mods link replaces them
const navLinks = [
  { href: '/', label: 'Home' },
  ...mods.map((mod) => ({ href: `/mods/${mod.slug}`, label: mod.name, show: 'wide' })),
  { href: '/#mods', label: 'Mods', activePrefix: '/mods/', show: 'narrow' },
];

const footerLinks = [
  { href: 'https://github.com/modrollstudio', label: 'GitHub', newTab: true },
  { href: 'mailto:hello@modroll.studio', label: 'hello@modroll.studio' },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Navbar
        logo={
          <Link to="/" aria-label="Modroll Studio — home">
            <Logo />
          </Link>
        }
        links={navLinks}
      >
        <Button size="sm" variant="ghost" href="https://github.com/modrollstudio" target="_blank" rel="noopener noreferrer">
          GitHub
          <span className="sr-only">Opens in new tab</span>
        </Button>
      </Navbar>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mods/:slug" element={<ModPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer
        links={footerLinks}
        text={`© ${new Date().getFullYear()} Modroll Studio · Tabletop dice mods for Minecraft`}
      />
    </>
  );
}
