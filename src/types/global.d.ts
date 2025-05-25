export {};

declare global {
    interface SignupPayload {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    }

    interface SignupResponse {
        access_token: string;
        refresh_token: string;
        token_type: string;
    }

    interface AuthResponse {
        access_token: string;
        refresh_token: string;
        token_type: string;
    }

    interface ApiErrorResponse {
        detail: string | Array<{ msg: string }>;
    }

    interface ApiError extends AxiosError {
        response?: AxiosResponse<ApiErrorResponse>;
    }

    interface LoginPayload {
        email: string;
        password: string;
    }
}
