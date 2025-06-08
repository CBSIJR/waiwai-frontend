import { PlayStoreGetInOn } from "@/components/Icons";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Application: React.FC = () => (
  <Section id="aplicativo" className="text-white relative overflow-hidden">
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tradução, conhecimento e interculturalidade
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-6">
              Venha conhecer e aprender palavras, termos e conceitos da língua indígena Wai Wai. O aplicativo foi pensado para facilitar a comunicação do aluno indígena no estudo de assuntos técnicos de sua área de estudo, e na preparação de material de aula pelo professor.
            </h2>
            <div className="flex justify-center md:justify-start">
              <PlayStoreGetInOn />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/logo/logo-white.png"
              alt="Logo"
              className="w-2/3 sm:w-1/2 md:w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Application;
