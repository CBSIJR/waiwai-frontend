import { MainLayout } from "@/components/Layouts";
import { pathConstants } from "@/constraints";
import {
    AdicionarPalavra,
    Dicionario,
    Entrar,
    Inicio,
    PalavraDetalhe,
    Registrar,
    PoliticaPrivacidade,
    NotFoundPage
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
                 {
                    path: pathConstants.politicaprivacidade.path,
                    element: <PoliticaPrivacidade />, 
                },
                {
                    path: pathConstants.error404.path,
                    element: <NotFoundPage/>,
                }
           
            ],
        },
    ];

    const router = createBrowserRouter(routesForPublic);

    return <RouterProvider router={router} />;
}
