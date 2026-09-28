import Badge from '../Badge/Badge.jsx';
import FadeInOnScroll from '../FadeInOnScroll/FadeInOnScroll.jsx';
import styles from './Roadmap.module.scss';

const statusLabels = {
  released: 'Released',
  ongoing: 'In development',
  next: 'Up next',
  planned: 'Planned',
  paused: 'On hold',
  Abandoned: 'This has been abandoned',
};

export default function Roadmap({ items }) {
  return (
    <ol className={styles.roadmap}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.item}>
          <span className={`${styles.dot} ${styles[item.status]}`} aria-hidden="true" />
          <FadeInOnScroll delay={index * 90}>
            <div className={styles.heading}>
              <h3>{item.title}</h3>
              <Badge tone={item.status === 'released' ? 'accent' : 'default'}>
                {statusLabels[item.status] ?? item.status}
              </Badge>
            </div>
            <p className={styles.note}>{item.note}</p>
          </FadeInOnScroll>
        </li>
      ))}
    </ol>
  );
}
