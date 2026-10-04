import { Link, NavLink, useLocation } from 'react-router';
import styles from './Navbar.module.scss';

// A link with activePrefix (e.g. Mods → /#mods) is marked current on any page under that prefix
export default function Navbar({ logo, links = [], children }) {
  const { pathname } = useLocation();
  return (
    <nav className={styles.navbar}>
      {logo ? <div className={styles.logo}>{logo}</div> : null}
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            {link.activePrefix ? (
              <Link to={link.href} aria-current={pathname.startsWith(link.activePrefix) ? 'page' : undefined}>
                {link.label}
              </Link>
            ) : (
              <NavLink to={link.href}>{link.label}</NavLink>
            )}
          </li>
        ))}
      </ul>
      {children ? <div className={styles.actions}>{children}</div> : null}
    </nav>
  );
}
