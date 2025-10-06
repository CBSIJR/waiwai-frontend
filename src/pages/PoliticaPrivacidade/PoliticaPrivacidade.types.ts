import { ReactNode } from "react";

export type SectionType = {
    key: string;
    title: string;
    content: ReactNode;
};

export type DefinitionItemProps = { term: string; definition: string };
