import { createContext } from "react";
import { EnumPermission } from "../types/index";

export interface AuthContextType {
    isAuthenticated: boolean;
    accessToken: string | null;
    userPermission: EnumPermission | null;
    logout: () => void;
    injectToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);