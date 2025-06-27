"use client"

import type React from "react"
import { Typography } from "antd"

const { Title, Paragraph, Text } = Typography

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "mb-12" }) => {
  return (
    <section id={id} className={className}>
      <Title level={2}>{title}</Title>
      {children}
    </section>
  )
}

// Componente para definições (usado na seção 1)
export const DefinitionItem: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <div className="mb-4">
    <Text strong>{term}:</Text>
    <Paragraph>{definition}</Paragraph>
  </div>
)

// Componente para lista de princípios (usado na seção 2)
export const PrincipleItem: React.FC<{ number: string; title: string; description: string }> = ({
  number,
  title,
  description,
}) => (
  <li>
    <Text strong>
      {number}. {title}:
    </Text>{" "}
    {description}
  </li>
)

// Componente para direitos do titular (usado na seção 6)
export const RightItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="mb-4">
    <Text strong>• {title}:</Text>
    <Paragraph>{description}</Paragraph>
  </div>
)

// Componente para informações de contato (usado nas seções 3, 4, 5)
export const ContactInfo: React.FC<{ name?: string; address: string; email: string }> = ({ name, address, email }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    {name && (
      <>
        <Text strong>Nome:</Text> {name}
        <br />
      </>
    )}
    <Text strong>Endereço:</Text> {address}
    <br />
    <Text strong>E-mail:</Text> {email}
  </div>
)

// Componente para tabelas (usado nas seções 8 e 9)
export const DataTable: React.FC<{
  headers: string[]
  rows: string[][]
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-50">
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 p-3 text-left font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-300 p-3">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Section
