import { Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full text-center px-6">

                <div className="mb-8">
                    <Title level={1} className="text-8xl font-bold text-red-600 mb-0 leading-none">
                        404
                    </Title>
                    <Title level={2} className="text-gray-800 mb-4">
                        Página não encontrada
                    </Title>
                    <Paragraph className="text-gray-600 text-lg mb-6">
                        Ops! A página que você está procurando não existe ou foi movida para outro local.
                    </Paragraph>
                </div>

                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                        <SearchOutlined className="text-6xl text-gray-400" />
                    </div>
                </div>

            </div>
        </div>
    );
};


export default NotFoundPage;
