import styles from './Footer.module.scss';

export default function Footer({ text, links = [] }) {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.newTab ? { target: "_blank", rel: "noopener noreferrer"} : {})}
            >
              {link.label}
              {link.newTab && ( <span className="sr-only">Opens in new tab</span> )}
            </a>
          </li>
        ))}
      </ul>
      {text && <p className={styles.text}>{text}</p>}
    </footer>
  );
}
