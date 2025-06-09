import { createContext, useContext } from "react";


interface LoadingContextProps {
    isLoading: boolean;
    toggleLoading: (loading: boolean) => void;
    withLoading: <T>(promise: Promise<T>) => Promise<T>;
}

export const LoadingContext = createContext<LoadingContextProps | undefined>(
    undefined
);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
