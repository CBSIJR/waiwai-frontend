import { EnumPermission } from "../types/index";

type RouteType = {
    path: string;
    text: string;
    newTab: boolean;
    navbar: boolean;
    permission?: EnumPermission;
    priority?: number;
};

type RoutesType = {
    [key: string]: RouteType;
};

export const pathConstants: RoutesType = {
    inicio: {
        path: "/",
        text: "Início",
        newTab: false,
        navbar: true,
        priority: 1,
    },
    dicionario: {
        path: "/dicionario",
        text: "Dicionário",
        newTab: false,
        navbar: true,
        priority: 2,
    },
    gerenciar: {
        path: "/gerenciar",
        text: "Gerenciar",
        newTab: false,
        navbar: true,
        permission: EnumPermission.USER,
        priority: 3,
    },
    entrar: {
        path: "/entrar",
        text: "Entrar",
        newTab: false,
        navbar: false,
    },
    registrar: {
        path: "/registrar",
        text: "Registrar",
        newTab: false,
        navbar: false,
    },
    politicaprivacidade: {
        path: "/politica-privacidade",
        text: "Politica de Privacidade",
        newTab: false,
        navbar: false,
    },
};

export const QUERY_KEYS = {
    WORDS_LIST: "words-list",
    WORD_DETAILS: "word-details",
    ATTACHMENTS: "attachments",
    CATEGORIES: "categories",
    REFERENCES: "references",
};

export const themeColors = {
    colorPrimary: "#A63429",
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
