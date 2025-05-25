import { RoutesType } from "@/types";

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
};

export const apiUrl = import.meta.env.VITE_API_BASE_URL;