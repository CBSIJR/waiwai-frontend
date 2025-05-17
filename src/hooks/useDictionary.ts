import { dictionaryApi } from "@/services/api/dictionary";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const QUERY_KEYS = {
    WORDS_LIST: "words-list",
    WORD_DETAILS: "word-details",
};

/**
 * Hook para buscar lista de palavras
 */
export const useWordsList = (
    params?: WordListParams,
    options?: UseQueryOptions<WordsListResponse>
) => {
    return useQuery<WordsListResponse>({
        queryKey: [QUERY_KEYS.WORDS_LIST, params],
        queryFn: () => dictionaryApi.getWords(params),
        ...options,
    });
};

/**
 * Hook para buscar detalhes de uma palavra específica
 */
export const useWordDetails = (
    wordId: number,
    options?: UseQueryOptions<WordResponse>
) => {
    return useQuery<WordResponse>({
        queryKey: [QUERY_KEYS.WORD_DETAILS, wordId],
        queryFn: () => dictionaryApi.getWordById(wordId),
        enabled: !!wordId, // Só executa se wordId for fornecido
        ...options,
    });
};
