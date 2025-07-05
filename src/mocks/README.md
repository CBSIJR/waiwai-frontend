# 📁 mocks

Este diretório contém dados mockados usados para testes ou desenvolvimento local.

- Todos os dados seguem tipos definidos manualmente em `/mocks/types`.
- Não há dependências externas para geração de dados.

## Estrutura

- `types/`: Tipos TypeScript usados nos mocks.
- `*.mock.ts`: Arquivos com os dados mockados.
- `index.ts`: Exporta todos os mocks de forma centralizada.

## Exemplo
Caso de uso de dados mockados:
```ts
import { mockUsers, mockProducts } from '@/mocks';

console.log(mockUsers[0].name); // João da Silva
```