import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useState } from "react";
import styles from "./index.module.css";
import { api } from "../../../helpers/api";
import { getTotalPageProducts } from "../../../helpers/helpers";

export function Filter({ getProducts, setPage, setPageCount, setIsLoading }) {
  const [price, setPrice] = useState(null);
  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);

  const onChangePrice = (e) => setPrice(e.target.value);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeBrand = (e) => setBrand(e.target.value);

  const onFilter = async () => {
    setIsLoading(true)
    const params = {
      price: price ? Number(price + ".0") : undefined,
      product: name ? name : undefined,
      brand: brand ? brand : undefined,
    };
    const data = await api.products.filtered(params);

    if (data.result) {
      setPage(1);
      setPageCount(getTotalPageProducts(data.result.length));
      getProducts(data.result);
    }
  };

  return (
    <div>
      <span className={styles.filter_title}>Фильтрация: </span>
      <div className="flex center">
        <div className={styles.filter}>
          <label className="">По цене</label>
          <Input
            placeholder={"Введите цену"}
            value={price}
            onChange={onChangePrice}
          />
        </div>
        <div className={styles.filter}>
          <label className="">по названию</label>
          <Input
            placeholder={"Введите название"}
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className={styles.filter}>
          <label className="">по бренду</label>
          <Input
            placeholder={"Введите бренд"}
            value={brand}
            onChange={onChangeBrand}
          />
        </div>
        <Button onClick={onFilter}>Фильтровать</Button>
      </div>
    </div>
  );
}
