import styles from './Header.module.scss';

export default function Header({ eyebrow, title, subtitle, art, className, children }) {
  return (
    <header className={`${styles.header} ${className}`}>
      {art && <div className={styles.art}>{art}</div>}
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </header>
  );
}
