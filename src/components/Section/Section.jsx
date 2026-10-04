import styles from './Section.module.scss';

export default function Section({ id, title, lead, width = 'lg', children }) {
  return (
    <section id={id} className={`${styles.section} ${styles[width]}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {lead && <p className={styles.lead}>{lead}</p>}
      {children}
    </section>
  );
}
