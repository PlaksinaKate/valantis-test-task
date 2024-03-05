import { useEffect, useState } from "react";
import { api } from "../../helpers/api";

export function Home() {
  const [productsIds, setProductsIds] = useState([]);
  const [products, setProducts] = useState([]);

  const getProductsIds = async () => {
    const data = await api.products.getProductsIds(0)

    if (data.result) {
      setProductsIds(data.result);
      getProducts(productsIds)
    }
  }

  const getProducts = async (ids) => {
    const data = await api.products.getProducts(ids)

    if (data.result) {
      setProducts(data.result)
    }
  }

  useEffect(() => {
    getProductsIds()
  }, [])



  return <div>
    <h1>Товары</h1>
  </div>;
}
