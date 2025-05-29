import React, { useState } from "react";
import { Divider, Steps } from "antd";
import WordForm from "./components/PalavraFormulario";
import MeaningForm from "./components/SignificadoFormulario";
import AttachmentForm from "./components/AnexoFormulario";

const AdicionarPalavraPage: React.FC = () => {
    const [currentWordId, setCurrentWordId] = useState<number | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = (wordId?: number) => {
        if (currentStep === 0 && wordId) {
            setCurrentWordId(wordId);
            setCurrentStep(currentStep + 1);
        }

        setCurrentStep(currentStep + 1);
    };

    const steps = [
        {
            title: "Cadastrar Palavra",
            description: "Informações básicas",
            children: <WordForm onSuccess={handleNextStep} />,
        },
        {
            title: "Adicionar Significado",
            description: "Definições e contextos",
            children: (
                <MeaningForm
                    wordId={currentWordId}
                    onSuccess={handleNextStep}
                />
            ),
        },
        {
            title: "Anexar Arquivos",
            description: "Imagens, áudios, etc.",
            children: (
                <AttachmentForm
                    wordId={currentWordId}
                    onSuccess={handleNextStep}
                />
            ),
        },
    ];

    return (
        <div className=" flex flex-col items-center justify-center mt-10 lg:mt-16">
            <div className="flex flex-col gap-4 py-8 px-4 md:px-8 max-w-7xl mx-auto">
                <div>
                    <div className="mt-5">
                        <Steps
                            current={currentStep}
                            items={steps}
                            direction="horizontal"
                        />
                    </div>
                </div>

                <Divider />

                <div className="space-y-8">{steps[currentStep].children}</div>
            </div>
        </div>
    );
};

export default AdicionarPalavraPage;
