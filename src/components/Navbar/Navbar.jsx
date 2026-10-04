import { Link, NavLink, useLocation } from 'react-router';
import Button from '../Button/Button.jsx';
import mods from '../../data/mods.js';
import glyph from '../../assets/modroll-glyph.png';
import styles from './Navbar.module.scss';

// wide screens get one link per mod; below the breakpoint in Navbar.module.scss a single Mods link replaces them
export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} aria-label="Modroll Studio — home">
        <img className={styles.glyph} src={glyph} alt="" width="48" height="48" aria-hidden="true" />
        <span className={styles.wordmark}>
          Modroll <span className={styles.sub}>Studio</span>
        </span>
      </Link>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {mods.map((mod) => (
          <li key={mod.slug} className={styles.wide}>
            <NavLink to={`/mods/${mod.slug}`}>{mod.name}</NavLink>
          </li>
        ))}
        <li className={styles.narrow}>
          <Link to="/#mods" aria-current={pathname.startsWith('/mods/') ? 'page' : undefined}>
            Mods
          </Link>
        </li>
      </ul>
      <div className={styles.actions}>
        <Button size="sm" variant="ghost" href="https://github.com/modrollstudio" target="_blank" rel="noopener noreferrer">
          GitHub
          <span className="sr-only">Opens in new tab</span>
        </Button>
      </div>
    </nav>
  );
}
