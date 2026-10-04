import { useEffect, useState } from 'react';
import styles from './TypingText.module.scss';

const typeMs = 75;
const eraseMs = 40;
const holdMs = 1900;

export default function TypingText({ words }) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];
    let timer;
    if (!erasing) {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        timer = setTimeout(() => setErasing(true), holdMs);
      }
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
    } else {
      setErasing(false);
      setIndex(index + 1);
    }
    return () => clearTimeout(timer);
  }, [reduced, text, erasing, index, words]);

  if (reduced) return <em>{words[0]}</em>;

  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <em className={styles.wrap}>
      <span className="sr-only">{words[0]}</span>
      {/* invisible longest word holds the line width steady while letters come and go */}
      <span className={styles.ghost} aria-hidden="true">{longestWord}</span>
      <span className={styles.live} aria-hidden="true">
        {text}
        <span className={styles.caret} />
      </span>
    </em>
  );
}
