import { useEffect, useState } from "react";
import { api } from "../../helpers/api";
import { StoreItem } from "../../components/Store/StoreItem";
import styles from "./index.module.css";
import { Wrapper } from "../../components/Wrapper";

export function Store() {
  const [products, setProducts] = useState([]);

  const getProductsIds = async () => {
    const data = await api.products.getProductsIds(0);

    if (data.result) {
      getProducts(data.result);
    }
  };

  const getProducts = async (productsIds) => {
    const data = await api.products.getProducts(productsIds);

    if (data.result) {
      const uniqueResults = data.result.filter(
        (product, i, products) =>
          products.findIndex((product2) => product2.id === product.id) === i
      );
      setProducts(uniqueResults);
    }
  };

  useEffect(() => {
    getProductsIds();
  }, []);

  const store = products.map((item) => {
    const { id, brand, price, product } = item;

    return (
      <StoreItem key={id} id={id} name={product} price={price} brand={brand} />
    );
  });

  return (
    <main>
      <section>
        <Wrapper>
          <h1 className={styles.title}>Товары</h1>
          <div className={styles.wr}>{store}</div>
        </Wrapper>
      </section>
    </main>
  );
}
