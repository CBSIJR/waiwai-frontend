import React, { useState } from "react";
import { Upload, Button, Card, message, Alert, List } from "antd";
import {
    UploadOutlined,
    DeleteOutlined,
    FileOutlined,
} from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { useNavigate } from "react-router-dom";

const AttachmentForm: React.FC<AttachmentFormProps> = ({
    wordId,
    onSuccess,
}) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    const navigate = useNavigate();

    const handleUpload = async (file: File) => {
        if (!wordId) {
            message.warning("Cadastre uma palavra primeiro");
            return false;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(`/api/words/${wordId}/attachments/`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                message.success(`${file.name} enviado com sucesso!`);
                setUploadedFiles((prev) => [
                    ...prev,
                    { ...data, fileName: file.name },
                ]);
                return true;
            } else {
                message.error(`Erro ao enviar ${file.name}`);
                return false;
            }
        } catch (error) {
            message.error("Erro na conexão");
            return false;
        }
    };

    const uploadProps: UploadProps = {
        name: "file",
        multiple: true,
        fileList,
        disabled: !wordId,
        beforeUpload: (file) => {
            const isValidSize = file.size / 1024 / 1024 < 10; // 10MB
            if (!isValidSize) {
                message.error("Arquivo deve ser menor que 10MB");
                return false;
            }
            return false; // Prevent automatic upload
        },
        onChange: (info) => {
            setFileList(info.fileList);
        },
        onRemove: (file) => {
            setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
        },
    };

    const handleManualUpload = async () => {
        if (fileList.length === 0) {
            message.warning("Selecione pelo menos um arquivo");
            return;
        }

        for (const fileItem of fileList) {
            if (fileItem.originFileObj) {
                await handleUpload(fileItem.originFileObj);
            }
        }

        setFileList([]);
    };

    const removeUploadedFile = (index: number) => {
        setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
        message.success("Arquivo removido da lista");
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

            <div className="space-y-4">
                <Upload.Dragger {...uploadProps} className="w-full">
                    <p className="ant-upload-drag-icon">
                        <UploadOutlined className="text-4xl text-blue-500" />
                    </p>
                    <p className="ant-upload-text text-base">
                        Clique ou arraste arquivos para esta área
                    </p>
                    <p className="ant-upload-hint text-sm text-gray-500">
                        Suporte para upload de múltiplos arquivos. Máximo 10MB
                        por arquivo.
                    </p>
                </Upload.Dragger>

                {fileList.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                            type="primary"
                            onClick={handleManualUpload}
                            disabled={!wordId}
                            className="flex-1 sm:flex-none"
                        >
                            Enviar Arquivos ({fileList.length})
                        </Button>
                        <Button
                            onClick={() => setFileList([])}
                            className="flex-1 sm:flex-none"
                        >
                            Limpar Lista
                        </Button>
                    </div>
                )}

                {uploadedFiles.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Arquivos Enviados:
                        </h4>
                        <List
                            size="small"
                            dataSource={uploadedFiles}
                            renderItem={(item, index) => (
                                <List.Item
                                    actions={[
                                        <Button
                                            type="text"
                                            danger
                                            size="small"
                                            icon={<DeleteOutlined />}
                                            onClick={() =>
                                                removeUploadedFile(index)
                                            }
                                        />,
                                    ]}
                                    className="px-0"
                                >
                                    <div className="flex items-center space-x-2">
                                        <FileOutlined className="text-blue-500" />
                                        <span className="text-sm">
                                            {item.fileName}
                                        </span>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                )}
            </div>
            <Button onClick={() => navigate(`/dicionario/${wordId}`)}>
                {fileList.length > 0 ? "Enviar Arquivos" : "Pular etapa"}
            </Button>
        </Card>
    );
};

export default AttachmentForm;
