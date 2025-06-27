"use client"

import type React from "react"
import { Typography, Divider } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons"
import Sidebar from "./components/sideBar"
import { Link } from "react-router-dom"

const { Title, Paragraph, Text } = Typography

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/registrar" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                <ArrowLeftOutlined />
                <span>Voltar ao cadastro</span>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">
                  W
                </div>
                <span className="text-red-600 font-semibold">DICIONÁRIO WAIWAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-6 gap-8 max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <aside className="w-1/4 hidden md:block">
          <Sidebar />
        </aside>

        {/* Conteúdo principal */}
        <main className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <Title level={1} className="text-red-600 text-center mb-2">
              Política de Privacidade do Dicionário Wai Wai
            </Title>
            <Paragraph type="secondary" className="text-center mb-8">
              <Text strong>Versão 00.1 - Atualizado em 22 de maio de 2024</Text>
            </Paragraph>
            <Paragraph className="text-center mb-8">
              Termo baseado no Guia de Elaboração de Termo de Uso e Política de Privacidade do Governo Digital
              disponível em{" "}
              <a
                href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias-e-modelos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias-e-modelos
              </a>
            </Paragraph>

            <Divider />

            <section id="definicoes" className="mb-12">
              <Title level={2}>1. Definições</Title>
              <Paragraph>
                Para melhor compreensão deste documento, nesta Política de Privacidade, consideram-se:
              </Paragraph>

              <div className="space-y-6">
                <div>
                  <Text strong>Agentes de tratamento:</Text>
                  <Paragraph>O controlador and o operador.</Paragraph>
                </div>

                <div>
                  <Text strong>Anonimização:</Text>
                  <Paragraph>
                    Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um
                    dado perde a possibilidade de associação, direta ou indireta, a um indivíduo.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Autoridade Nacional:</Text>
                  <Paragraph>
                    Órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento desta
                    Lei em todo o território nacional.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Banco de Dados:</Text>
                  <Paragraph>
                    Conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte
                    eletrônico ou físico.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Consentimento:</Text>
                  <Paragraph>
                    Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus
                    dados pessoais para uma finalidade determinada.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Controlador:</Text>
                  <Paragraph>
                    Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao
                    tratamento de dados pessoais.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Dado Pessoal:</Text>
                  <Paragraph>Informação relacionada a uma pessoa natural identificada ou identificável.</Paragraph>
                </div>

                <div>
                  <Text strong>Dado Pessoal Sensível:</Text>
                  <Paragraph>
                    Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a
                    sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à
                    vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Titular:</Text>
                  <Paragraph>
                    Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>Tratamento:</Text>
                  <Paragraph>
                    Toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção,
                    classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento,
                    arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação,
                    comunicação, transferência, difusão ou extração.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section id="base-legal" className="mb-12">
              <Title level={2}>2. Base Legal para Tratamento de Dados Pessoais</Title>
              <Paragraph>
                Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal nº 12.965 de 23 de abril
                de 2014 (Marco Civil da Internet) e com a Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de
                Proteção de Dados Pessoais).
              </Paragraph>
              <Paragraph>
                O site se compromete a cumprir as normas previstas na Lei Geral de Proteção de Dados Pessoais (LGPD) e
                a respeitar os princípios dispostos no Art. 6º de tal norma:
              </Paragraph>

              <ul className="ml-6 space-y-2">
                <li>
                  <Text strong>I. Finalidade:</Text> realização do tratamento para propósitos legítimos, específicos,
                  explícitos e informados ao titular, sem possibilidade de tratamento posterior de forma incompatível
                  com essas finalidades;
                </li>
                <li>
                  <Text strong>II. Adequação:</Text> compatibilidade do tratamento com as finalidades informadas ao
                  titular, de acordo com o contexto do tratamento;
                </li>
                <li>
                  <Text strong>III. Necessidade:</Text> limitação do tratamento ao mínimo necessário para a realização
                  de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação
                  às finalidades do tratamento de dados;
                </li>
                <li>
                  <Text strong>IV. Livre acesso:</Text> garantia, aos titulares, de consulta facilitada e gratuita sobre
                  a forma e a duração do tratamento, bem como sobre a integralidade de seus dados pessoais;
                </li>
                <li>
                  <Text strong>V. Qualidade dos dados:</Text> garantia, aos titulares, de exatidão, clareza, relevância
                  e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu
                  tratamento;
                </li>
                <li>
                  <Text strong>VI. Transparência:</Text> garantia, aos titulares, de informações claras, precisas e
                  facilmente acessíveis sobre a realização do tratamento e os respectivos agentes de tratamento;
                </li>
                <li>
                  <Text strong>VII. Segurança:</Text> utilização de medidas técnicas e administrativas aptas a proteger
                  os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição,
                  perda, alteração, comunicação ou difusão;
                </li>
                <li>
                  <Text strong>VIII. Prevenção:</Text> adoção de medidas para prevenir a ocorrência de danos em virtude
                  do tratamento de dados pessoais;
                </li>
                <li>
                  <Text strong>IX. Não discriminação:</Text> impossibilidade de realização do tratamento para fins
                  discriminatórios ilícitos ou abusivos;
                </li>
                <li>
                  <Text strong>X. Responsabilização e prestação de contas:</Text> demonstração, pelo agente, da adoção
                  de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de
                  dados pessoais e, inclusive, da eficácia dessas medidas.
                </li>
              </ul>
            </section>

            <section id="controlador" className="mb-12">
              <Title level={2}>3. Controlador</Title>
              <Paragraph>
                <Text strong>
                  A quem competem as decisões referentes ao tratamento de dados pessoais realizado no serviço Dicionário
                  Wai Wai?
                </Text>
              </Paragraph>
              <Paragraph>
                A Lei Geral de Proteção de Dados Pessoais define como controlador, em seu Art. 5º, inciso VI, a pessoa
                natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento
                de dados pessoais.
              </Paragraph>
              <Paragraph>
                Para o serviço Dicionário Wai Wai, as decisões referentes ao tratamento de dados pessoais são de
                responsabilidade do{" "}
                <Text strong>Grupo de Pesquisa Pawana da Universidade Federal do Oeste do Pará</Text>.
              </Paragraph>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Text strong>Endereço:</Text> Rua Vera Paz, s/n, Salé, Santarém
                <br />
                <Text strong>E-mail:</Text> dicionariowaiwai@ufopa.edu.br
              </div>
            </section>

            <section id="operador" className="mb-12">
              <Title level={2}>4. Operador</Title>
              <Paragraph>
                <Text strong>Quem realiza o tratamento de dados (Operador)?</Text>
              </Paragraph>
              <Paragraph>
                A Lei Geral de Proteção de Dados Pessoais define como operador, em seu Art. 5º, inciso VII, a pessoa
                natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome
                do controlador.
              </Paragraph>
              <Paragraph>
                Para o serviço Dicionário Wai Wai, quem realiza o tratamento de dados pessoais em nome do controlador é:
              </Paragraph>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Text strong>Nome:</Text> Grupo de Pesquisa Pawana
                <br />
                <Text strong>Endereço:</Text> Rua Vera Paz, s/n, Salé, Santarém
                <br />
                <Text strong>E-mail:</Text> dicionariowaiwai@ufopa.edu.br
              </div>
            </section>

            <section id="encarregado" className="mb-12">
              <Title level={2}>5. Encarregado</Title>
              <Paragraph>
                <Text strong>
                  Quem é o responsável por atuar como canal de comunicação entre o controlador, os titulares dos dados e
                  a Autoridade Nacional de Proteção de Dados (Encarregado)?
                </Text>
              </Paragraph>
              <Paragraph>
                Para o serviço Dicionário Wai Wai, o responsável por atuar como canal de comunicação é o{" "}
                <Text strong>Grupo de Pesquisa Pawana</Text>.
              </Paragraph>
              <Paragraph>
                O usuário poderá entrar em contato por meio do e-mail{" "}
                <Text strong>dicionariowaiwai@ufopa.edu.br</Text>, para sanar quaisquer dúvidas sobre esta Política de
                Privacidade ou para obter mais informações sobre o tratamento dos dados realizado com fundamento na
                LGPD.
              </Paragraph>
            </section>

            <section id="direitos" className="mb-12">
              <Title level={2}>6. Direitos do Titular de Dados Pessoais</Title>
              <Paragraph>
                <Text strong>Quais são os direitos do titular de dados pessoais?</Text>
              </Paragraph>
              <Paragraph>
                O titular de dados pessoais possui os seguintes direitos, conferidos pela Lei Geral de Proteção de Dados
                Pessoais (LGPD):
              </Paragraph>

              <div className="space-y-4">
                <div>
                  <Text strong>• Direito de confirmação e acesso (Art. 18, incisos I e II):</Text>
                  <Paragraph>
                    É o direito do titular de dados de obter do serviço a confirmação de que os dados pessoais que lhe
                    digam respeito são ou não objeto de tratamento e, se for esse o caso, o direito de acessar os seus
                    dados pessoais.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>• Direito de retificação (Art. 18, inciso III):</Text>
                  <Paragraph>
                    É o direito de solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>• Direito à limitação do tratamento dos dados (Art. 18, inciso IV):</Text>
                  <Paragraph>
                    É o direito do titular de dados de limitar o tratamento de seus dados pessoais, podendo exigir a
                    eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na
                    LGPD.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>• Direito de portabilidade dos dados (Art. 18, inciso V):</Text>
                  <Paragraph>
                    É o direito do titular de dados de realizar a portabilidade dos dados a outro fornecedor de serviço
                    ou produto, mediante requisição expressa.
                  </Paragraph>
                </div>

                <div>
                  <Text strong>• Direito de não ser submetido a decisões automatizadas (Art. 20):</Text>
                  <Paragraph>
                    O titular dos dados tem direito a solicitar a revisão de decisões tomadas unicamente com base em
                    tratamento automatizado de dados pessoais que afetem seus interesses.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section id="dados-tratados" className="mb-12">
              <Title level={2}>7. Quais Dados são Tratados</Title>
              <Paragraph>
                A utilização de determinadas funcionalidades do Serviço pelo titular de dados pessoais dependerá do
                tratamento dos seguintes dados pessoais:
              </Paragraph>

              <ul className="ml-6 space-y-2">
                <li>Nome completo</li>
                <li>Nome social</li>
                <li>Endereço de e-mail</li>
                <li>Registro de acesso</li>
              </ul>
            </section>

            <section id="como-coletados" className="mb-12">
              <Title level={2}>8. Como os Dados são Coletados</Title>
              <Paragraph>A forma como os seus dados pessoais são coletados é indicada abaixo:</Paragraph>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Dados Tratados</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Forma de Coleta dos Dados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Nome completo</td>
                      <td className="border border-gray-300 p-3">Informado pelo usuário</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Nome social</td>
                      <td className="border border-gray-300 p-3">Informado pelo usuário (opcional)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Endereço de e-mail</td>
                      <td className="border border-gray-300 p-3">Informado pelo usuário</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Registro de acesso</td>
                      <td className="border border-gray-300 p-3">Obtido ao utilizar o serviço</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="tratamento" className="mb-12">
              <Title level={2}>9. Qual o Tratamento Realizado e para Qual Finalidade</Title>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Dado</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Tratamento</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Finalidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Nome completo</td>
                      <td className="border border-gray-300 p-3">Acesso / Armazenamento</td>
                      <td className="border border-gray-300 p-3">Identificação do usuário</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Nome social</td>
                      <td className="border border-gray-300 p-3">Acesso / Armazenamento</td>
                      <td className="border border-gray-300 p-3">Identificação do usuário</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Endereço de e-mail</td>
                      <td className="border border-gray-300 p-3">Acesso / Armazenamento</td>
                      <td className="border border-gray-300 p-3">
                        Melhorar e personalizar a experiência do usuário
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Registro de acesso</td>
                      <td className="border border-gray-300 p-3">Acesso / Armazenamento</td>
                      <td className="border border-gray-300 p-3">Identificação do usuário dentro do serviço</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="seguranca" className="mb-12">
              <Title level={2}>10. Segurança dos Dados</Title>
              <Paragraph>
                O serviço Dicionário Wai Wai se compromete a aplicar as medidas técnicas e organizativas aptas a
                proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração,
                comunicação ou difusão de tais dados.
              </Paragraph>
              <Paragraph>
                Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas;
                os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos
                para os direitos e liberdades do usuário.
              </Paragraph>
              <Paragraph>
                O serviço utiliza criptografia para que os dados sejam transmitidos de forma segura e confidencial, de
                maneira que a transmissão dos dados entre o servidor e o usuário, e em retroalimentação, ocorra de
                maneira totalmente cifrada ou encriptada.
              </Paragraph>
              <Paragraph>
                O serviço Dicionário Wai Wai se compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra
                algum tipo de violação da segurança de seus dados pessoais que possa lhe causar um alto risco para seus
                direitos e liberdades pessoais.
              </Paragraph>
            </section>

            <section id="cookies" className="mb-12">
              <Title level={2}>11. Cookies</Title>
              <Paragraph>
                Cookies são pequenos arquivos de texto enviados pelo site ao computador do usuário e que nele ficam
                armazenados, com informações relacionadas à navegação do site.
              </Paragraph>
              <Paragraph>
                Por meio dos cookies, pequenas quantidades de informação são armazenadas pelo navegador do usuário para
                que o servidor do serviço possa lê-las posteriormente. Podem ser armazenados, por exemplo, dados sobre o
                dispositivo utilizado pelo usuário, bem como seu local e horário de acesso ao site.
              </Paragraph>
              <Paragraph>
                É importante ressaltar que nem todo cookie contém dados pessoais do usuário, já que determinados tipos
                de cookies podem ser utilizados somente para que o serviço funcione corretamente.
              </Paragraph>
              <Paragraph>
                As informações eventualmente armazenadas em cookies também são consideradas dados pessoais. Todas as
                regras previstas nesta Política de Privacidade também são aplicáveis aos referidos cookies.
              </Paragraph>
            </section>

            <section id="tratamento-posterior" className="mb-12">
              <Title level={2}>12. Tratamento Posterior dos Dados para Outras Finalidades</Title>
              <Paragraph>
                Informações sobre os dados pessoais descritos no item 7, dentre outros, podem ser utilizados para
                melhoria contínua dos serviços e aprimoramento da experiência do usuário no âmbito do Dicionário Wai
                Wai.
              </Paragraph>
              <Paragraph>
                Caso o titular de dados pessoais do Dicionário Wai Wai opte por excluir os seus dados, eles serão
                anonimizados. Os dados anonimizados poderão ser utilizados futuramente para geração de estatísticas, de
                forma a melhorar os procedimentos do serviço do Dicionário Wai Wai.
              </Paragraph>
              <Paragraph>
                Também podem ser utilizados para fins de pesquisa por órgãos especializados no assunto. Podem,
                igualmente, ser utilizados de maneira agregada para divulgação de informações através de meios de
                comunicação, e em publicações científicas e educacionais.
              </Paragraph>
            </section>

            <section id="mudancas" className="mb-12">
              <Title level={2}>13. Mudanças na Política de Privacidade</Title>
              <Paragraph>
                A presente versão 001 desta Política de Privacidade foi atualizada pela última vez em:{" "}
                <Text strong>22/05/2024</Text>.
              </Paragraph>
              <Paragraph>
                O editor se reserva o direito de modificar, a qualquer momento, no site as presentes normas,
                especialmente para adaptá-las às evoluções do serviço Dicionário Wai Wai, seja pela disponibilização de
                novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.
              </Paragraph>
              <Paragraph>
                Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa,
                razão pela qual se convida o usuário a consultar periodicamente esta seção.
              </Paragraph>
            </section>

            <Divider />

            <div className="text-center mt-8">
              <Paragraph type="secondary">
                Para dúvidas sobre esta política, entre em contato: <Text strong>dicionariowaiwai@ufopa.edu.br</Text>
              </Paragraph>
              <Link to="/registrar" className="inline-block mt-4">
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                  Voltar ao Cadastro
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PoliticaPrivacidade
