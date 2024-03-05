import { isDevEnv } from "./consts.js";

export const logOnDev = (message) => {
  if (isDevEnv) {
    console.info(`ℹ️`, message);
  }
};
