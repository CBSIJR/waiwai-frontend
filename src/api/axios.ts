import { API_BASE_URL } from "@/constraints";
import axios, { AxiosResponse } from "axios";
// import AuthContext from "../contexts/AuthContext";

const AxiosClient = (accessToken?: string | null) => {
    const AxiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },

    });

    // AxiosInstance.interceptors.request.use((request) => {
    //     if (!request.headers?.Authorization && authContext.data.accessToken)
    //         request.headers.Authorization = `Bearer ${authContext.data.accessToken}`;
    //     return request;
    // });

    AxiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error) => {
            if (
                error.response?.status === 401 &&
                !error.config?.headers["NO_RETRY_HEADER"]
                //  && authContext.data.refreshToken
            ) {
                const config = error?.config;

                // try {
                //     const result = await axios.post<AuthResponseType>(
                //         "http://localhost:8080/api/auth/refresh",
                //         {},
                //         {
                //             headers: {
                //                 Authorization: `Bearer ${authContext.userInfo.refreshToken}`,
                //             },
                //         }
                //     );

                //     authContext.login({
                //         avatar: result.data.userAvatar,
                //         token: result.data.accessToken,
                //         refreshToken: result.data.refreshToken,
                //         username: result.data.userName
                //     });

                //     config.headers.Authorization = `Bearer ${result.data.accessToken}`;
                // } catch (err) {
                // authContext.logout();
                // }

                config.headers["NO_RETRY_HEADER"] = "true";
                return AxiosInstance(config);
            }
            return Promise.reject(error);
        }
    );
    return AxiosInstance;
};

export default AxiosClient;

