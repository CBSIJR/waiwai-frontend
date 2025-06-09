import React, { useState } from "react";
import { Steps } from "antd";
import {
    FileTextOutlined,
    BookOutlined,
    PaperClipOutlined,
} from "@ant-design/icons";
import WordForm from "./components/PalavraFormulario";
import MeaningForm from "./components/SignificadoFormulario";
import AttachmentForm from "./components/AnexoFormulario";

const AdicionarPalavraPage: React.FC = () => {
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
            title: "Cadastrar Palavra",
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
        <div className="bg-white my-4 mx-auto w-full max-w-3xl rounded-lg shadow-sm px-4 md:px-0">
            <div className="bg-primary rounded-t-lg px-6 py-8 sm:px-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Adicionar Nova Palavra
                </h1>
                <p className="text-blue-100 text-sm sm:text-base">
                    Complete as etapas para cadastrar uma palavra no dicionário
                </p>
            </div>

            <div className="p-6 sm:p-8">
                <Steps
                    current={currentStep}
                    items={steps.map((step) => ({
                        title: step.title,
                        description: step.description,
                        icon: step.icon,
                    }))}
                    size="default"
                    className="mb-8"
                />

                <div className="space-y-6">{steps[currentStep].content}</div>
            </div>
        </div>
    );
};

export default AdicionarPalavraPage;
