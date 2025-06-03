import { API_BASE_URL } from "@/constraints";
import axios, { AxiosResponse } from "axios";

const AxiosClient = (accessToken?: string | null) => {
    const AxiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
    });

    AxiosInstance.interceptors.request.use((config) => {
        const isFormData = config.data instanceof FormData;

        if (!isFormData && !config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json';
        }

        if (accessToken && !config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    });

    AxiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error) => {
            if (
                error.response?.status === 401 &&
                !error.config?.headers["NO_RETRY_HEADER"]
            ) {
                const config = error?.config;

                config.headers["NO_RETRY_HEADER"] = "true";
                return AxiosInstance(config);
            }
            return Promise.reject(error);
        }
    );

    return AxiosInstance;
};

export default AxiosClient;
