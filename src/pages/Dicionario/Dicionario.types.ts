type Category = {
    category: string;
};

export type Word = {
    id: number;
    word: string;
    phonemic: string | null;
    categories: Array<Category>;
    created_at: Date;
    updated_at: Date;
};
