import styles from "./index.module.css";

export function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
