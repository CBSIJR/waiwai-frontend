import { MainLayout } from "@/components/Layouts";
import { pathConstants } from "@/constraints";
import {
    AdicionarPalavra,
    Dicionario,
    Entrar,
    Gerenciar,
    Inicio,
    PalavraDetalhe,
    Registrar,
} from "@/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Routes() {
    const routesForPublic = [
        {
            element: <MainLayout />,
            children: [
                {
                    path: pathConstants.inicio.path,
                    element: <Inicio />,
                },
                {
                    path: pathConstants.dicionario.path,
                    element: <Dicionario />,
                },
                {
                    path: pathConstants.gerenciar.path,
                    element: <Gerenciar />,
                },
                {
                    path: `${pathConstants.dicionario.path}/:id`,
                    element: <PalavraDetalhe />,
                },
                {
                    path: `${pathConstants.dicionario.path}/adicionar-palavra`,
                    element: <AdicionarPalavra />,
                },
                {
                    path: pathConstants.entrar.path,
                    element: <Entrar />,
                },
                {
                    path: pathConstants.registrar.path,
                    element: <Registrar />,
                },
            ],
        },
    ];

    const router = createBrowserRouter(routesForPublic);

    return <RouterProvider router={router} />;
}
