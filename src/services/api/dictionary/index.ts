import axios from "axios";

export const dictionaryApi = {
    /**
     * Lista palavras do dicionário
     * @param params Parâmetros de filtro e paginação
     * @returns Promise com a resposta da API contendo lista de palavras
     */
    getWords: async (params?: WordListParams): Promise<WordsListResponse> => {
        let url = `api/words/?page=${params?.page}&page_size=${params?.page_size}`;
        if (params?.q) {
            url = `api/words/?q=${params.q}&page=${params.page}&page_size=${params.page_size}`;
        }
        const response = await axios.get<WordsListResponse>(url);
        console.log("total", response.data)
        return response.data;
    },

    /**
     * Busca uma palavra específica pelo ID
     * @param wordId ID da palavra
     * @returns Promise com a resposta da API contendo os detalhes da palavra
     */
    getWordById: async (wordId: number): Promise<WordResponse> => {
        const response = await axios.get<WordResponse>(`api/word/${wordId}`);
        return response.data;
    },
};
