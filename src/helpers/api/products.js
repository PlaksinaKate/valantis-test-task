import { METHODS, apiInstance } from "./base";
import { LIMIT_PRODUCTS } from "../consts.js";

const getProductsIds = async (params) => {
  const response = await apiInstance.post("", {
    action: METHODS.productsIds,
    params
  });

  return response.data;
};

const getProducts = async (ids) => {
  const response = await apiInstance.post("", {
    action: METHODS.products,
    params: { ids },
  });

  return response.data;
};

const getFields = async () => {
  const response = await apiInstance.post("", {
    action: METHODS.fields,
  });

  return response.data;
};

const filtered = async (params) => {
  const response = await apiInstance.post("", {
    action: METHODS.filter,
    params
  });

  return response.data;
};

export const products = {
  getProductsIds,
  getProducts,
  getFields,
  filtered
};
