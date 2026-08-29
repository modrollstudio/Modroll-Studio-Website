import { Link } from 'react-router';
import styles from './Button.module.scss';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  to,
  ...rest
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
  if (to) {
    return <Link to={to} className={className} {...rest}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={className} {...rest}>{children}</a>;
  }
  return (
    <button type="button" className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
