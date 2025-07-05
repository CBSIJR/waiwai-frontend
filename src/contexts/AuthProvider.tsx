import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import TokenDecode from "@/utils/token";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [tokenDecoded, setTokenDecoded] = useState<TokenDecode | null>(null);

    const userPermission = tokenDecoded?.getData?.permission ?? null;

    const isAuthenticated =
        (!!accessToken && tokenDecoded?.isAuthenticated) || false;

    // useEffect para decodificar o token sempre que accessToken mudar
    useEffect(() => {
        if (accessToken) {
            try {
                const decoded = new TokenDecode(accessToken);
                setTokenDecoded(decoded);
            } catch (error) {
                console.error("Erro ao decodificar token:", error);
                setTokenDecoded(null);
            }
        } else {
            setTokenDecoded(null);
        }
    }, [accessToken]);

    // useEffect para carregar token do localStorage na inicialização
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
                isAuthenticated,
                accessToken,
                userPermission,
                injectToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};