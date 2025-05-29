import AxiosClient from "@/api/axios";
import { AuthContext } from "@/contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

export function useCreateWordMutation() {
    const authContext = useContext(AuthContext);
    const axios = AxiosClient(authContext?.accessToken);

    return useMutation<ApiResponse<ApiCreateResponse>, Error, WordFormData>({
        mutationFn: (data: WordFormData) =>
            axios
                .post<ApiResponse<ApiCreateResponse>>("/words/", data)
                .then((res) => res.data),
    });
}

export const useCreateMeaningMutation = (wordId: number | null) => {
    const authContext = useContext(AuthContext);
    const axios = AxiosClient(authContext?.accessToken);

    return useMutation<ApiResponse<ApiCreateResponse>, Error, MeaningFormData>({
        mutationFn: (data: MeaningFormData) =>
            axios
                .post<
                    ApiResponse<ApiCreateResponse>
                >(`/words/${wordId}/meanings/`, data)
                .then((res) => res.data),
    });
};
