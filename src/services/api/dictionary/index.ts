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
        return response.data;
    },

    /**
     * Busca uma palavra específica pelo ID
     * @param wordId ID da palavra
     * @returns Promise com a resposta da API contendo os detalhes da palavra
     */
    getWordById: async (wordId: string): Promise<WordResponse> => {
        let url = `/api/words/${wordId}`;

        const response = await axios.get<WordResponse>(url);
        return response.data;
    },

     /**
     * Busca anexos específica pelo ID
     * @param wordId ID da palavra
     * @returns Promise com a resposta da API contendo os detalhes da palavra
     */
     getAttachmentById: async (wordId: string): Promise<AttachmentListResponse> => {
        let url = `/api/words/${wordId}/attachments/?page=${1}&page_size=${5}`;

        const response = await axios.get<AttachmentListResponse>(url);
        return response.data;
    },
};
