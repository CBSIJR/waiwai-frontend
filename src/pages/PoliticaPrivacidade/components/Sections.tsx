import { Typography, Divider } from "antd";
import Definitions from "./Definitions";
import Principles from "./Principles";

import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Sections: React.FC = () => {
    return (
        <>
            <section id="definicoes" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>1. Definições</Title>
                    <Paragraph>
                        Para melhor compreensão deste documento, nesta Política
                        de Privacidade, consideram-se:
                    </Paragraph>

                    <div className="space-y-6">
                        <Definitions />
                    </div>
                </div>
            </section>
            <section id="base-legal" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>
                        2. Base Legal para Tratamento de Dados Pessoais
                    </Title>
                    <Paragraph>
                        Esta Política de Privacidade foi elaborada em
                        conformidade com a Lei Federal nº 12.965 de 23 de abril
                        de 2014 (Marco Civil da Internet) e com a Lei Federal nº
                        13.709, de 14 de agosto de 2018 (Lei Geral de Proteção
                        de Dados Pessoais).
                    </Paragraph>
                    <Paragraph>
                        O site se compromete a cumprir as normas previstas na
                        LGPD e a respeitar os princípios dispostos no Art. 6º:
                    </Paragraph>
                    <ul className="ml-6 space-y-2">
                        <Principles />
                    </ul>
                </div>
            </section>
            <section id="controlador" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>3. Controlador</Title>
                    <Paragraph>
                        A quem competem as decisões referentes ao tratamento de
                        dados pessoais realizado no serviço{" "}
                        <Text strong>Dicionário Wai Wai</Text>?
                    </Paragraph>
                    <Paragraph>
                        A Lei Geral de Proteção de Dados Pessoais define como
                        controlador, em seu Art. 5º, inciso VI, a pessoa natural
                        ou jurídica, de direito público ou privado, a quem
                        competem as decisões referentes ao tratamento de dados
                        pessoais.
                    </Paragraph>
                    <Paragraph>
                        Para o serviço <Text strong>Dicionário Wai Wai</Text>,
                        as decisões referentes ao tratamento de dados pessoais
                        são de responsabilidade do{" "}
                        <Text strong>
                            Grupo de Pesquisa Pawana da Universidade Federal do
                            Oeste do Pará
                        </Text>
                        .
                    </Paragraph>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <Typography.Text strong>Endereço:</Typography.Text> Rua
                        Vera Paz, s/n, Salé, Santarém
                        <br />
                        <Typography.Text strong>E-mail:</Typography.Text>{" "}
                        dicionariowaiwai@ufopa.edu.br
                    </div>
                </div>
            </section>

            <section id="operador" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>4. Operador</Title>
                    <Paragraph>
                        <Text strong>
                            Quem realiza o tratamento de dados (Operador)?
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        A Lei Geral de Proteção de Dados Pessoais define como
                        operador, em seu Art. 5º, inciso VII, a pessoa natural
                        ou jurídica, de direito público ou privado, que realiza
                        o tratamento de dados pessoais em nome do controlador.
                    </Paragraph>
                    <Paragraph>
                        Para o serviço <Text strong>Dicionário Wai Wai</Text>,
                        quem realiza o tratamento de dados pessoais em nome do
                        controlador é:
                    </Paragraph>
                    <br />
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <Typography.Text strong>Nome:</Typography.Text> Grupo de
                        Pesquisa Pawana
                        <br />
                        <Typography.Text strong>Endereço:</Typography.Text> Rua
                        Vera Paz, s/n, Salé, Santarém
                        <br />
                        <Typography.Text strong>E-mail:</Typography.Text>{" "}
                        dicionariowaiwai@ufopa.edu.br
                    </div>
                </div>
            </section>
            <section id="encarregado" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>5. Encarregado</Title>

                    <Paragraph>
                        Quem é o responsável por atuar como canal de comunicação
                        entre o controlador, os titulares dos dados e a
                        Autoridade Nacional de Proteção de Dados (Encarregado)?
                    </Paragraph>
                    <Paragraph>
                        A Lei Geral de Proteção de Dados Pessoais define como
                        encarregado, em seu Art. 5º, inciso VIII, a pessoa
                        indicada pelo controlador e operador para atuar como
                        canal de comunicação entre o controlador, os titulares
                        dos dados e a Autoridade Nacional de Proteção de Dados
                        (ANPD).
                    </Paragraph>
                    <Paragraph>
                        Para o serviço <Text strong>Dicionário Wai Wai</Text>, o
                        responsável por atuar como canal de comunicação entre o
                        controlador, os titulares dos dados e a Autoridade
                        Nacional de Proteção de Dados é o(a) encarregado(a){" "}
                        <Text strong>Grupo de Pesquisa Pawana</Text>.
                    </Paragraph>
                    <Paragraph>
                        O usuário poderá entrar em contato por meio do e-mail{" "}
                        <a href="mailto:dicionariowaiwai@ufopa.edu.br">
                            <Text strong>dicionariowaiwai@ufopa.edu.br</Text>
                        </a>
                        , para sanar quaisquer dúvidas sobre esta Política de
                        Privacidade ou para obter mais informações sobre o
                        tratamento dos dados realizado com fundamento na LGPD.
                    </Paragraph>
                </div>
            </section>
            <section id="direitos" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>
                        6. Direitos do Titular de Dados Pessoais
                    </Title>
                    <Paragraph>
                        <Text strong>
                            Quais são os direitos do titular de dados pessoais?
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        O titular de dados pessoais possui os seguintes
                        direitos, conferidos pela Lei Geral de Proteção de Dados
                        Pessoais (LGPD):
                    </Paragraph>
                    <div className="ml-6">
                        <div className="mb-4">
                            <Typography.Text strong>
                                • Direito de confirmação e acesso (Art. 18,
                                incisos I e II):
                            </Typography.Text>
                            <Typography.Paragraph>
                                É o direito do titular de dados de obter do
                                serviço a confirmação de que os dados pessoais
                                que lhe digam respeito são ou não objeto de
                                tratamento e, se for esse o caso, o direito de
                                acessar os seus dados pessoais.
                            </Typography.Paragraph>
                        </div>
                        <div className="mb-4">
                            <Typography.Text strong>
                                • Direito de retificação (Art. 18, inciso III):
                            </Typography.Text>
                            <Typography.Paragraph>
                                É o direito de solicitar a correção de dados
                                incompletos, inexatos ou desatualizados.
                            </Typography.Paragraph>
                        </div>
                        <div className="mb-4">
                            <Typography.Text strong>
                                • Direito à limitação do tratamento dos dados
                                (Art. 18, inciso IV):
                            </Typography.Text>
                            <Typography.Paragraph>
                                É o direito do titular de dados de limitar o
                                tratamento de seus dados pessoais, podendo
                                exigir a eliminação de dados desnecessários,
                                excessivos ou tratados em desconformidade com o
                                disposto na LGPD.
                            </Typography.Paragraph>
                        </div>
                        <div className="mb-4">
                            <Typography.Text strong>
                                • Direito de portabilidade dos dados (Art. 18,
                                inciso V):
                            </Typography.Text>
                            <Typography.Paragraph>
                                É o direito do titular de dados de realizar a
                                portabilidade dos dados a outro fornecedor de
                                serviço ou produto, mediante requisição
                                expressa.
                            </Typography.Paragraph>
                        </div>
                        <div className="mb-4">
                            <Typography.Text strong>
                                • Direito de não ser submetido a decisões
                                automatizadas (Art. 20):
                            </Typography.Text>
                            <Typography.Paragraph>
                                O titular dos dados tem direito a solicitar a
                                revisão de decisões tomadas unicamente com base
                                em tratamento automatizado de dados pessoais que
                                afetem seus interesses.
                            </Typography.Paragraph>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dados-tratados" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>7. Quais Dados são Tratados</Title>
                    <Paragraph>
                        A utilização de determinadas funcionalidades do Serviço
                        pelo titular de dados pessoais dependerá do tratamento
                        dos seguintes dados pessoais:
                    </Paragraph>
                    <ul className="ml-6 space-y-2">
                        <li>• Nome completo</li>
                        <li>• Nome social</li>
                        <li>• Endereço de e-mail</li>
                        <li>• Registro de acesso</li>
                    </ul>
                </div>
            </section>
            <section id="como-coletados" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>8. Como os Dados são Coletados</Title>

                    <Paragraph>
                        A forma como os seus dados pessoais são coletados é
                        indicada abaixo:
                    </Paragraph>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 mt-4">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border border-gray-300 p-3 text-left font-semibold">
                                        Dados Tratados
                                    </th>
                                    <th className="border border-gray-300 p-3 text-left font-semibold">
                                        Forma de Coleta dos Dados
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-3">
                                        Nome completo
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <Text strong>
                                            Informado pelo usuário
                                        </Text>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-3">
                                        Nome social
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <Text strong>
                                            Informado pelo usuário (opcional)
                                        </Text>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-3">
                                        Endereço de e-mail
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <Text strong>
                                            Informado pelo usuário
                                        </Text>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-3">
                                        Registro de acesso
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <Text strong>
                                            Obtido ao utilizar o serviço
                                        </Text>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="tratamento" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>
                        9. Qual o Tratamento Realizado e para Qual Finalidade
                    </Title>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 p-3 text-left font-semibold">
                                    Dado
                                </th>
                                <th className="border border-gray-300 p-3 text-left font-semibold">
                                    Tratamento
                                </th>
                                <th className="border border-gray-300 p-3 text-left font-semibold">
                                    Finalidade
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-3">
                                    Nome completo
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Acesso / Armazenamento</Text>
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Identificação do usuário</Text>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">
                                    Nome social
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Acesso / Armazenamento</Text>
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Identificação do usuário</Text>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">
                                    Endereço de e-mail
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Acesso / Armazenamento</Text>
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>
                                        Personalização da experiência
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">
                                    Registro de acesso
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Acesso / Armazenamento</Text>
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <Text strong>Identificação no serviço</Text>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="seguranca" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>10. Segurança dos Dados</Title>
                    <Paragraph>
                        O serviço <Text strong>Dicionário Wai Wai</Text> se
                        compromete a aplicar as medidas técnicas e organizativas
                        aptas a proteger os dados pessoais de acessos não
                        autorizados e de situações de destruição, perda,
                        alteração, comunicação ou difusão de tais dados.
                    </Paragraph>
                    <Paragraph>
                        Para a garantia da segurança, serão adotadas soluções
                        que levem em consideração: as técnicas adequadas; os
                        custos de aplicação; a natureza, o âmbito, o contexto e
                        as finalidades do tratamento; e os riscos para os
                        direitos e liberdades do usuário.
                    </Paragraph>
                    <Paragraph>
                        O serviço utiliza criptografia para que os dados sejam
                        transmitidos de forma segura e confidencial, de maneira
                        que a transmissão dos dados entre o servidor e o
                        usuário, e em retroalimentação, ocorra de maneira
                        totalmente cifrada ou encriptada.
                    </Paragraph>
                    <Paragraph>
                        O serviço <Text strong>Dicionário Wai Wai</Text> se
                        compromete, ainda, a comunicar o usuário em prazo
                        adequado caso ocorra algum tipo de violação da segurança
                        de seus dados pessoais que possa lhe causar um alto
                        risco para seus direitos e liberdades pessoais.
                    </Paragraph>
                </div>
            </section>

            <section id="cookies" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>11. Cookies</Title>
                    <Paragraph>
                        Cookies são pequenos arquivos de texto enviados pelo
                        site ao computador do usuário e que nele ficam
                        armazenados, com informações relacionadas à navegação do
                        site.
                    </Paragraph>
                    <Paragraph>
                        Por meio dos cookies, pequenas quantidades de informação
                        são armazenadas pelo navegador do usuário para que o
                        servidor do serviço possa lê-las posteriormente. Podem
                        ser armazenados, por exemplo, dados sobre o dispositivo
                        utilizado pelo usuário, bem como seu local e horário de
                        acesso ao site.
                    </Paragraph>
                    <Paragraph>
                        É importante ressaltar que nem todo cookie contém dados
                        pessoais do usuário, já que determinados tipos de
                        cookies podem ser utilizados somente para que o serviço
                        funcione corretamente.
                    </Paragraph>
                    <Paragraph>
                        As informações eventualmente armazenadas em cookies
                        também são consideradas dados pessoais. Todas as regras
                        previstas nesta Política de Privacidade também são
                        aplicáveis aos referidos cookies.
                    </Paragraph>
                </div>
            </section>

            <section id="tratamento-posterior" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>12. Tratamento Posterior dos Dados</Title>
                    <Paragraph>
                        Informações sobre{" "}
                        <a href="#dados-tratados">
                            <Text strong>
                                os dados pessoais descritos no item 7
                            </Text>
                        </a>
                        , dentre outros, podem ser utilizados para melhoria
                        contínua dos serviços e aprimoramento da experiência do
                        usuário no âmbito do{" "}
                        <Text strong>Dicionário Wai Wai</Text>.
                    </Paragraph>
                    <Paragraph>
                        Caso o titular de dados pessoais do{" "}
                        <Text strong>Dicionário Wai Wai</Text> opte por excluir
                        os seus dados, eles serão anonimizados. Os dados
                        anonimizados poderão ser utilizados futuramente para
                        geração de estatísticas, de forma a melhorar os
                        procedimentos do serviço do{" "}
                        <Text strong>Dicionário Wai Wai</Text>.
                    </Paragraph>
                    <Paragraph>
                        Também podem ser utilizados para fins de pesquisa por
                        órgãos especializados no assunto. Podem, igualmente, ser
                        utilizados de maneira agregada para divulgação de
                        informações através de meios de comunicação, e em
                        publicações científicas e educacionais.
                    </Paragraph>
                </div>
            </section>

            <section id="mudancas" className="mb-12">
                <div className="pt-20 -mt-20">
                    <Title level={2}>
                        13. Mudanças na Política de Privacidade
                    </Title>
                    <Paragraph>
                        A presente versão <Text strong>0.0.1</Text> desta
                        Política de Privacidade foi atualizada pela última vez
                        em: <Text strong>22/05/2024</Text>.
                    </Paragraph>
                    <Paragraph>
                        O editor se reserva o direito de modificar, a qualquer
                        momento, no site as presentes normas, especialmente para
                        adaptá-las às evoluções do serviço Dicionário Wai Wai,
                        seja pela disponibilização de novas funcionalidades,
                        seja pela supressão ou modificação daquelas já
                        existentes.
                    </Paragraph>
                    <Paragraph>
                        Esta Política de Privacidade poderá ser atualizada em
                        decorrência de eventual atualização normativa, razão
                        pela qual se convida o usuário a consultar
                        periodicamente esta seção.
                    </Paragraph>
                </div>
            </section>
            <Divider />
        </>
    );
};

export default Sections;
