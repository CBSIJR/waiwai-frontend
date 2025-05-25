import AxiosClient from "@/api/axios";
import { QUERY_KEYS } from "@/constraints";
import { useQuery } from "@tanstack/react-query";
import { WordDetail } from "../PalavraDetalhe.types";


export const useGetWordDetailQuery = (
    wordId: string
) => {
    const axios = AxiosClient();
    return useQuery({
        queryKey: [QUERY_KEYS.WORD_DETAILS, wordId],
        queryFn: async () => await axios.get<ApiResponse<WordDetail>>(`/words/${wordId}`).then((res) => res.data),
        enabled: !!wordId,
    });
};

export const useGetAttachmentsQuery = (
    wordId: string,
) => {
    const axios = AxiosClient();
    return useQuery({
        queryKey: [QUERY_KEYS.ATTACHMENTS, wordId],
        queryFn: async () => await axios.get(`/words/${wordId}/attachments/?page=1&page_size=10`).then((res) => res.data),
        enabled: !!wordId,
    });
};
