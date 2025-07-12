import { CardList } from "@/components/List/CardList";
import { CardDetails } from "@/components/List/CardList/CardList.type";
import { useState } from "react";
import { useGetCategoriesListQuery } from "../../api/Queries";
import { Category } from "../../Gerenciar.types";

const CategoryListManage: React.FC = () => {
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const { data, refetch, isLoading, isError, error } =
        useGetCategoriesListQuery(searchParams);

    const cardDetails = (item: Category): CardDetails<Category> => ({
        title: item.category,
        onDelete: () => alert("Funcionalidade não implementada"),
        onEdit: () => alert("Funcionalidade não implementada"),
    });

    return (
        <>
            <CardList
                total={data?.total_items || 0}
                currentPage={searchParams.page || 1}
                pageSize={searchParams.page_size}
                loading={isLoading}
                emptyText="Nenhuma categoria encontrada"
                onPageChange={(page, pageSize) =>
                    setSearchParams({ page, page_size: pageSize })
                }
                search={{
                    searchValue: searchParams.q,
                    setSearch: setSearchParams,
                }}
                data={data?.data || []}
                isError={isError}
                error={error}
                refetch={refetch}
                cardDetails={cardDetails}
            />
        </>
    );
};

export default CategoryListManage;
