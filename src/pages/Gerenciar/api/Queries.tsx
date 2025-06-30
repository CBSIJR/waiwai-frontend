import AxiosClient from "@/api/axios";
import { QUERY_KEYS } from "@/constraints";
import { Reference } from "@/pages/PalavraDetalhe/PalavraDetalhe.types";
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { Category } from "../Gerenciar.types";
=======
import { Categorie } from "../Gerenciar.types";

export const useGetCategoriesListQuery = (params?: QueryParam) => {
    const axios = AxiosClient();

    let endpoint = `categories/?page=${params?.page}&page_size=${params?.page_size}`;
    if (params?.q) {
        endpoint = endpoint + `&q=${params.q}`;
    }
    return useQuery({
        queryKey: [QUERY_KEYS.CATEGORIES, params],
        queryFn: async () =>
            await axios
                .get<ApiResponsePage<Categorie>>(endpoint)
                .then((res) => res.data),
    });
};

export const useGetReferencesQuery = (params?: QueryParam) => {
    const axios = AxiosClient();
    let endpoint = `references/?page=${params?.page}&page_size=${params?.page_size}`;
    if (params?.q) {
        endpoint = endpoint + `&q=${params.q}`;
    }
    return useQuery({
        queryKey: [QUERY_KEYS.REFERENCES, params],
        queryFn: async () =>
            await axios
                .get<ApiResponsePage<Reference>>(endpoint)
                .then((res) => res.data.data),
    });
};
>>>>>>> ed8f585 (refactor: removendo a pagina de adicionar palavra)

export const useGetCategoriesListQuery = (params?: QueryParam) => {
    const axios = AxiosClient();

    let endpoint = `categories/?page=${params?.page}&page_size=${params?.page_size}`;
    if (params?.q) {
        endpoint = endpoint + `&q=${params.q}`;
    }
    return useQuery({
        queryKey: [QUERY_KEYS.CATEGORIES, params],
        queryFn: async () =>
            await axios
                .get<ApiResponsePage<Category>>(endpoint)
                .then((res) => res.data),
    });
};

export const useGetReferencesQuery = (params?: QueryParam) => {
    const axios = AxiosClient();
    let endpoint = `references/?page=${params?.page}&page_size=${params?.page_size}`;
    if (params?.q) {
        endpoint = endpoint + `&q=${params.q}`;
    }
    return useQuery({
        queryKey: [QUERY_KEYS.REFERENCES, params],
        queryFn: async () =>
            await axios
                .get<ApiResponsePage<Reference>>(endpoint)
                .then((res) => res.data.data),
    });
};
