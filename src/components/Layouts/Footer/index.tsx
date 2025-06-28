import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterLayout: React.FC = () => {
  return (
    <Footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex md:flex-row-reverse md:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-md font-medium md:mb-0 dark:text-gray-400 gap-4 md:gap-6">
            <li>
              <Link to="/" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/politica-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a
                href="http://www.ufopa.edu.br/ufopa/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Site UFOPA
              </a>
            </li>
            <li>
              <a href="mailto:dicionariowaiwai@ufopa.edu.br" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 md:mx-auto dark:text-gray-400 lg:my-8" />
        <span className="block text-md text-gray-500 md:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.ufopa.edu.br/oriximina/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            UFOPA - CAMPUS ORIXIMINÁ
          </a>
          . Todos os direitos reservados.
        </span>
    </Footer>
  );
};

export default FooterLayout;
