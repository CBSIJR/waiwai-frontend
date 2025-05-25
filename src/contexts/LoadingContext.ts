import { createContext } from "react";

const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    changeLoadingState: () => null,
});

export default LoadingContext;
