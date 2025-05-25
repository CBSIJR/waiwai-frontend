import { SetStateAction, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { pathConstants } from "@/constraints";
import { RouteType } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [navbarOpen, setNavbarOpen] = useState(false);

    const [sticky, setSticky] = useState(false);

    const [openIndex, setOpenIndex] = useState(-1);

    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    const handleSubmenu = (index: SetStateAction<number>) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
        return () => {
            window.removeEventListener("scroll", handleStickyNavbar);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavbarOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [navbarOpen]);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
                sticky
                    ? "bg-white shadow-md backdrop-blur-sm !bg-opacity-90"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <Link to="/" className="block" onClick={closeNavbar}>
                            <img
                                src="/logo/logo-bar-colored.png"
                                alt="logo"
                                className="h-12 w-auto dark:hidden"
                            />
                            <img
                                src="/logo/logo-bar-colored.png"
                                alt="logo"
                                className="hidden h-12 w-auto dark:block"
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex lg:items-center">
                        <ul className="flex space-x-8">
                            {Object.entries(pathConstants)
                                .filter(([, value]) => value.navbar)
                                .sort(
                                    (a, b) =>
                                        (a[1].priority ?? 0) -
                                        (b[1].priority ?? 0)
                                )
                                .map(([key], index) => {
                                    const menuItem =
                                        pathConstants[key as keyof RouteType];

                                    return (
                                        <li
                                            key={index}
                                            className="relative group"
                                        >
                                            {menuItem.path ? (
                                                <Link
                                                    to={menuItem.path}
                                                    className={`inline-flex py-2 font-medium transition-colors duration-200 ${
                                                        location.pathname ===
                                                        menuItem.path
                                                            ? "text-primary border-b-2 border-primary"
                                                            : "text-gray-700 hover:text-primary"
                                                    }`}
                                                >
                                                    {menuItem.text}
                                                </Link>
                                            ) : (
                                                <div className="relative">
                                                    <button
                                                        onClick={() =>
                                                            handleSubmenu(index)
                                                        }
                                                        className="flex items-center font-medium text-gray-700 hover:text-primary"
                                                    >
                                                        {menuItem.text}
                                                    </button>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                        </ul>
                    </nav>

                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isAuthenticated ? (
                            <button
                                className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
                                onClick={() => {
                                    logout();
                                    navigate("/entrar");
                                }}
                            >
                                Sair
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/entrar"
                                    className="font-medium text-gray-700 hover:text-primary"
                                >
                                    Entrar
                                </Link>
                                <Link
                                    to="/registrar"
                                    className="rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
                                >
                                    Registrar
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        onClick={navbarToggleHandler}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none lg:hidden"
                        aria-expanded={navbarOpen}
                    >
                        <FontAwesomeIcon
                            className="text-primary"
                            icon={faBars}
                        />
                    </button>
                </div>
            </div>

            <div
                className={` bg-white fixed top-0 right-0 z-50 h-screen w-[280px] p-6 shadow-xl transition-transform duration-300 ease-in-out lg:hidden  ${
                    navbarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end w-full">
                    <button
                        onClick={navbarToggleHandler}
                        className="text-primary"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <nav>
                    <ul className="space-y-4">
                        {Object.entries(pathConstants)
                            .filter(([, value]) => value.navbar)
                            .sort(
                                (a, b) =>
                                    (a[1].priority ?? 0) - (b[1].priority ?? 0)
                            )
                            .map(([key], index) => {
                                const menuItem =
                                    pathConstants[key as keyof RouteType];

                                return (
                                    <li key={index}>
                                        {menuItem.path ? (
                                            <Link
                                                to={menuItem.path}
                                                className={`block text-base font-medium ${
                                                    location.pathname ===
                                                    menuItem.path
                                                        ? "text-primary"
                                                        : "text-gray-700 hover:text-primary"
                                                }`}
                                                onClick={closeNavbar}
                                            >
                                                {menuItem.text}
                                            </Link>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleSubmenu(index)
                                                    }
                                                    className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-700 hover:text-primary"
                                                >
                                                    {menuItem.text}
                                                </button>
                                            </>
                                        )}
                                    </li>
                                );
                            })}
                    </ul>
                </nav>

                <div className="mt-4 space-y-4">
                    {isAuthenticated ? (
                        <button
                            className="w-full rounded-lg bg-primary py-2.5 text-center font-medium text-white transition-all duration-200 hover:bg-primary/90"
                            onClick={() => {
                                logout();
                                navigate("/entrar");
                                closeNavbar();
                            }}
                        >
                            Sair
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/entrar"
                                className="block w-full rounded-lg border border-gray-300 py-2.5 text-center font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50"
                                onClick={closeNavbar}
                            >
                                Entrar
                            </Link>
                            <Link
                                to="/registrar"
                                className="block w-full rounded-lg bg-primary py-2.5 text-center font-medium text-white transition-all duration-200 hover:bg-primary/90"
                                onClick={closeNavbar}
                            >
                                Registrar
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
