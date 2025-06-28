import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const Header: React.FC = () => {
    return (
        <>
            <Title
                level={1}
                className="text-red-600 text-center mb-2"
                id="topo"
            >
                Política de Privacidade do Dicionário Wai Wai
            </Title>

            <Paragraph type="secondary" className="text-center mb-8">
                <Text strong>
                    Versão 0.0.1 - Atualizado em 22 de maio de 2024
                </Text>
            </Paragraph>

            <Divider />
        </>
    );
};

export default Header;
