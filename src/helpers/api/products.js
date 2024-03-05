import { METHODS, apiInstance } from "./base";

const getProductsIds = async (offset) => {
  const response = await apiInstance.post('',{
    action: METHODS.productsIds,
    "params": {offset, "limit": 50},
  });

  return response.data;
};

const getProducts = async (ids) => {
  const response = await apiInstance.post('',{
    action: METHODS.products,
    "params": { ids },
  });

  return response.data;
};

export const products = {
  getProductsIds,
  getProducts,
};
