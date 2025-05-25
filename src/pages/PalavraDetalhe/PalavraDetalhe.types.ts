import { Word } from "@/pages/Dicionario/Dicionario.types";


type Reference = {
    id: number;
    reference: string;
    year: number;
    authors: string;
    url: string | null;
};

export type Attachment = {
    id: number;
    url: string;
    content_type: string;
    created_at: Date;
};

type Meaning = {
    id: number;
    meaning_pt: string;
    meaning_ww: string | null;
    comment_pt: string | null;
    comment_ww: string | null;
    created_at: Date;
    updated_at: Date;
    reference: Reference;
}

type Detail = {
    attachments: Array<Attachment>;
    meanings: Array<Meaning>;
}

export type WordDetail = Word & Detail;

