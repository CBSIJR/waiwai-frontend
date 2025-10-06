import { CardProps } from "antd";

export interface CardDetails<T> extends CardProps {
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

export interface CardListProps<T> {
    data: T[];
    cardDetails: (item: T) => CardDetails<T>;
    pageSize?: number;
    total: number;
    currentPage: number;
    onPageChange: (page: number, pageSize: number) => void;
    isError?: boolean;
    error?: Error | null;
    refetch?: () => void;
    loading?: boolean;
    emptyText?: string;
    search?: {
        searchValue?: string;
        setSearch: React.Dispatch<React.SetStateAction<QueryParam>>;
    };
    onCreate?: () => void;
}
