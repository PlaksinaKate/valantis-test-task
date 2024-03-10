import md5 from "md5";
import { LIMIT_PRODUCTS } from "./consts";

/**
 * Converting value to md5
 * 
 * @param value - value to convert
 * @returns - Hash
 */
export const convertToMd5 = (value) => md5(value);

export const getTotalPageProducts = (products) => Math.ceil(products / LIMIT_PRODUCTS)

