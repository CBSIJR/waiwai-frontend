import AxiosClient from "@/api/axios";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignupMutation() {
    const { injectToken } = useAuth();
    const navigate = useNavigate();
    const axios = AxiosClient();

    return useMutation<ApiResponse<AccessResponse>, Error, SignupPayload>({
        mutationFn: (data: SignupPayload) =>
            axios
                .post<ApiResponse<AccessResponse>>("/auth/signup/", data)
                .then(res => res.data),

        onSuccess: (res) => {
            injectToken(res.data.access_token);
            navigate("/dicionario");
        },

    });
}
