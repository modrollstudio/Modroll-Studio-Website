import glyph from '../../assets/modroll-glyph.png';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <span className={styles.logo}>
      <img className={styles.glyph} src={glyph} alt="" width="32" height="32" aria-hidden="true" />
      <span className={styles.wordmark}>
        Modroll <span className={styles.sub}>Studio</span>
      </span>
    </span>
  );
}
