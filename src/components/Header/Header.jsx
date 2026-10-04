import styles from './Header.module.scss';

export default function Header({ eyebrow, title, subtitle, variant = 'default', art, className = '', style, children }) {
  const base = variant === 'default' ? styles.header : `${styles.header} ${styles[variant]}`;
  const classes = className ? `${base} ${className}` : base;
  return (
    <header className={classes} style={style}>
      {art ? <div className={styles.art}>{art}</div> : null}
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {title && <h1 className={styles.title}>{title}</h1>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </header>
  );
}
