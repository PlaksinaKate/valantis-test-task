import stub from "/imgs/stub.png";
import styles from "./index.module.css";

export function StoreItem({ name, price, brand }) {
  brand ??= "-";

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={stub} alt={name} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <div className={`${styles.text} ${styles.brand}`}>Бренд: {brand}</div>
      <div className={`${styles.text} ${styles.price}`}>{price} ₽</div>
    </div>
  );
}
