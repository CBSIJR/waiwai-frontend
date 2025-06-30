import { Tabs, type TabsProps } from "antd";
import WordsListManage from "./ListarPalavras";
import CategoryListManage from "./ListarCategorias";
import RefenceListManage from "./ListarReferencias";
import UsersListManage from "./ListarUsuarios";

export default function TabLayoutComponent() {
    const viewTabs: TabsProps["items"] = [
        {
            key: "palavras",
            label: "Palavras",
            children: <WordsListManage />,
        },
    ];

    const adminTabs: TabsProps["items"] = [
        ...viewTabs,
        {
            key: "categorias",
            label: "Categorias",
            children: <CategoryListManage />,
        },
        {
            key: "referencias",
            label: "Referências",
            children: <RefenceListManage />,
        },
        {
            key: "usuarios",
            label: "Usuários",
            children: <UsersListManage />,
        },
    ];

    return (
        <Tabs
            className="py-4 md:py-0"
            type="card"
            defaultActiveKey="palavras"
            items={adminTabs}
        />
    );
}
