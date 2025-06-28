import Header from "./components/Header";
import Sections from "./components/Sections";
import { FloatButton } from "antd";

const PoliticaPrivacidadePage: React.FC = () => {
    return (
        <div className="flex p-6 gap-8 max-w-screen-xl mx-auto pt-6 md:pt-6">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <Header />
                <Sections />
                <FloatButton.BackTop visibilityHeight={200} />
            </div>
        </div>
    );
};

export default PoliticaPrivacidadePage;
