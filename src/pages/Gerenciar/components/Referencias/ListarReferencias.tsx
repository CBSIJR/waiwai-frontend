import { CardList } from "@/components/List/CardList";
import { CardDetails } from "@/components/List/CardList/CardList.type";
import { Reference } from "@/pages/PalavraDetalhe/PalavraDetalhe.types";
import { Typography } from "antd";
import { useState } from "react";

const RefenceListManage: React.FC = () => {
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const mock = {
        data: {
            data: [
                {
                    id: 1,
                    reference: "https://www.google.com",
                    year: 2022,
                    authors: "Victor Hugo",
                    url: null,
                },
                {
                    id: 2,
                    reference: "https://www.google.com",
                    year: 2022,
                    authors: "Victor Hugo",
                    url: null,
                },
                {
                    id: 3,
                    reference: "https://www.google.com",
                    year: 2022,
                    authors: "Victor Hugo",
                    url: null,
                },
            ],
            total_items: 2,
        },
        isLoading: false,
        error: null,
        isError: false,
        refetch: () => {},
    };

    const { data, isLoading, error, isError, refetch } = mock;

    const cardDetails = (item: Reference): CardDetails<Reference> => ({
        title: item.authors,
        onEdit: () => alert("edit"),
        onDelete: () => alert("delete"),
        children: (
            <div>
                {item.reference && (
                    <div className="flex flex-col gap-2">
                        <Typography.Link href={item.reference} target="_blank">
                            {item.reference}
                        </Typography.Link>
                        {item.year && (
                            <Typography.Text className="text-sm sm:text-base text-body-color italic break-items">
                                year: {item.year}
                            </Typography.Text>
                        )}
                    </div>
                )}
            </div>
        ),
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

export default RefenceListManage;
