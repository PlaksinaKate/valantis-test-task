import { useEffect, useState } from "react";
import { api } from "../../helpers/api";

export function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await api.products.getProducts()

    if (data.result) {
      setProducts(data.result)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  console.log('products', products);

  return <div>
    <h1>Привет!</h1>
  </div>;
}
