import styles from './CardArt.module.scss';

// Card accent art: a mod's pixel icon (kind="icon") or an arcane ring around a
// symbol (kind="sigil"). Used on the "What we're about" cards on Home.
const gold = 'var(--color-primary)';

export default function CardArt({ kind = 'icon', icon, symbol = '✦', size = 64 }) {
  if (kind === 'sigil') {
    return (
      <svg
        className={styles.emblem}
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="32" cy="32" r="26" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.55" />
        <circle cx="32" cy="32" r="21" fill="none" stroke={gold} strokeWidth="1" opacity="0.35" strokeDasharray="4 6" />
        <text x="32" y="40" textAnchor="middle" fontSize="22" fill={gold} fontFamily="Georgia, serif">
          {symbol}
        </text>
      </svg>
    );
  }

  // icons are 256px (16×16 art at 14×) — only 128 or 256 keep every art pixel a whole number of screen pixels
  return <img className={`${styles.emblem} ${styles.pixel}`} src={icon} alt="" width={size} height={size} />;
}
