import { createContext } from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    accessToken: string | null;
    logout: () => void;
    injectToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);