import { useEffect, useState } from "react";
import { api } from "../../helpers/api";
import styles from "./index.module.css";
import { Wrapper } from "../../components/Wrapper";
import { LIMIT_PRODUCTS } from "../../helpers/consts";
import Pagination from "../../components/Pagination";
import { useCallback } from "react";
import { StoreItem } from "../../components/Store/StoreItem";

export function Store() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setCageCount] = useState(0);

  const getPaginationNumber = async () => {
    const data = await api.products.getProductsIds(undefined, undefined);

    if (data.result) {
      setCageCount(Math.ceil(data.result.length / LIMIT_PRODUCTS));
    }
  };

  const getProductsIds = useCallback(async () => {
    const params = {
      offset: (page - 1) * LIMIT_PRODUCTS,
      limit: LIMIT_PRODUCTS,
    };
    const data = await api.products.getProductsIds(params);

    if (data.result) {
      getProducts(data.result);
    }
  }, [page]);

  const getProducts = useCallback(
    async (productsIds) => {
      const data = await api.products.getProducts(productsIds);

      if (data.result) {
        const uniqueResults = data.result.filter(
          (product, i, products) =>
            products.findIndex((product2) => product2.id === product.id) === i
        );
        setProducts(uniqueResults);
      }
    },
    [products]
  );

  useEffect(() => {
    getPaginationNumber();
  }, []);

  useEffect(() => {
    getProductsIds();
  }, [page]);

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
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </Wrapper>
      </section>
    </main>
  );
}
