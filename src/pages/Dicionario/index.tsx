import { useWords } from "@/hooks/dicionario";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dicionario = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const { data, isLoading, isError } = useWords(currentPage, pageSize);
    const words: WordProps[] = Array.isArray(data) ? data : data?.results || [];
    const hasMore = words.length === pageSize;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, pageSize]);

    const handleSearch = (e: any) => {
        e.preventDefault();
        const term = e.target.searchInput.value;
        setSearchTerm(term);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setCurrentPage(1);
    };

    const goToNextPage = () => {
        if (hasMore) setCurrentPage((prev) => prev + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxButtons = 5;
        const half = Math.floor(maxButtons / 2);

        const start = Math.max(1, currentPage - half);
        const end = hasMore ? currentPage + half : currentPage;

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const columns = [
        { header: "Palavra" },
        { header: "Significados" },
        { header: "Fonética" },
        { header: "Categoria" },
    ];

    if (isError)
        return (
            <div className="flex justify-center py-10 text-red-500">
                Erro ao carregar os dados.
            </div>
        );

    return (
        <div className="flex-1 mt-32 mx-20 items-center">
            <div>
                <div className="flex justify-center gap-2">
                    <form
                        onSubmit={handleSearch}
                        className="flex w-full max-w-md"
                    >
                        <input
                            type="text"
                            name="searchInput"
                            placeholder="Buscar palavra..."
                            defaultValue={searchTerm}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-r-lg"
                        >
                            Buscar
                        </button>
                    </form>
                    {isAuthenticated && (
                        <button className="px-4 py-2 bg-primary text-white rounded-lg">
                            Adicionar palavra
                        </button>
                    )}
                </div>

                {searchTerm && (
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <div className="text-sm text-gray-600">
                            Filtros ativos:
                            <span className="ml-2 px-2 py-1 bg-blue-100 rounded-full">{`Termo: ${searchTerm}`}</span>
                        </div>
                        <button
                            onClick={clearFilters}
                            className="text-xs text-primary"
                        >
                            Limpar filtros
                        </button>
                    </div>
                )}

                <div className="flex justify-end mb-4"></div>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.header}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {words.length > 0 ? (
                            words.map((word) => (
                                <tr
                                    key={word.id}
                                    onClick={() =>
                                        navigate(`/dicionario/${word.id}`)
                                    }
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {word.word}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        <ul className="list-disc list-inside">
                                            {word.meanings.map((m, idx) => (
                                                <li
                                                    key={m.id || idx}
                                                    className="mb-1"
                                                >
                                                    {m.meaning_pt} (
                                                    {m.meaning_ww})
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {word.phonemic || "-"}
                                    </td>
                                    <div className="flex">
                                        {word.categories.map((item) => (
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {item.category}
                                            </td>
                                        ))}
                                    </div>
                                </tr>
                            ))
                        ) : isLoading ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-4 text-center text-sm text-gray-500"
                                >
                                    <div className="flex items-center justify-center h-screen">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-4 text-center text-sm text-gray-500"
                                >
                                    Nenhuma palavra encontrada
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {currentPage > 1 || hasMore ? (
                <div className="flex justify-center gap-4 mt-6">
                    <nav className="flex items-center">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-l-md border ${
                                currentPage === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            Anterior
                        </button>

                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`px-3 py-1 border-t border-b ${
                                    currentPage === page
                                        ? "bg-primary text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={goToNextPage}
                            disabled={!hasMore}
                            className={`px-3 py-1 rounded-r-md border ${
                                !hasMore
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            Próxima
                        </button>
                    </nav>
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="pageSize"
                            className="text-sm text-gray-600"
                        >
                            Itens por página:
                        </label>
                        <select
                            id="pageSize"
                            value={pageSize}
                            onChange={(e) =>
                                setPageSize(Number(e.target.value))
                            }
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>
            ) : null}

            {!hasMore && (
                <div className="text-center text-sm text-gray-400 mt-2">
                    Fim da lista de resultados
                </div>
            )}

            <div className="text-center mt-4 text-sm text-gray-600">
                Página {currentPage} • Exibindo {words.length}{" "}
                {words.length === 1 ? "item" : "itens"}
            </div>
        </div>
    );
};

export default Dicionario;
