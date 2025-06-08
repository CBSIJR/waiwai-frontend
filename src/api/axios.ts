import { API_BASE_URL } from "@/constraints";
import { AuthContext } from "@/contexts/AuthContext";
import axios, { AxiosResponse } from "axios";
import { useContext } from "react";

const AxiosClient = () => {
        const authContext = useContext(AuthContext);
    

    const AxiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
        },
    });

    AxiosInstance.interceptors.request.use((config) => {
        const isFormData = config.data instanceof FormData;

        if (!isFormData && !config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json';
        }

        if (authContext?.accessToken && !config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${authContext.accessToken}`;
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
