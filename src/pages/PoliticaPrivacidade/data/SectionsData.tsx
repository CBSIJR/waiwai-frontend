import { Typography } from "antd"
import { ContactInfo, DataTable, DefinitionItem, PrincipleItem, RightItem } from "../components/Sections"

const { Paragraph, Text } = Typography

export const SectionsData = {
  definicoes: {
    title: "1. Definições",
    content: (
      <>
        <Paragraph>Para melhor compreensão deste documento, nesta Política de Privacidade, consideram-se:</Paragraph>

        <div className="space-y-6">
          <DefinitionItem term="Agentes de tratamento" definition="O controlador e o operador." />
          <DefinitionItem
            term="Anonimização"
            definition="Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo."
          />
          <DefinitionItem
            term="Autoridade Nacional"
            definition="Órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento desta Lei em todo o território nacional."
          />
          <DefinitionItem
            term="Banco de Dados"
            definition="Conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico."
          />
          <DefinitionItem
            term="Consentimento"
            definition="Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada."
          />
          <DefinitionItem
            term="Controlador"
            definition="Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais."
          />
          <DefinitionItem
            term="Dado Pessoal"
            definition="Informação relacionada a uma pessoa natural identificada ou identificável."
          />
          <DefinitionItem
            term="Dado Pessoal Sensível"
            definition="Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural."
          />
          <DefinitionItem
            term="Titular"
            definition="Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento."
          />
          <DefinitionItem
            term="Tratamento"
            definition="Toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração."
          />
        </div>
      </>
    ),
  },

  "base-legal": {
    title: "2. Base Legal para Tratamento de Dados Pessoais",
    content: (
      <>
        <Paragraph>
          Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal nº 12.965 de 23 de abril de 2014
          (Marco Civil da Internet) e com a Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de
          Dados Pessoais).
        </Paragraph>
        <Paragraph>
          O site se compromete a cumprir as normas previstas na Lei Geral de Proteção de Dados Pessoais (LGPD) e a
          respeitar os princípios dispostos no Art. 6º de tal norma:
        </Paragraph>

        <ul className="ml-6 space-y-2">
          <PrincipleItem
            number="I"
            title="Finalidade"
            description="realização do tratamento para propósitos legítimos, específicos, explícitos e informados ao titular, sem possibilidade de tratamento posterior de forma incompatível com essas finalidades;"
          />
          <PrincipleItem
            number="II"
            title="Adequação"
            description="compatibilidade do tratamento com as finalidades informadas ao titular, de acordo com o contexto do tratamento;"
          />
          <PrincipleItem
            number="III"
            title="Necessidade"
            description="limitação do tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades do tratamento de dados;"
          />
          <PrincipleItem
            number="IV"
            title="Livre acesso"
            description="garantia, aos titulares, de consulta facilitada e gratuita sobre a forma e a duração do tratamento, bem como sobre a integralidade de seus dados pessoais;"
          />
          <PrincipleItem
            number="V"
            title="Qualidade dos dados"
            description="garantia, aos titulares, de exatidão, clareza, relevância e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu tratamento;"
          />
          <PrincipleItem
            number="VI"
            title="Transparência"
            description="garantia, aos titulares, de informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os respectivos agentes de tratamento;"
          />
          <PrincipleItem
            number="VII"
            title="Segurança"
            description="utilização de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão;"
          />
          <PrincipleItem
            number="VIII"
            title="Prevenção"
            description="adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais;"
          />
          <PrincipleItem
            number="IX"
            title="Não discriminação"
            description="impossibilidade de realização do tratamento para fins discriminatórios ilícitos ou abusivos;"
          />
          <PrincipleItem
            number="X"
            title="Responsabilização e prestação de contas"
            description="demonstração, pelo agente, da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de dados pessoais e, inclusive, da eficácia dessas medidas."
          />
        </ul>
      </>
    ),
  },

  controlador: {
    title: "3. Controlador",
    content: (
      <>
        <Paragraph>
          <Text strong>
            A quem competem as decisões referentes ao tratamento de dados pessoais realizado no serviço Dicionário Wai
            Wai?
          </Text>
        </Paragraph>
        <Paragraph>
          A Lei Geral de Proteção de Dados Pessoais define como controlador, em seu Art. 5º, inciso VI, a pessoa natural
          ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados
          pessoais.
        </Paragraph>
        <Paragraph>
          Para o serviço Dicionário Wai Wai, as decisões referentes ao tratamento de dados pessoais são de
          responsabilidade do <Text strong>Grupo de Pesquisa Pawana da Universidade Federal do Oeste do Pará</Text>.
        </Paragraph>
        <ContactInfo address="Rua Vera Paz, s/n, Salé, Santarém" email="dicionariowaiwai@ufopa.edu.br" />
      </>
    ),
  },

  operador: {
    title: "4. Operador",
    content: (
      <>
        <Paragraph>
          <Text strong>Quem realiza o tratamento de dados (Operador)?</Text>
        </Paragraph>
        <Paragraph>
          A Lei Geral de Proteção de Dados Pessoais define como operador, em seu Art. 5º, inciso VII, a pessoa natural
          ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.
        </Paragraph>
        <Paragraph>
          Para o serviço Dicionário Wai Wai, quem realiza o tratamento de dados pessoais em nome do controlador é:
        </Paragraph>
        <ContactInfo
          name="Grupo de Pesquisa Pawana"
          address="Rua Vera Paz, s/n, Salé, Santarém"
          email="dicionariowaiwai@ufopa.edu.br"
        />
      </>
    ),
  },

  encarregado: {
    title: "5. Encarregado",
    content: (
      <>
        <Paragraph>
          <Text strong>
            Quem é o responsável por atuar como canal de comunicação entre o controlador, os titulares dos dados e a
            Autoridade Nacional de Proteção de Dados (Encarregado)?
          </Text>
        </Paragraph>
        <Paragraph>
          Para o serviço Dicionário Wai Wai, o responsável por atuar como canal de comunicação é o{" "}
          <Text strong>Grupo de Pesquisa Pawana</Text>.
        </Paragraph>
        <Paragraph>
          O usuário poderá entrar em contato por meio do e-mail <Text strong>dicionariowaiwai@ufopa.edu.br</Text>, para
          sanar quaisquer dúvidas sobre esta Política de Privacidade ou para obter mais informações sobre o tratamento
          dos dados realizado com fundamento na LGPD.
        </Paragraph>
      </>
    ),
  },

  direitos: {
    title: "6. Direitos do Titular de Dados Pessoais",
    content: (
      <>
        <Paragraph>
          <Text strong>Quais são os direitos do titular de dados pessoais?</Text>
        </Paragraph>
        <Paragraph>
          O titular de dados pessoais possui os seguintes direitos, conferidos pela Lei Geral de Proteção de Dados
          Pessoais (LGPD):
        </Paragraph>

        <div className="space-y-4">
          <RightItem
            title="Direito de confirmação e acesso (Art. 18, incisos I e II)"
            description="É o direito do titular de dados de obter do serviço a confirmação de que os dados pessoais que lhe digam respeito são ou não objeto de tratamento e, se for esse o caso, o direito de acessar os seus dados pessoais."
          />
          <RightItem
            title="Direito de retificação (Art. 18, inciso III)"
            description="É o direito de solicitar a correção de dados incompletos, inexatos ou desatualizados."
          />
          <RightItem
            title="Direito à limitação do tratamento dos dados (Art. 18, inciso IV)"
            description="É o direito do titular de dados de limitar o tratamento de seus dados pessoais, podendo exigir a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD."
          />
          <RightItem
            title="Direito de portabilidade dos dados (Art. 18, inciso V)"
            description="É o direito do titular de dados de realizar a portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa."
          />
          <RightItem
            title="Direito de não ser submetido a decisões automatizadas (Art. 20)"
            description="O titular dos dados tem direito a solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses."
          />
        </div>
      </>
    ),
  },

  "dados-tratados": {
    title: "7. Quais Dados são Tratados",
    content: (
      <>
        <Paragraph>
          A utilização de determinadas funcionalidades do Serviço pelo titular de dados pessoais dependerá do tratamento
          dos seguintes dados pessoais:
        </Paragraph>

        <ul className="ml-6 space-y-2">
          <li>Nome completo</li>
          <li>Nome social</li>
          <li>Endereço de e-mail</li>
          <li>Registro de acesso</li>
        </ul>
      </>
    ),
  },

  "como-coletados": {
    title: "8. Como os Dados são Coletados",
    content: (
      <>
        <Paragraph>A forma como os seus dados pessoais são coletados é indicada abaixo:</Paragraph>
        <DataTable
          headers={["Dados Tratados", "Forma de Coleta dos Dados"]}
          rows={[
            ["Nome completo", "Informado pelo usuário"],
            ["Nome social", "Informado pelo usuário (opcional)"],
            ["Endereço de e-mail", "Informado pelo usuário"],
            ["Registro de acesso", "Obtido ao utilizar o serviço"],
          ]}
        />
      </>
    ),
  },

  tratamento: {
    title: "9. Qual o Tratamento Realizado e para Qual Finalidade",
    content: (
      <>
        <DataTable
          headers={["Dado", "Tratamento", "Finalidade"]}
          rows={[
            ["Nome completo", "Acesso / Armazenamento", "Identificação do usuário"],
            ["Nome social", "Acesso / Armazenamento", "Identificação do usuário"],
            ["Endereço de e-mail", "Acesso / Armazenamento", "Melhorar e personalizar a experiência do usuário"],
            ["Registro de acesso", "Acesso / Armazenamento", "Identificação do usuário dentro do serviço"],
          ]}
        />
      </>
    ),
  },

  seguranca: {
    title: "10. Segurança dos Dados",
    content: (
      <>
        <Paragraph>
          O serviço Dicionário Wai Wai se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os
          dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou
          difusão de tais dados.
        </Paragraph>
        <Paragraph>
          Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os
          custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos para os
          direitos e liberdades do usuário.
        </Paragraph>
        <Paragraph>
          O serviço utiliza criptografia para que os dados sejam transmitidos de forma segura e confidencial, de maneira
          que a transmissão dos dados entre o servidor e o usuário, e em retroalimentação, ocorra de maneira totalmente
          cifrada ou encriptada.
        </Paragraph>
        <Paragraph>
          O serviço Dicionário Wai Wai se compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra algum
          tipo de violação da segurança de seus dados pessoais que possa lhe causar um alto risco para seus direitos e
          liberdades pessoais.
        </Paragraph>
      </>
    ),
  },

  cookies: {
    title: "11. Cookies",
    content: (
      <>
        <Paragraph>
          Cookies são pequenos arquivos de texto enviados pelo site ao computador do usuário e que nele ficam
          armazenados, com informações relacionadas à navegação do site.
        </Paragraph>
        <Paragraph>
          Por meio dos cookies, pequenas quantidades de informação são armazenadas pelo navegador do usuário para que o
          servidor do serviço possa lê-las posteriormente. Podem ser armazenados, por exemplo, dados sobre o dispositivo
          utilizado pelo usuário, bem como seu local e horário de acesso ao site.
        </Paragraph>
        <Paragraph>
          É importante ressaltar que nem todo cookie contém dados pessoais do usuário, já que determinados tipos de
          cookies podem ser utilizados somente para que o serviço funcione corretamente.
        </Paragraph>
        <Paragraph>
          As informações eventualmente armazenadas em cookies também são consideradas dados pessoais. Todas as regras
          previstas nesta Política de Privacidade também são aplicáveis aos referidos cookies.
        </Paragraph>
      </>
    ),
  },

  "tratamento-posterior": {
    title: "12. Tratamento Posterior dos Dados para Outras Finalidades",
    content: (
      <>
        <Paragraph>
          Informações sobre os dados pessoais descritos no item 7, dentre outros, podem ser utilizados para melhoria
          contínua dos serviços e aprimoramento da experiência do usuário no âmbito do Dicionário Wai Wai.
        </Paragraph>
        <Paragraph>
          Caso o titular de dados pessoais do Dicionário Wai Wai opte por excluir os seus dados, eles serão
          anonimizados. Os dados anonimizados poderão ser utilizados futuramente para geração de estatísticas, de forma
          a melhorar os procedimentos do serviço do Dicionário Wai Wai.
        </Paragraph>
        <Paragraph>
          Também podem ser utilizados para fins de pesquisa por órgãos especializados no assunto. Podem, igualmente, ser
          utilizados de maneira agregada para divulgação de informações através de meios de comunicação, e em
          publicações científicas e educacionais.
        </Paragraph>
      </>
    ),
  },

  mudancas: {
    title: "13. Mudanças na Política de Privacidade",
    content: (
      <>
        <Paragraph>
          A presente versão 001 desta Política de Privacidade foi atualizada pela última vez em:{" "}
          <Text strong>22/05/2024</Text>.
        </Paragraph>
        <Paragraph>
          O editor se reserva o direito de modificar, a qualquer momento, no site as presentes normas, especialmente
          para adaptá-las às evoluções do serviço Dicionário Wai Wai, seja pela disponibilização de novas
          funcionalidades, seja pela supressão ou modificação daquelas já existentes.
        </Paragraph>
        <Paragraph>
          Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão
          pela qual se convida o usuário a consultar periodicamente esta seção.
        </Paragraph>
      </>
    ),
  },
}
