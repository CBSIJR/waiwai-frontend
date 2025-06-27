"use client"

// import { Cookie } from 'lucide-react';
import type React from "react"
import { Menu } from "antd"
import {
  FileTextOutlined,
  CheckOutlined,
  UserOutlined,
  DatabaseOutlined,
  LockOutlined,
  SyncOutlined,
  EditOutlined,
} from "@ant-design/icons"

import CookieIcon from "@/components/Icons/CookieIcon";



const Sidebar: React.FC = () => {
  const menuItems = [
    {
      key: "definicoes",
      icon: <FileTextOutlined />,
      label: "1. Definições",
    },
    {
      key: "base-legal",
      icon: <CheckOutlined />,
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
      icon: <CheckOutlined />,
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
  ]

  const handleMenuClick = (key: string) => {
    const element = document.getElementById(key)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="sticky top-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Navegação</h3>
      <Menu
        mode="vertical"
        items={menuItems}
        onClick={({ key }) => handleMenuClick(key)}
        className="border-none bg-transparent"
        style={{
          fontSize: "14px",
        }}
      />
    </div>
  )
}

export default Sidebar
