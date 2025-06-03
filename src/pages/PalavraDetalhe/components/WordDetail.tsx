// src/components/dictionary/WordDetail.tsx

import {
    useGetAttachmentsQuery,
    useGetWordDetailQuery,
} from "@/pages/PalavraDetalhe/api/Queries";
import { fnDateFormatDDMMYYYY } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Empty, Spin, Typography } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AttachmentsSection from "./AttachmentsSection";

const WordDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetWordDetailQuery(id || "");

    const { data: attachments, isLoading: isLoadingAttachments } =
        useGetAttachmentsQuery(id || "");

    const fnFormatDate = (date: Date) => {
        return fnDateFormatDDMMYYYY(date);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    if (isLoading || isLoadingAttachments) {
        return (
            <div className="flex flex-col justify-center h-screen items-center py-16">
                <Spin size="large" />
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex flex-col items-center justify-center p-8 h-screen rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">
                    Erro ao carregar detalhes
                </h3>
                <p className="text-body-color mb-6">
                    Não foi possível carregar os detalhes desta palavra.
                </p>
                <button
                    onClick={handleGoBack}
                    className="bg-primary  text-white rounded-md px-6 py-2 mt-4"
                >
                    Voltar
                </button>
            </div>
        );
    }

    const word = data.data;

    if (!word) {
        return <Empty description="Palavra não encontrada" className="py-12" />;
    }

    return (
        <div className="flex flex-col justify-center mt-16 bg-white rounded-lg shadow-one p-4 md:p-8">
            <div className="bg-primary rounded-t-lg px-6 py-8 mb-4 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Button
                                type="text"
                                icon={<ArrowLeftOutlined color="white" />}
                                onClick={() => navigate(-1)}
                                className="flex items-center text-white"
                            />

                            <h1 className="text-3xl md:text-4xl font-bold">
                                {word.word}
                            </h1>
                        </div>

                        <p className="mt-2 text-sm md:text-lg text-white">
                            {word.phonemic
                                ? `/${word.phonemic}/`
                                : "Nenhuma fonética registrada"}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                        {word.categories.map((category, index) => (
                            <span
                                key={index}
                                className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm"
                            >
                                {category.category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {word.meanings.length > 0 ? (
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-body-color border-b pb-2">
                        Significados
                    </h2>

                    <ul className="space-y-4">
                        {word.meanings.map((meaning) => (
                            <li
                                key={meaning.id}
                                className="bg-gray-50 rounded-lg p-4"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-body-color mb-1">
                                            Wai Wai
                                        </h3>
                                        <p className="text-lg font-medium">
                                            {meaning.meaning_ww}
                                        </p>
                                        <p className="mt-2 text-sm text-body-color">
                                            {meaning.comment_ww ||
                                                "Não há comentário para esta palavra."}
                                        </p>
                                    </div>

                                    <div className="hidden md:block w-px bg-gray-200 self-stretch"></div>

                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-body-color mb-1">
                                            Português
                                        </h3>
                                        <p className="text-lg font-medium">
                                            {meaning.meaning_pt}
                                        </p>
                                        <p className="mt-2 text-sm text-body-color">
                                            {meaning.comment_pt ||
                                                "Não há comentário para esta palavra."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <p className="mt-6 text-sm text-body-color text-end">
                                        {meaning.reference.reference}
                                        {meaning.reference.authors}
                                        {meaning.reference.year}
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    {meaning.reference.url && (
                                        <Typography.Link
                                            target="_blank"
                                            href={meaning.reference.url}
                                        >
                                            {meaning.reference.url}
                                        </Typography.Link>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-body-color italic">
                    Nenhum significado cadastrado para esta palavra.
                </p>
            )}

            {attachments && <AttachmentsSection attachments={attachments} />}
            <div className="mt-8 pt-4 text-sm text-body-color">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-2"
                        />
                        <span>Criado em: {fnFormatDate(word.created_at)}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-2"
                        />
                        <span>
                            Atualizado em: {fnFormatDate(word.updated_at)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordDetail;
