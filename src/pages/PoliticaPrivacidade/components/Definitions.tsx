import { Typography } from "antd";

const Definitions: React.FC = () => (
    <div className="space-y-4">
        <div className="mb-4">
            <Typography.Text strong>{"Agentes de tratamento"}:</Typography.Text>
            <Typography.Paragraph>
                {"O controlador e o operador."}
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Anonimização"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Autoridade Nacional"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento desta Lei em todo o território nacional."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Banco de Dados"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Consentimento"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Controlador"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Dado Pessoal"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Informação relacionada a uma pessoa natural identificada ou identificável."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Dado Pessoal Sensível"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Titular"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento."
                }
            </Typography.Paragraph>
        </div>
        <div className="mb-4">
            <Typography.Text strong>{"Tratamento"}:</Typography.Text>
            <Typography.Paragraph>
                {
                    "Toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração."
                }
            </Typography.Paragraph>
        </div>
    </div>
);

export default Definitions;
