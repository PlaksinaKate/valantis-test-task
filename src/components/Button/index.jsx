import styles from "./index.module.css";

export function Button({ children, type, disabled, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
