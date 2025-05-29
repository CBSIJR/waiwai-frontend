import React, { useState } from "react";
import { Form, Input, Select, Button, Card, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useGetCategoriesQuery } from "../api/Queries";
import { useCreateWordMutation } from "../api/Mutations";
import { fnErrorMessage } from "@/utils";

const WordForm: React.FC<WordFormProps> = ({ onSuccess }) => {
    const [form] = Form.useForm();

    const [searchParams] = useState({
        q: "",
        page: 1,
        page_size: 10,
    });

    const mutation = useCreateWordMutation();

    const { data: categories } = useGetCategoriesQuery(searchParams);

    const handleSubmit = async (values: WordFormData) => {
        try {
            const response = await mutation.mutateAsync({
                word: values.word,
                phonemic: null,
                categories: values.categories,
            });

            onSuccess(response.data.id);
        } catch (error: unknown) {
            const errMsg = fnErrorMessage(error);
            notification.error({
                message: "Erro ao cadastrar palavra",
                description: errMsg,
            });
        }
    };

    return (
        <Card
            title="1. Cadastro da Palavra"
            className="w-full"
            extra={<PlusOutlined />}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
            >
                <Form.Item
                    name="word"
                    label="Palavra"
                    rules={[
                        {
                            required: true,
                            message: "Por favor, insira a palavra",
                        },
                    ]}
                >
                    <Input placeholder="Digite a palavra" className="w-full" />
                </Form.Item>

                <Form.Item name="phonemic" label="Fonética">
                    <Input
                        value={undefined}
                        disabled
                        placeholder="Ex: /fəˈnetɪk/"
                        className="w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="categories"
                    label="Categorias"
                    rules={[
                        {
                            required: true,
                            message: "Selecione pelo menos uma categoria",
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Selecione as categorias"
                        className="w-full"
                        optionFilterProp="label"
                        options={categories?.map((item) => ({
                            value: item.id,
                            label: item.category,
                        }))}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full md:w-auto"
                    >
                        Cadastrar Palavra
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default WordForm;
