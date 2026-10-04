import styles from './FloatingEmbers.module.scss';

const EMBERS = [
  { left: '8%', size: 5, delay: 0, duration: 9 },
  { left: '18%', size: 3, delay: 2.2, duration: 11 },
  { left: '30%', size: 4, delay: 5, duration: 8 },
  { left: '42%', size: 2, delay: 6.2, duration: 13 },
  { left: '55%', size: 3, delay: 1.4, duration: 10 },
  { left: '68%', size: 5, delay: 3.6, duration: 12 },
  { left: '80%', size: 3, delay: 0.8, duration: 9 },
  { left: '90%', size: 4, delay: 4.4, duration: 11 },
];

export default function FloatingEmbers() {
  return (
    <div className={styles.embers} aria-hidden="true">
      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className={styles.ember}
          style={{
            '--left': ember.left,
            '--size': `${ember.size}px`,
            '--delay': `${ember.delay}s`,
            '--duration': `${ember.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
