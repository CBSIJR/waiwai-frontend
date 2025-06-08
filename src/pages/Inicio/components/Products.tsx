import Topic from "@/components/Topic";
import {
  faBook,
  faCode,
  faLightbulb,
  faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products: React.FC = () => (
  <Topic
    idTopic="produtos"
    titleTopic="Principais produções e produtos"
    bgColor=""
  >
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12">
      <li className="flex items-start">
        <div className="mr-4 p-4 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
          <FontAwesomeIcon icon={faLightbulb} size="lg" className="text-slate-400" />
        </div>
        <p className="text-slate-600 text-base leading-relaxed">
          Investigar as especificidades na tradução do Wai Wai para Português e Português para Wai Wai a partir da literatura específica sobre tradução de línguas do tronco karib.
        </p>
      </li>

      <li className="flex items-start">
        <div className="mr-4 p-4 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
          <FontAwesomeIcon icon={faPencilSquare} size="lg" className="text-slate-400" />
        </div>
        <p className="text-slate-600 text-base leading-relaxed">
          Produzir material bilíngue para promover a interculturalidade e conhecimento indígena no ensino básico nas cidades de Santarém e Oriximiná.
        </p>
      </li>

      <li className="flex items-start">
        <div className="mr-4 p-4 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
          <FontAwesomeIcon icon={faBook} size="lg" className="text-slate-400" />
        </div>
        <p className="text-slate-600 text-base leading-relaxed">
          Produzir material bilíngue para disciplinas e/ou temas de interesse aos acadêmicos indígenas da Ufopa.
        </p>
      </li>

      <li className="flex items-start">
        <div className="mr-4 p-4 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
          <FontAwesomeIcon icon={faCode} size="lg" className="text-slate-400" />
        </div>
        <p className="text-slate-600 text-base leading-relaxed">
          Desenvolver tecnologia de produção de dicionário bilíngue.
        </p>
      </li>
    </ul>
  </Topic>
);

export default Products;
