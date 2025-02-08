import { MainLayout } from "@/components/Layouts";
import { pathConstants } from "@/constraints";
import {
    Dicionario,
    Entrar,
    Inicio,
    PoliticaPrivacidade,
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
                {
                    path: pathConstants.politicaprivacidade.path,
                    element: <PoliticaPrivacidade />,
                },
            ],
        },
    ];

    // const routesForNotAuthenticatedOnly = [
    //     {
    //         path: '/',
    //         element: <> <h1>Home Page</h1><Link to='/login-auth'>Login</Link></>,
    //     },
    //     {
    //         path: '/login',
    //         element: <h1>Login</h1>,
    //     },
    //     {
    //         path: '/login-auth',
    //         element: <h1>Login Auth</h1>// <Login />,
    //     },
    // ];

    // const routesForAuthenticatedOnly = [
    //     {
    //         path: '/',
    //         element: <ProtectedRoute />,
    //         children: [
    //             {
    //                 path: '/',
    //                 element: <><h1 className="auth-path">User Home Page</h1><Link to='/logout'>Logout</Link></>,
    //             },
    //             {
    //                 path: '/profile',
    //                 element: <h1 className="auth-path">User Profile</h1>,
    //             },
    //             {
    //                 path: '/logout',
    //                 element: <h1>Logout</h1>//<Logout className="auth-path" />,
    //             },
    //         ],
    //     },
    // ];

    const router = createBrowserRouter([
        ...routesForPublic,
        // ...routesForNotAuthenticatedOnly
        // ...(!token ? routesForNotAuthenticatedOnly : []),
        // ...routesForAuthenticatedOnly
    ]);

    return <RouterProvider router={router} />;
}
