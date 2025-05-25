import { QUERY_KEYS } from "@/constraints";
import { dictionaryApi } from "@/services/api/dictionary";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

/**
 * Hook para buscar lista de palavras
 */
export const useWordsList = (
    params?: WordListParams,
    options?: UseQueryOptions<WordsListResponse>
) => {
    return useQuery<WordsListResponse>({
        queryKey: [QUERY_KEYS.WORDS_LIST, params],
        queryFn: async () => await dictionaryApi.getWords(params),
        ...options,
    });
};

/**
 * Hook para buscar detalhes de uma palavra específica
 */
export const useWordDetails = (
    wordId: string,
    options?: UseQueryOptions<WordResponse>
) => {
    return useQuery<WordResponse>({
        queryKey: [QUERY_KEYS.WORD_DETAILS, wordId],
        queryFn: async () => await dictionaryApi.getWordById(wordId),
        enabled: !!wordId,
        ...options,
    });
};

export const useAttachments = (
    wordId: string,
    options?: UseQueryOptions<AttachmentListResponse>
) => {
    return useQuery<AttachmentListResponse>({
        queryKey: [QUERY_KEYS.ATTACHMENTS, wordId],
        queryFn: async () => await dictionaryApi.getAttachmentById(wordId),
        enabled: !!wordId,
        ...options,
    });
};
