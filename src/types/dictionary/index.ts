export {};

declare global {
    interface Category {
        category: string;
    }

    interface Attachment {
        name: string;
        id: number;
        uuid: string;
        filename: string;
        filedir: string;
        url: string;
        content_type: string;
        user_id: number;
        word_id: number;
        created_at: string; 
        updated_at: string; 
    }

    interface Reference {
        id: number;
        authors: string;
        reference: string;
        url: string | null;
        year: number;
    }

    interface Meaning {
        id: number;
        meaning_pt: string;
        meaning_ww: string;
        comment_pt: string | null;
        comment_ww: string | null;
        reference: Reference;
        created_at: string;
        updated_at: string;
    }

    interface Word {
        id: number;
        word: string;
        meanings: Meaning[];
        phonemic: string;
        categories: Category[];
        created_at: string;
        updated_at: string;
    }

    interface WordsListResponse {
        data: Word[];
        total_items: number;
    }

    interface AttachmentListResponse {
        data: Attachment[];
        total_items: number;
    }

    interface WordListParams {
        q?: string; 
        page?: number; 
        page_size?: number; 
    }

    interface WordResponse {
        data: Word;
    }
}
