import {
    getAttachments,
    getWordID,
    getWords,
} from "@/services/dicionario/wordService";
import { useQuery } from "@tanstack/react-query";

export const useWords = (page: number = 1, pageSize: number = 10) => {
    return useQuery({
        queryKey: ["words", page, pageSize],
        queryFn: async () => await getWords(page, pageSize),
        staleTime: 1000 * 60 * 5,
    });
};

export const useGetWordID = (id: string) => {
    return useQuery({
        queryKey: ["word", id],
        queryFn: async () => await getWordID(id),
        enabled: !!id,
    });
};

export const useAttachments = (id: string) => {
    return useQuery({
        queryKey: ["attachments", id],
        queryFn: async () => await getAttachments(id),
        enabled: !!id,
    });
};
