import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            setAccessToken(token);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setAccessToken(null);
    };

    const injectToken = (token: string) => {
        localStorage.setItem("access_token", token);
        setAccessToken(token);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!accessToken,
                accessToken,
                injectToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};