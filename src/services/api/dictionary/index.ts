import { api } from "../config";

export const dictionaryApi = {
    /**
     * Lista palavras do dicionário
     * @param params Parâmetros de filtro e paginação
     * @returns Promise com a resposta da API contendo lista de palavras
     */
    getWords: async (params?: WordListParams): Promise<WordsListResponse> => {
        const response = await api.get<WordsListResponse>("/words/", {
            params,
        });
        return response.data;
    },

    /**
     * Busca uma palavra específica pelo ID
     * @param wordId ID da palavra
     * @returns Promise com a resposta da API contendo os detalhes da palavra
     */
    getWordById: async (wordId: number): Promise<WordResponse> => {
        const response = await api.get<WordResponse>(`/word/${wordId}`);
        return response.data;
    },
};
