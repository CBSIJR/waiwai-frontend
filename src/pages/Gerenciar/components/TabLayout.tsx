import { Tabs, type TabsProps } from "antd";
import ListarPalavras from "./ListarPalavras";

export default function TabLayoutComponent() {
    const viewTabs: TabsProps["items"] = [
        {
            key: "palavras",
            label: "Palavras",
            children: <ListarPalavras />,
        },
    ];

    const adminTabs: TabsProps["items"] = [
        ...viewTabs,
        {
            key: "categorias",
            label: "Categorias",
            children: <div>Categorias</div>,
        },
        {
            key: "referencias",
            label: "Referências",
            children: <div>Referências</div>,
        },
        {
            key: "usuarios",
            label: "Usuários",
            children: <div>Usuários</div>,
        },
    ];

    return (
        <Tabs
            type="card"
            defaultActiveKey="palavras"
            items={adminTabs}
        />
    );
}
