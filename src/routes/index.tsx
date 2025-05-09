import { MainLayout } from "@/components/Layouts";
import { pathConstants } from "@/constraints";
import {
    Dicionario,
    Entrar,
    Inicio,
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

    const router = createBrowserRouter([
        ...routesForPublic,
        // ...routesForNotAuthenticatedOnly
        // ...(!token ? routesForNotAuthenticatedOnly : []),
        // ...routesForAuthenticatedOnly
    ]);

    return <RouterProvider router={router} />;
}
