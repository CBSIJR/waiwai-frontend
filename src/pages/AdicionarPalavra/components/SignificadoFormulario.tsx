import React, { useState } from "react";
import {
    Form,
    Input,
    Button,
    Card,
    message,
    Alert,
    Select,
    notification,
} from "antd";
import {
    BookOutlined,
    MinusCircleOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import { useGetReferencesQuery } from "../api/Queries";
import { useCreateMeaningMutation } from "../api/Mutations";
import { fnErrorMessage } from "@/utils";
import { useLoading } from "@/contexts/LoadingContext";
import { MeaningFormData, MeaningFormProps } from "../AdicionarPalavra.types";

const { TextArea } = Input;

const MeaningForm: React.FC<MeaningFormProps> = ({ wordId, onSuccess }) => {
    const { toggleLoading, isLoading } = useLoading();
    const [form] = Form.useForm();
    const [params] = useState<QueryParam>({
        page: 1,
        page_size: 10,
        q: "",
    });

    const { data: references } = useGetReferencesQuery(params);
    const mutation = useCreateMeaningMutation(wordId);

    const handleSubmit = async (values: MeaningFormData[]) => {
        if (!wordId) {
            message.warning("Cadastre uma palavra primeiro");
            return;
        }

        try {
            toggleLoading(true);
            await Promise.all(
                values.map((meaning) => mutation.mutateAsync(meaning))
            );
            onSuccess();
        } catch (error: unknown) {
            const errMsg = fnErrorMessage(error);
            notification.error({
                message: "Erro ao cadastrar significado",
                description: errMsg,
            });
        } finally {
            toggleLoading(false);
        }
    };

    return (
        <Card
            title="2. Criar Significado"
            className="w-full"
            extra={<BookOutlined />}
        >
            {!wordId && (
                <Alert
                    message="Cadastre uma palavra primeiro para poder adicionar significados"
                    type="info"
                    className="mb-4"
                    showIcon
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={(values) => handleSubmit(values.meanings)}
                disabled={!wordId}
                className="space-y-4"
            >
                <Form.List name="meanings" initialValue={[{}]}>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(
                                ({ key, name, ...restField }, index) => (
                                    <div
                                        key={key}
                                        className="border p-4 mb-4 rounded shadow-sm"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "meaning_pt"]}
                                                label="Significado (Português)"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Insira o significado em português",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={6}
                                                    placeholder="Significado em português"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, "meaning_ww"]}
                                                label="Significado (Wai Wai)"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Insira o significado no Wai Wai",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={6}
                                                    placeholder="Significado no Wai Wai"
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "comment_pt"]}
                                                label="Comentário (Português)"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Insira o comentario adicional em português",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={6}
                                                    placeholder="Comentário adicional em português"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, "comment_ww"]}
                                                label="Comentário (Wai Wai)"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Insira o comentario adicional em Wai Wai",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={6}
                                                    placeholder="Comentário adicional no Wai Wai"
                                                />
                                            </Form.Item>
                                        </div>
                                        <Form.Item
                                            {...restField}
                                            name={[name, "reference_id"]}
                                            label="Referência"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Insira a referência",
                                                },
                                            ]}
                                        >
                                            <Select
                                                placeholder="Selecione a referência"
                                                className="max-w-lg"
                                                options={references?.map(
                                                    (item) => ({
                                                        value: item.id,
                                                        label: item.reference,
                                                    })
                                                )}
                                            />
                                        </Form.Item>
                                        <div className="flex justify-end">
                                            {fields.length === index + 1 && (
                                                <Form.Item>
                                                    <Button
                                                        onClick={() => add()}
                                                        icon={<PlusOutlined />}
                                                    >
                                                        Adicionar Significado
                                                    </Button>
                                                </Form.Item>
                                            )}

                                            {fields.length > 1 && (
                                                <Button
                                                    danger
                                                    type="link"
                                                    onClick={() => remove(name)}
                                                    icon={
                                                        <MinusCircleOutlined />
                                                    }
                                                >
                                                    Remover significado
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </>
                    )}
                </Form.List>

                <Form.Item>
                    <Button
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        disabled={!wordId}
                    >
                        Enviar Significados
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default MeaningForm;
