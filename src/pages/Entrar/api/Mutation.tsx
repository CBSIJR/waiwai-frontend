import AxiosClient from "@/api/axios";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSigninMutation() {
    const { injectToken } = useAuth();
    const navigate = useNavigate();
    const axios = AxiosClient();

    return useMutation<ApiResponse<AccessResponse>, Error, SigninPayload>({
        mutationFn: ({ email, password }) =>
            axios
                .post<ApiResponse<AccessResponse>>("/auth/signin/", { email, password })
                .then(res => res.data),

        onSuccess: (res) => {
            injectToken(res.data.access_token);
            navigate("/dicionario");
        },

    });
}
