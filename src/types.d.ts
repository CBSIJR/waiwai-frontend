export { };

declare global {
    interface QueryParam {
        q?: string;
        page?: number;
        page_size?: number;
    }

    interface ApiCreateResponse {
        id: number;
    }

    interface ApiResponse<R> {
        data: R;
    }

    interface ApiResponsePage<RP> extends ApiResponse {
        data: RP[];
        total_items: number;
    }

    interface ValidationErrorDetail {
        loc: Array<string, number>;
        msg: string;
        type: string;
    }

    interface ApiResponseValidationError extends ApiResponseError {
        detail: Array<ValidationErrorDetail>;
    }

    interface ApiResponseErrorMessage {
        msg: string;
    }

    interface ApiResponseError {
        detail: ApiResponseErrorMessage | ApiResponseValidationError;
    }


    interface SignupPayload {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    }

    interface AccessResponse {
        access_token: string;
        refresh_token: string;
        token_type: string;
    }

    interface SigninPayload {
        email: string;
        password: string;
    }


    type RouteType = {
        path: string;
        text: string;
        newTab: boolean;
        navbar: boolean;
        priority?: number;
    };

    type RoutesType = {
        [key: string]: RouteType;
    };

    type LoadingContextType = {
        isLoading: boolean;
        changeLoadingState: () => void;
    };

}
