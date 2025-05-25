import AxiosClient from "@/api/axios";
import { QUERY_KEYS } from "@/constraints";
import { useQuery } from "@tanstack/react-query";
import { Word } from "../Dicionario.types";


export const useGetWordsListQuery = (params?: QueryParam) => {

    const axios = AxiosClient();

    let endpoint = `words/?page=${params?.page}&page_size=${params?.page_size}`;
    if (params?.q) {
        endpoint = endpoint + `&q=${params.q}`;
    }
    return useQuery({
        queryKey: [QUERY_KEYS.WORDS_LIST, params],
        queryFn: async () =>
            await axios
                .get<ApiResponsePage<Word>>(endpoint)
                .then((res) => res.data),
    });
};
