import { Link } from 'react-router';
import styles from './Card.module.scss';

export default function Card({ media, eyebrow, title, text, to, variant, className, children }) {
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ');

  const inner = (
    <>
      {media && <div className={styles.media} aria-hidden="true">{media}</div>}
      <div className={styles.body}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {children && <div className={styles.footer}>{children}</div>}
      </div>
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{inner}</Link>;
  }
  return <div className={classes}>{inner}</div>;
}
