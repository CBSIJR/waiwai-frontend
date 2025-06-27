import type React from "react"
import { Typography, Divider } from "antd"
import { Link } from "react-router-dom"
import Section from "@/pages/PoliticaPrivacidade/components/Sections"
import Sidebar from "@/pages/PoliticaPrivacidade/components/SideBar"
import { SectionsData } from "@/pages/PoliticaPrivacidade/data/SectionsData"

const { Title, Paragraph, Text } = Typography

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="flex p-6 gap-8 max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <aside className="w-1/4 hidden md:block">
          <Sidebar />
          
        </aside>

        {/* Body Sections*/}
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
              <Link to="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias-e-modelos">
                https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/guias-e-modelos
              </Link>
            </Paragraph>

            <Divider />

            {/* Renderizar todas as seções usando o componente Section */}
            {Object.entries(SectionsData).map(([key, section]) => (
              <Section key={key} id={key} title={section.title}>
                {section.content}
              </Section>
            ))}

            <Divider />


          </div>
        </main>
      </div>
    </div>
  )
}

export default PoliticaPrivacidade
