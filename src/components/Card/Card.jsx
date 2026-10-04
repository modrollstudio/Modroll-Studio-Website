import { Link } from 'react-router';
import styles from './Card.module.scss';

export default function Card({
  media,
  eyebrow,
  title,
  text,
  to,
  variant = 'default',
  className = '',
  children,
}) {
  const base = variant === 'default' ? styles.card : `${styles.card} ${styles[variant]}`;
  const classes = className ? `${base} ${className}` : base;

  const inner = (
    <>
      {media && <div className={styles.media} aria-hidden="true">{media}</div>}
      <div className={styles.body}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}
        {children ? <div className={styles.footer}>{children}</div> : null}
      </div>
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{inner}</Link>;
  }
  return <div className={classes}>{inner}</div>;
}
