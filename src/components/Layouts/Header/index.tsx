import { pathConstants } from "@/constraints";
import { useAuth } from "@/hooks/useAuth";
import { Button, Drawer, Layout, Menu, MenuProps } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid} from 'antd';


const { useBreakpoint } = Grid;

const { Header } = Layout;

const HeaderLayout: React.FC = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [sticky, setSticky] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleStickyNavbar = () => {
        setSticky(window.scrollY >= 80);
    };

    const generateAntdMenuItems = (
        data: typeof pathConstants
    ): MenuProps["items"] => {
        const items: MenuProps["items"] = Object.entries(data)
            .filter(([, value]) => value.navbar)
            .sort(([, a], [, b]) => (a.priority ?? 0) - (b.priority ?? 0))
            .map(([, value]) => ({
                key: value.path,
                onClick: () => {
                    navigate(value.path);
                    setDrawerOpen(false);
                },
                label: value.text,
            }));

        return items;
    };

    const menuItems = generateAntdMenuItems(pathConstants);


  const screens = useBreakpoint();
  const isMobile = !screens.md

  useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
        return () => {
            window.removeEventListener("scroll", handleStickyNavbar);
        };
    }, []);

    return (
        <Header
            className={`fixed top-0 w-full z-10 transition-all duration-300 bg-white ${
                sticky ? "shadow-md !bg-opacity-90 backdrop-blur-sm" : ""
            }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="block">
                    <img
                        src="/logo/logo-bar-colored.png"
                        alt="logo"
                        className="h-10 w-auto dark:hidden"
                    />
                    <img
                        src="/logo/logo-bar-colored.png"
                        alt="logo"
                        className="hidden h-10 w-auto dark:block"
                    />
                </Link>

                {!useIsMobile() && (
                    <div className="w-64 items-center">
                        <Menu
                            mode="horizontal"
                            className="bg-transparent"
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                        />
                    </div>
                )}

                <div className="md:hidden">
                    <Button
                        type="text"
                        icon={<MenuOutlined className="text-primary" />}
                        onClick={() => setDrawerOpen(true)}
                    />
                </div>

                {isAuthenticated ? (
                    <Button className="hidden md:flex" onClick={logout}>
                        Sair
                    </Button>
                ) : (
                    <div className="hidden md:flex gap-2">
                        <Button
                            type="primary"
                            onClick={() => navigate("/entrar")}
                        >
                            Entrar
                        </Button>
                        <Button onClick={() => navigate("/registrar")}>
                            Registrar
                        </Button>
                    </div>
                )}

                <Drawer
                    width={200}
                    title={
                        <div className="flex items-center justify-between">
                            <span>Menu</span>
                            <Button
                                type="text"
                                icon={<CloseOutlined />}
                                onClick={() => setDrawerOpen(false)}
                            />
                        </div>
                    }
                    placement="right"
                    closable={false}
                    onClose={() => setDrawerOpen(false)}
                    open={drawerOpen}
                >
                    <div className="flex flex-col gap-4">
                        <Menu
                            mode="vertical"
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                        />
                        {isAuthenticated ? (
                            <Button className="flex w-full" onClick={logout}>
                                Sair
                            </Button>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        navigate("/entrar");
                                        setDrawerOpen(false);
                                    }}
                                >
                                    Entrar
                                </Button>
                                <Button
                                    onClick={() => {
                                        navigate("/registrar");
                                        setDrawerOpen(false);
                                    }}
                                >
                                    Registrar
                                </Button>
                            </div>
                        )}
                    </div>
                </Drawer>
            </div>
        </Header>
    );
};

export default HeaderLayout;
