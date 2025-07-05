import { User } from './types/users';

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        isAdmin: false
    },
    {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        isAdmin: true
    },
    {
        id: 3,
        name: 'Carlos Souza',
        email: 'carlos@example.com',
        isAdmin: false
    }
];
