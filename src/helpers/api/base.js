import axios from "axios";
import { logOnDev } from "../logger";
import { convertToMd5 } from "../helpers";
import { API_PASSWORD } from "../consts";

export const METHODS = {
  apiBaseUrl: "/api",
  products: "get_items",
  productsIds: "get_ids",
  fields: "get_fields",
  filter: "filter",
};

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
  baseURL: METHODS.apiBaseUrl,
});

const getApiPassword = () => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth =
    today.getMonth() < 10 ? "0" + (today.getMonth()+1) : (today.getMonth()+1);
  const todayDay =
  today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
  const passwordDate = `${todayYear}${todayMonth}${todayDay}`;

  return convertToMd5(`${API_PASSWORD}_${passwordDate}`);
};

const onRequest = (config) => {
  logOnDev(`[API] | Request [${JSON.stringify(config)}]`);
  config.headers["Access-Control-Allow-Origin"] = `*`;
  config.headers["X-Auth"] = `${getApiPassword()}`;
  config.headers["Content-Type"] = `application/json`;

  return config;
};

const onErrorResponse = (error) => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config;
    const { status } = error.response;

    logOnDev(
      `[API] | Error [${method?.toUpperCase()} ${url} | Error ${status} ${message}]`
    );

    switch (status) {
      case 400: {
        // "Invalid request"
        //throwErrorToast(`${error.response.errorMessage}`);
        return error.response;
      }

      case 401: {
        // "Login required"
        // todo: navigate to login
        return error.response;
      }
      case 403: {
        // "Permission denied"
        return error.response;
      }
      case 404: {
        // "Invalid request"
        return error.response;
      }
      case 405: {
        // "Method not allowed"
        return error.response;
      }
      case 500: {
        // "Server error"
        return error.response;
      }
      default: {
        // "Unknown error occurred"
        return error.response;
      }
    }

    if (status === 401) {
      // Delete Token & Go To Login Page if you required.
      /* localStorage.removeItem("tokens");
            tokens.removeAuthToken(); */
    }
    // throwErrorToast(`${message}`);
  } else {
    logOnDev(`[API] | Error [${error.message}]`);
    return error.message;
  }

  return error.message;
};

apiInstance.interceptors.request.use(onRequest, onErrorResponse);

apiInstance.interceptors.response.use((response) => {
  logOnDev(response);
  return response;
}, onErrorResponse);
