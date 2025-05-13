import { getWords } from "@/services/dicionario/wordService";
import { useQuery } from "@tanstack/react-query";

export const useWords = (page: number = 1, pageSize: number = 10) => {
  return useQuery({
    queryKey: ["words", page, pageSize],
    queryFn: async () => await getWords(page, pageSize),
    staleTime: 1000 * 60 * 5,
  });
};
