import { MainLayout } from "@/components/Layouts";
import { pathConstants } from "@/constraints";
import { Entrar, Inicio, Registrar, Dictionary, WordDetailPage } from "@/pages";
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
                    element: <Dictionary />,
                },
                {
                    path: `${pathConstants.dicionario.path}/:id`,
                    element: <WordDetailPage />,
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
