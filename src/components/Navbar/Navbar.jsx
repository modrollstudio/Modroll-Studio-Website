import { NavLink } from 'react-router';
import styles from './Navbar.module.scss';

export default function Navbar({ logo, links = [], children }) {
  return (
    <nav className={styles.navbar}>
      {logo ? <div className={styles.logo}>{logo}</div> : null}
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <NavLink to={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
      {children ? <div className={styles.actions}>{children}</div> : null}
    </nav>
  );
}
