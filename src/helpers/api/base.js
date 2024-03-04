import axios from 'axios';

export const METHODS = {
    apiBaseUrl: import.meta.env.VITE_API_URL,
}

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
    baseURL: METHODS.apiBaseUrl
});


const onRequest = (config) => {
    logOnDev(`[API] | Request [${JSON.stringify(config)}]`);
    config.headers['Access-Control-Allow-Origin'] = `*`;
    config.headers['Authorization'] = `${token}`;
    config.headers['Content-Type'] = `application/json`;

    return config;
}



const onErrorResponse = (error) => {
    if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url } = error.config;
        const { status } = error.response;

        logOnDev(`[API] | Error [${method?.toUpperCase()} ${url} | Error ${status} ${message}]`);

        switch (status) {

            case 400: {
                // "Invalid request"
                //throwErrorToast(`${error.response.errorMessage}`);
                return  error.response
            }

            case 401: {
                // "Login required"
                // todo: navigate to login
                return  error.response

            }
            case 403: {
                // "Permission denied"
                return  error.response

            }
            case 404: {
                // "Invalid request"
                return  error.response
            }
            case 405: {
                // "Method not allowed"
                return  error.response

            }
            case 500: {
                // "Server error"
                return  error.response
            }
            default: {
                // "Unknown error occurred"
                return  error.response
            }
        }

        if (status === 401) {
            // Delete Token & Go To Login Page if you required.
            /* localStorage.removeItem("tokens");
            tokens.removeAuthToken(); */
        }
        // throwErrorToast(`${message}`);
    } else {
        return  error.message
    }

    return  error.message
};

apiInstance.interceptors.request.use(onRequest, onErrorResponse);

apiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    onErrorResponse
);
