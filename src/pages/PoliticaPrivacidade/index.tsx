import type React from "react";
import { Typography, Divider, Drawer, Button, FloatButton } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Section from "@/pages/PoliticaPrivacidade/components/Sections";
import Sidebar from "@/pages/PoliticaPrivacidade/components/SideBar";
import { SectionsData } from "@/pages/PoliticaPrivacidade/data/SectionsData";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text } = Typography;

const PoliticaPrivacidade: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar se é mobile no carregamento e no redimensionamento
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Efeito para evitar scroll automático
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botão do menu mobile (só aparece em telas pequenas) */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      )}

      {/* Drawer (menu lateral) para mobile */}
      <Drawer
        title="Navegação"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={250}
      >
        <Sidebar ></Sidebar>
      </Drawer>

      {/* Main Content */}
      <div className="flex p-6 gap-8 max-w-screen-xl mx-auto pt-16 md:pt-6">
        {/* Sidebar (só aparece em telas maiores) */}
        {!isMobile && (
          <aside className="w-1/4 sticky top-6 h-fit">
            <Sidebar />
          </aside>
        )}

        {/* Body Sections*/}
        <main className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <Title
              level={1}
              className="text-red-600 text-center mb-2"
              id="topo"
            >
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

          <FloatButton.BackTop visibilityHeight={200} />

        </main>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;