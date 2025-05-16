export {};

declare global {

    interface AttachmentProps {
        id: number;
        uuid: string,
        filename: string,
        filedir: string,
        url: string,
        content_type: string,
        user_id: number,
        word_id: number,
        created_at: string,
        updated_at: string,
      }
    interface MeaningProps {
        id: number;
        meaning_pt: string;
        meaning_ww: string;
        comment_pt: string | null;
        comment_ww: string | null;
        created_at: string;
        updated_at: string;
        word_id: number;
        reference_id: number;
        user_id: number;
    }

    interface CategoryProps {
        id: number;
        category: string;
        description: string;
    }
    interface WordProps {
        id: string;
        phonemic: string | null;
        word: string;
        created_at: string;
        updated_at: string;
        categories: CategoryProps[];
        meanings: MeaningProps[];
    }
}
