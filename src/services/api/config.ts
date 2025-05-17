import axios from "axios";

const API_BASE_URL = "/api";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para add token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor para lidar com erros de resposta
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Se o erro for 401 (Unauthorized) e não for uma tentativa de refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Tenta obter um novo token usando o refresh token
                const refreshToken = localStorage.getItem("refresh_token");
                if (!refreshToken) {
                    // Se não houver refresh token, redireciona para login
                    return Promise.reject(error);
                }

                // Implementar lógica de refresh token quando necessário
                // const response = await api.post('/auth/refresh-token', { refresh_token: refreshToken });
                // const { access_token, refresh_token } = response.data.data;

                // localStorage.setItem('access_token', access_token);
                // localStorage.setItem('refresh_token', refresh_token);

                // // Atualiza o header e refaz a requisição original
                // originalRequest.headers.Authorization = `Bearer ${access_token}`;
                // return api(originalRequest);
            } catch (refreshError) {
                // Se o refresh falhar, limpa os tokens e redireciona para login
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
