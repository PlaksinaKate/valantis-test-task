import stub from "/imgs/stub.png";
import styles from "./index.module.css";

export function StoreItem({ name, price, brand }) {
  brand ??= '-';
    
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={stub} alt={name} />
      </div>
      <h4>{name}</h4>
      <div>Бренд: {brand}</div>
      <div>{price} ₽</div>
    </div>
  );
}
