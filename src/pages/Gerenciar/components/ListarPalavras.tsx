import WordsListComponent from "@/components/List/WordList";
import { useGetWordsListQuery } from "@/pages/Dicionario/api/Queries";
import { Word } from "@/pages/Dicionario/Dicionario.types";
import { Form, Input, Modal } from "antd";
import { useState } from "react";

export default function ListarPalavras() {
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const [openModal, setOpenModal] = useState(false);
    const [form] = Form.useForm();

    const { data, refetch, isLoading, isError, error } =
        useGetWordsListQuery(searchParams);

    const handleEdit = (word: Word) => {
        console.log(word);
        setOpenModal(true);
    };

    const handleDelete = (wordId: string | number) => {
        console.log(wordId);
    };

    return (
        <>
            <WordsListComponent
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                data={data}
                isLoading={isLoading}
                isError={isError}
                error={error}
                refetch={refetch}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Modal
                centered
                open={openModal}
                onCancel={() => setOpenModal(false)}
            >
                <Form form={form} onFinish={handleEdit}>
                    <Form.Item
                        name="word"
                        label="Palavra"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phonemic"
                        label="Fonética"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
