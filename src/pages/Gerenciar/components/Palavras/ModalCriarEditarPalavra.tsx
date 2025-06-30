import { Modal, Steps } from "antd";
import { useState } from "react";
import {
    FileTextOutlined,
    BookOutlined,
    PaperClipOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { ModalCriarEditarPalavraProps } from "../../Gerenciar.types";
import WordForm from "./PalavraFormulario";
import MeaningForm from "./SignificadoFormulario";
import AttachmentForm from "./AnexoFormulario";

const ModalCriarEditarPalavra = (props: ModalCriarEditarPalavraProps) => {
    const [currentWordId, setCurrentWordId] = useState<number | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = (wordId?: number) => {
        if (currentStep === 0 && wordId) {
            setCurrentWordId(wordId);
        }
        setCurrentStep((prev) => prev + 1);
    };

    const steps = [
        {
            title: "Cadastrar",
            description: "Informações básicas da palavra",
            icon: <FileTextOutlined />,
            content: <WordForm onSuccess={handleNextStep} />,
        },
        {
            title: "Adicionar Significado",
            description: "Definições e contextos de uso",
            icon: <BookOutlined />,
            content: (
                <MeaningForm
                    wordId={currentWordId}
                    onSuccess={handleNextStep}
                />
            ),
        },
        {
            title: "Anexar Arquivos",
            description: "Imagens, áudios e documentos",
            icon: <PaperClipOutlined />,
            content: <AttachmentForm wordId={currentWordId} />,
        },
    ];
    return (
        <Modal {...props} styles={{
            content: {
                padding: 0,
            }
        }} centered closeIcon={<CloseOutlined className="text-white"/>} footer={null}>
            <div className="bg-primary rounded-t-md p-4 sm:px-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Adicionar Nova Palavra
                </h1>
                <p className="text-white text-sm sm:text-base">
                    Complete as etapas para cadastrar uma palavra no dicionário
                </p>
            </div>

            <div className="p-6 sm:px-3">
                <Steps
                    current={currentStep}
                    direction="vertical"
                    items={steps.map((step) => ({
                        title: step.title,
                        description: step.description,
                    }))}
                    size="small"
                    className="mb-4"
                />

                <div className="space-y-6">{steps[currentStep].content}</div>
            </div>
        </Modal>
    );
};

export default ModalCriarEditarPalavra;
