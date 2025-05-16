// src/pages/PalavraDetalhe.tsx
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAttachments, useGetWordID } from "@/hooks/dicionario";

const PalavraDetalhe = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetWordID(id || "");
    const { data: attachments, isLoading: isLoadingAttachments } =
        useAttachments(id || "");

    const handleGoBack = () => {
        navigate(-1);
    };

    if (isLoading || isLoadingAttachments) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <div className=" p-6 rounded-lg shadow-md max-w-md w-full">
                    <h2 className="text-xl font-bold text-primary mb-2">
                        Erro ao carregar
                    </h2>
                    <p className="text-gray-700">
                        Não foi possível carregar os detalhes desta palavra.
                    </p>
                    <button
                        className="mt-4 text-primary "
                        onClick={handleGoBack}
                    >
                        Voltar
                    </button>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <h2 className="text-xl font-bold text-yellow-700 mb-2">
                    Palavra não encontrada
                </h2>
                <p className="text-gray-700">
                    Nenhuma palavra encontrada com este identificador.
                </p>
                <button
                    className="flex items-center mb-6 text-primary"
                    onClick={handleGoBack}
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col mx-2 lg:mx-32 mt-32 ">
            <button
                onClick={handleGoBack}
                className="flex items-center mb-6 text-primary"
            >
                <span>Voltar</span>
            </button>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-primary px-6 py-8 text-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {data.word}
                            </h1>

                            {data.phonemic && (
                                <p className="mt-2 text-lg text-blue-100">
                                    /{data.phonemic}/
                                </p>
                            )}
                        </div>

                        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                            {data.categories.map((category) => (
                                <span
                                    key={category.id}
                                    className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm"
                                >
                                    {category.category}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    {data.meanings.length > 0 ? (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                                Significados
                            </h2>

                            <ul className="space-y-4">
                                {data.meanings.map((meaning) => (
                                    <li
                                        key={meaning.id}
                                        className="bg-gray-50 rounded-lg p-4"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                                            {/* Significado Wai Wai */}
                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium text-gray-500 mb-1">
                                                    Wai Wai
                                                </h3>
                                                <p className="text-lg font-medium">
                                                    {meaning.meaning_ww}
                                                </p>
                                                {meaning.comment_ww && (
                                                    <p className="mt-2 text-sm text-gray-600">
                                                        {meaning.comment_ww}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="hidden md:block w-px bg-gray-200 self-stretch"></div>

                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium text-gray-500 mb-1">
                                                    Português
                                                </h3>
                                                <p className="text-lg font-medium">
                                                    {meaning.meaning_pt}
                                                </p>
                                                {meaning.comment_pt && (
                                                    <p className="mt-2 text-sm text-gray-600">
                                                        {meaning.comment_pt}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">
                            Nenhum significado cadastrado para esta palavra.
                        </p>
                    )}

                    <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
                        <p>
                            Cadastrado em:{" "}
                            {new Date(data.created_at).toLocaleDateString(
                                "pt-BR"
                            )}
                        </p>
                        <p>
                            Última atualização:{" "}
                            {new Date(data.updated_at).toLocaleDateString(
                                "pt-BR"
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PalavraDetalhe;
