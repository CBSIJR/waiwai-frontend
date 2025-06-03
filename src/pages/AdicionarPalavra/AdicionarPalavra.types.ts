export interface WordFormData {
    word: string;
    phonemic: string | null;
    categories: number[];
}

export interface WordFormProps {
    onSuccess: (wordId: number) => void;
}

export interface MeaningFormData {
    meaning_pt: string;
    meaning_ww: string;
    comment_ww: string;
    comment_pt: string;
    reference: number | null;
}

export type AttachmentFormData = FormData;

export interface MeaningFormProps {
    wordId: number | null;
    onSuccess: () => void;
}

export interface AttachmentFormProps {
    wordId: number | null;
}

export interface Categorie {
    id: number;
    category: string;
}
