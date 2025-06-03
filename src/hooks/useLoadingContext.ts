import { LoadingContext } from "@/contexts/LoadingContext";
import { useContext } from "react";

export const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoadingContext must be used within a LoadingProvider");
    }
    return context;
};