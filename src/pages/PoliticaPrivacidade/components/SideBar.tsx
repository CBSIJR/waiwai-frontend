import type React from "react";
import { Menu } from "antd";
import {
  FileTextOutlined,
  UserOutlined,
  DatabaseOutlined,
  LockOutlined,
  SyncOutlined,
  EditOutlined,
} from "@ant-design/icons";
import CookieIcon from "@/components/Icons/CookieIcon";
import ShieldCheckIcon from "@/components/Icons/ShieldCheckIcon";

interface SidebarProps {
  onItemClick?: () => void; // Para fechar o drawer no mobile
  className?: string; // Para permitir estilização adicional
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick, className }) => {
  const menuItems = [
    {
      key: "definicoes",
      icon: <FileTextOutlined />,
      label: "1. Definições",
    },
    {
      key: "base-legal",
      icon: <ShieldCheckIcon />,
      label: "2. Base Legal",
    },
    {
      key: "controlador",
      icon: <UserOutlined />,
      label: "3. Controlador",
    },
    {
      key: "operador",
      icon: <DatabaseOutlined />,
      label: "4. Operador",
    },
    {
      key: "encarregado",
      icon: <UserOutlined />,
      label: "5. Encarregado",
    },
    {
      key: "direitos",
      icon: <ShieldCheckIcon />,
      label: "6. Direitos do Titular",
    },
    {
      key: "dados-tratados",
      icon: <DatabaseOutlined />,
      label: "7. Dados Tratados",
    },
    {
      key: "como-coletados",
      icon: <SyncOutlined />,
      label: "8. Coleta de Dados",
    },
    {
      key: "tratamento",
      icon: <EditOutlined />,
      label: "9. Tratamento e Finalidade",
    },
    {
      key: "seguranca",
      icon: <LockOutlined />,
      label: "10. Segurança",
    },
    {
      key: "cookies",
      icon: <CookieIcon />,
      label: "11. Cookies",
    },
    {
      key: "tratamento-posterior",
      icon: <SyncOutlined />,
      label: "12. Tratamento Posterior",
    },
    {
      key: "mudancas",
      icon: <EditOutlined />,
      label: "13. Mudanças na Política",
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    const element = document.getElementById(key);
    if (element) {
      // Calcular offset para compensar o header fixo
      const headerHeight = 80; // altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    // Fechar o drawer no mobile
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className={`${className || ''} sticky top-24 h-fit`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-800 px-4">Navegação</h3>
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleMenuClick}
        className="border-r-0 bg-transparent"
        style={{
          fontSize: "14px",
          border: "none",
        }}
        defaultSelectedKeys={[window.location.hash.substring(1) || "definicoes"]}
      />
    </div>
  );
};

export default Sidebar;