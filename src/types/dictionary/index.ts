export {};

declare global {
    interface Category {
        category: string;
    }

    interface Word {
        id: number;
        word: string;
        phonemic: string;
        categories: Category[];
        created_at: string;
        updated_at: string;
    }

    interface WordsListResponse {
        data: Word[];
        total_items: number;
    }

    interface WordListParams {
        q?: string; // Filtro de busca
        page?: number; // Página atual
        page_size?: number; // Quantidade de itens por página
    }

    interface WordResponse {
        data: Word;
    }
}
