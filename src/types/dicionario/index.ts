export {};

declare global {
    interface WordProps {
        id: string;
        phonetic: string;
        word: string;
        created_at: string;
        updated_at: string;
        categories: [
            {
                id: string;
                category: string;
                description: string;
            },
        ];
        meanings: {
            id: string;
            meaning_pt: string;
            meaning_st: string;
            created_at: string;
            updated_at: string;
            word_id: string;
        }[];
    }
}
