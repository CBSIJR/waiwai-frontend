// src/pages/PalavraDetalhe.tsx
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PalavraDetalhe = () => {
    /* const { id } = useParams<{ id: string }>();
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
    } */

   /*  if (!data) {
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
    } */

    return (
        <div className="flex flex-col mx-2 lg:mx-32 mt-32 ">
           
        </div>
    );
};

export default PalavraDetalhe;
