import React, { useState, useCallback } from "react";
import { useGetWordsListQuery } from "../api/Queries";
import { CardList } from "@/components/List/CardList";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { CardDetails } from "@/components/List/CardList/CardList.type";
import { Word } from "../Dicionario.types";

const WordsList: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const { data, isLoading, error, isError, refetch } =
        useGetWordsListQuery(searchParams);

     const cardDetails = (item: Word): CardDetails<Word> => ({
            title: item.word,
            hoverable: true,
            onClick: () => navigate(`/dicionario/${item.id}`),
            children: (
                <div className="flex flex-col gap-2">
                    {item.categories && item.categories.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {item.categories.map((cat, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 text-xs bg-gray-light text-body-color rounded-full"
                                >
                                    {cat.category}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ),
        });

    return (
        <CardList
            data={data?.data || []}
            error={error}
            isError={isError}
            refetch={refetch}
            total={data?.total_items || 0}
            currentPage={searchParams.page || 1}
            pageSize={searchParams.page_size}
            loading={isLoading}
            emptyText="Nenhuma palavra encontrada"
            onPageChange={(page, pageSize) =>
                setSearchParams({ page, page_size: pageSize })
            }
            search={{
                searchValue: searchParams.q,
                setSearch: setSearchParams,
            }}
            cardDetails={cardDetails}
        />
    );
};

export default WordsList;
