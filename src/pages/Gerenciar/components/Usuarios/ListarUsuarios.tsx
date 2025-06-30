import { CardList } from "@/components/List/CardList";
import { CardDetails } from "@/components/List/CardList/CardList.type";
import { Profile } from "@/types/index";
import { useState } from "react";

const UsersListManage: React.FC = () => {
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const mock = {
        data: {
            data: [
                {
                    name: "Victor Hugo",
                    email: "victor@hugo.com",
                    permission: "ADMIN",
                },
                {
                    name: "Junior Santos",
                    email: "junior@santos.com",
                    permission: "USER",
                },
                {
                    name: "Layane de Oliveira",
                    email: "layane@oliveira.com",
                    permission: "GUEST",
                },
            ] as Profile[],
            total_items: 3,
        },
        isLoading: false,
        error: null,
        isError: false,
        refetch: () => {},
    };

    const { data, isLoading, error, isError, refetch } = mock;

    const cardDetails = (item: Profile): CardDetails<Profile> => ({
        title: item.name,
        onEdit: () => alert("edit"),
        onDelete: () => alert("delete"),
    });

    return (
        <div className="w-full">
            <CardList
                data={data?.data || []}
                error={error}
                isError={isError}
                refetch={refetch}
                total={data?.total_items || 0}
                currentPage={searchParams.page || 1}
                pageSize={searchParams.page_size}
                loading={isLoading}
                emptyText="Nenhuma referência encontrada"
                onPageChange={(page, pageSize) =>
                    setSearchParams({ page, page_size: pageSize })
                }
                search={{
                    searchValue: searchParams.q,
                    setSearch: setSearchParams,
                }}
                cardDetails={cardDetails}
            />
        </div>
    );
};

export default UsersListManage;
