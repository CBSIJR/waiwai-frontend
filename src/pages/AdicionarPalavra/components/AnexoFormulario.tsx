import React, { useState } from "react";
import { Upload, Button, Card, message, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { useNavigate } from "react-router-dom";
import { fnErrorMessage } from "@/utils";
import { useCreateAttachmentMutation } from "../api/Mutations";
import { useLoading } from "@/contexts/LoadingContext";
import { AttachmentFormProps } from "../AdicionarPalavra.types";

const AttachmentForm: React.FC<AttachmentFormProps> = ({ wordId }) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const navigate = useNavigate();
    const mutation = useCreateAttachmentMutation(wordId);
    const { toggleLoading, isLoading } = useLoading();

    const handleUpload = async (file: File) => {
        if (!wordId) {
            message.warning("Cadastre uma palavra primeiro");
            return;
        }

        const timestamp = Date.now();
        const type = file.type.startsWith("image") ? "image" : "audio";
        const extension = file.name.includes(".")
            ? file.name.split(".").pop()
            : "";
        const newFileName = `${type}_${timestamp}.${extension}`;

        const renamedFile = new File([file], newFileName, { type: file.type });
        const formData = new FormData();
        formData.append("file", renamedFile);

        try {
            await mutation.mutateAsync(formData);
        } catch (error) {
            const errorMessage = fnErrorMessage(error);
            message.error(errorMessage);
            throw error;
        }
    };

    const uploadProps: UploadProps = {
        name: "file",
        multiple: true,
        fileList,
        accept: "image/jpeg,image/png,image/webp,audio/wav,audio/mp3,audio/ogg",
        disabled: !wordId,
        beforeUpload: (file) => {
            const isValidSize = file.size / 1024 / 1024 < 10;
            if (!isValidSize) {
                message.error("Arquivo deve ser menor que 10MB");
                return Upload.LIST_IGNORE;
            }
            return false;
        },
        onChange: (info) => setFileList(info.fileList),
        onRemove: (file) =>
            setFileList((prev) => prev.filter((item) => item.uid !== file.uid)),
    };

    const handleManualUpload = async () => {
        if (fileList.length === 0) {
            message.warning("Selecione pelo menos um arquivo");
            return;
        }

        try {
            toggleLoading(true);
            await Promise.all(
                fileList
                    .filter((item) => item.originFileObj)
                    .map((item) => handleUpload(item.originFileObj!))
            );
            message.success("Todos os arquivos foram enviados com sucesso!");
            navigate(`/dicionario/${wordId}`);
        } catch {
            message.error("Erro ao enviar um ou mais arquivos");
        } finally {
            setFileList([]);
            toggleLoading(false);
        }
    };

    return (
        <Card title="3. Anexos" className="w-full" extra={<UploadOutlined />}>
            {!wordId && (
                <Alert
                    message="Cadastre uma palavra primeiro para poder adicionar anexos"
                    type="info"
                    className="mb-4"
                    showIcon
                />
            )}

            <div className="space-y-2">
                <Upload.Dragger {...uploadProps} className="w-full">
                    <p className="ant-upload-drag-icon">
                        <UploadOutlined className="text-4xl text-primary" />
                    </p>
                    <p className="ant-upload-text text-base">
                        Clique ou arraste arquivos para esta área
                    </p>
                    <p className="ant-upload-hint text-sm text-gray-500">
                        Suporte para upload de múltiplos arquivos. Máximo 10MB
                        por arquivo.
                    </p>
                </Upload.Dragger>

                <div className="flex justify-between">
                    {fileList.length > 0 ? (
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                                loading={isLoading}
                                type="primary"
                                onClick={handleManualUpload}
                                disabled={!wordId}
                                aria-label="Enviar arquivos"
                            >
                                Enviar Arquivos ({fileList.length})
                            </Button>
                            <Button
                                onClick={() => setFileList([])}
                                aria-label="Limpar lista de arquivos"
                            >
                                Limpar Lista
                            </Button>
                        </div>
                    ) : (
                        <Button
                            onClick={() => navigate(`/dicionario/${wordId}`)}
                        >
                            Pular etapa
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default AttachmentForm;
