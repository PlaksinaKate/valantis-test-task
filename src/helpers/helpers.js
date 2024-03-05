import md5 from "md5";

/**
 * Converting value to md5
 * 
 * @param value - value to convert
 * @returns - Hash
 */
export const convertToMd5 = (value) => md5(value);

