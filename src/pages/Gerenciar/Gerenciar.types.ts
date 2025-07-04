export interface ModalCriarEditarPalavraProps {
    open: boolean;
    onCancel: () => void;
}

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
    meaning_ww: string | null;
    comment_ww: string | null;
    comment_pt: string | null;
    reference: number;
}

export type AttachmentFormData = FormData;

export interface MeaningFormProps {
    wordId: number | null;
    onSuccess: () => void;
}

export interface AttachmentFormProps {
    wordId: number | null;
}

export interface Category {
    id: number;
    category: string;
}
