import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import FooterLayout from "./Footer";
import HeaderLayout from "./Header";

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout className="min-h-screen">
            <HeaderLayout />
            <Content className="flex flex-col mt-16">
                <Outlet />
            </Content>
            <FooterLayout />
        </Layout>
    );
};

export default MainLayout;
