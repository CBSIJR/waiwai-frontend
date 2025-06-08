import { useState, ReactNode } from "react";
import { LoadingContext } from "./LoadingContext";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    const withLoading = async <T,>(promise: Promise<T>): Promise<T> => {
        setIsLoading(true);
        try {
            const result = await promise;
            return result;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LoadingContext.Provider
            value={{ isLoading, toggleLoading, withLoading }}
        >
            {children}
        </LoadingContext.Provider>
    );
};
