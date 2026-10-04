import styles from './Grid.module.scss';

export default function Grid({ children, cols }) {
  return (
    <div className={styles.grid} style={{ '--grid-cols': cols }}>
      {children}
    </div>
  );
}
