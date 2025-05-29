interface WordFormData {
    word: string;
    phonemic: string | null;
    categories: number[];
  }
  
  interface WordFormProps {
    onSuccess: (wordId: number) => void;
  }

  interface MeaningFormData {
    meaning_pt: string;
    meaning_ww: string;
    comment_ww: string;
    comment_pt: string;
    reference: number | null;
  }
  
  interface MeaningFormProps {
    wordId: number | null;
    onSuccess: () => void;
  }

  interface AttachmentFormProps {
    wordId: number | null;
    onSuccess: () => void;
  }

  interface Categorie {
    id: number;
    category: string;
  }
  