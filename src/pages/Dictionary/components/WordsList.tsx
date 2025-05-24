import React, { useState, useEffect } from "react";
import WordItem from "./WordItem";
import { useWordsList } from "@/hooks/useDictionary";
import { Empty, Input, Pagination, Spin } from "antd";

const { Search } = Input;

const WordsList: React.FC = () => {
    const [searchParams, setSearchParams] = useState({
        q: "",
        page: 1,
        page_size: 10,
    });

    const [searchValue, setSearchValue] = useState("");

    const { data, refetch, isLoading, isError, error } = useWordsList(searchParams);

    console.log(data?.data.length);

    const handlePageChange = (page: number, pageSize: number) => {
        setSearchParams((prev) => ({
            ...prev,
            page,
            page_size: pageSize,
        }));
    };

    const handleSearch = (value: string) => {
        setSearchParams((prev) => ({
            ...prev,
            q: value,
            page: 1,
        }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue !== searchParams.q) {
                handleSearch(searchValue);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchValue]);

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-light rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">
                    Erro ao carregar palavras
                </h3>
                <p className="text-body-color">
                    {error instanceof Error
                        ? error.message
                        : "Ocorreu um erro desconhecido"}
                </p>
                <button
                    onClick={() => refetch()}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
                >
                    Tentar novamente
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-6 h-full w-full">
            <div className="mb-6">
                <Search
                    placeholder="Buscar palavras..."
                    allowClear
                    size="large"
                    value={searchValue}
                    onChange={(e: any) => setSearchValue(e.target.value)}
                    onSearch={handleSearch}
                    className="max-w-xl"
                />
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-screen py-12">
                    <Spin size="large" />
                </div>
            ) : data?.data?.length ? (
                <>
                    <div className="mb-6">
                        <p className="text-body-color">
                            Mostrando {data.data.length} de {data.total_items}{" "}
                            palavras
                        </p>
                    </div>

                    <div className="space-y-4">
                        {data.data.map((word) => (
                            <WordItem key={word.id} word={word} />
                        ))}
                    </div>

                    <div className="mt-8 flex w-full justify-center">
                        <Pagination
                            current={searchParams.page}
                            pageSize={searchParams.page_size}
                            total={data.total_items}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                        />
                    </div>
                </>
            ) : (
                <Empty
                    description="Nenhuma palavra encontrada"
                    className="w-full py-12 h-screen"
                />
            )}
        </div>
    );
};

export default WordsList;
