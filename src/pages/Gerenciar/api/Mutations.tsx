import AxiosClient from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { WordFormData, MeaningFormData, AttachmentFormData } from "../Gerenciar.types";


export function useCreateWordMutation() {
    const axios = AxiosClient();

    return useMutation<ApiResponse<ApiCreateResponse>, Error, WordFormData>({
        mutationFn: (data: WordFormData) =>
            axios
                .post<ApiResponse<ApiCreateResponse>>("/words/", data)
                .then((res) => res.data),
    });
}

export const useCreateMeaningMutation = (wordId: number | null) => {
    const axios = AxiosClient();

    return useMutation<ApiResponse<ApiCreateResponse>, Error, MeaningFormData>({
        mutationFn: (data: MeaningFormData) =>
            axios
                .post<
                    ApiResponse<ApiCreateResponse>
                >(`/words/${wordId}/meanings/`, data)
                .then((res) => res.data),
    });
};

export const useCreateAttachmentMutation = (wordId: number | null) => {
    const axios = AxiosClient();

    return useMutation<
        ApiResponse<ApiCreateResponse>,
        Error,
        AttachmentFormData
    >({
        mutationFn: (data: AttachmentFormData) =>
            axios
                .post<
                    ApiResponse<ApiCreateResponse>
                >(`/words/${wordId}/attachments/`, data)
                .then((res) => res.data),
    });
};
