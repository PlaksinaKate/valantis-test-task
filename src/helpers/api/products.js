import { METHODS, apiInstance } from "./base";

const getProducts = async () => {
  const response = await apiInstance.post('',{
    action: METHODS.products,
    params: { ids: ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"] },
  });
  console.log('response', response)
  return response.data;
};

export const products = {
  getProducts,
};
