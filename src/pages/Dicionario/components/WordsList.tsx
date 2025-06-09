import { Button, Empty, Input, Pagination, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useGetWordsListQuery } from "../api/Queries";
import WordItem from "./WordItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const { Search } = Input;

const WordsList: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const [searchParams, setSearchParams] = useState({
        q: "",
        page: 1,
        page_size: 10,
    });

    const [searchValue, setSearchValue] = useState("");

    const { data, refetch, isLoading, isError, error } =
        useGetWordsListQuery(searchParams);

    const handlePageChange = (page: number, pageSize: number) => {
        setSearchParams((prev) => ({
            ...prev,
            page,
            page_size: pageSize,
        }));
    };

    const handleSearch = useCallback((value: string) => {
        setSearchParams((prev) => ({
            ...prev,
            q: value,
            page: 1,
        }));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue !== searchParams.q) {
                handleSearch(searchValue);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchValue, searchParams.q, handleSearch]);

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-6 max-w-xl mx-auto text-center rounded-xl border border-red-100 bg-red-50 shadow-sm">
                <h3 className="text-2xl font-semibold text-red-600 mb-3">
                    Erro ao carregar palavras
                </h3>
                <p className="text-base text-red-700 mb-6 max-w-xs">
                    {error instanceof Error
                        ? error.message
                        : "Ocorreu um erro desconhecido!"}
                </p>
                <Button
                    onClick={() => refetch()}
                    type="primary"
                    danger
                    className="px-6 py-2 text-white rounded-md shadow-md hover:brightness-90 transition"
                >
                    Tentar novamente
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
                <Search
                    placeholder="Digite para buscar uma palavra..."
                    allowClear
                    size="large"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onSearch={handleSearch}
                    className="w-full sm:max-w-md rounded-lg shadow-sm border border-stroke focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition"
                    enterButton
                />
                {isAuthenticated && (
                    <Button
                        size="large"
                        type="primary"
                        onClick={() =>
                            navigate("/dicionario/adicionar-palavra")
                        }
                        className="bg-primary text-white hover:bg-primary-dark transition w-full sm:w-auto rounded-lg shadow-md px-6"
                    >
                        + Adicionar palavra
                    </Button>
                )}
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <Spin size="large" />
                </div>
            ) : data?.data?.length ? (
                <>
                    <div className="mb-6 text-sm text-body-color/80">
                        <span className="font-semibold text-dark">
                            {data.data.length}
                        </span>{" "}
                        de{" "}
                        <span className="font-semibold text-dark">
                            {data.total_items}
                        </span>{" "}
                        palavras encontradas
                    </div>

                    {/* Lista */}
                    <div className="grid">
                        {data.data.map((word) => (
                            <WordItem key={word.id} word={word} />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Pagination
                            current={searchParams.page}
                            pageSize={searchParams.page_size}
                            total={data.total_items}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                            className="rounded-lg"
                        />
                    </div>
                </>
            ) : (
                <div className="py-24 flex justify-center items-center">
                    <Empty
                        description={
                            <span className="text-body-color/70 text-lg font-medium">
                                Nenhuma palavra encontrada!
                            </span>
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default WordsList;
