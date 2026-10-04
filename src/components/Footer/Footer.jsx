import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href="https://github.com/modrollstudio" target="_blank" rel="noopener noreferrer">
            GitHub
            <span className="sr-only">Opens in new tab</span>
          </a>
        </li>
        <li>
          <a href="mailto:hello@modroll.studio">hello@modroll.studio</a>
        </li>
      </ul>
      <p className={styles.text}>© {new Date().getFullYear()} Modroll Studio · Tabletop dice mods for Minecraft</p>
    </footer>
  );
}
