import {
    useGetAttachmentsQuery,
    useGetWordDetailQuery,
} from "@/pages/PalavraDetalhe/api/Queries";
import { fnDateFormatDDMMYYYY } from "@/utils";
import {
    ArrowLeftOutlined,
    CalendarOutlined,
    BookOutlined,
    GlobalOutlined,
    TagOutlined,
} from "@ant-design/icons";
import { Button, Empty, Spin, Typography, Card, Divider, Tag } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AttachmentsSection from "./AttachmentsSection";

const { Paragraph, Link } = Typography;

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
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
                <div className="text-center">
                    <Spin size="large" />
                    <p className="mt-4 text-body-color font-medium">
                        Carregando detalhes...
                    </p>
                </div>
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 p-6">
                <div className="max-w-md w-full text-center bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <BookOutlined className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                        Erro ao carregar detalhes
                    </h3>
                    <p className=" mb-6 text-sm leading-relaxed">
                        Não foi possível carregar os detalhes desta palavra.
                        Tente novamente.
                    </p>
                    <Button
                        onClick={handleGoBack}
                        type="primary"
                        size="large"
                        icon={<ArrowLeftOutlined />}
                        className="h-12 px-8 rounded-xl font-medium"
                    >
                        Voltar
                    </Button>
                </div>
            </div>
        );
    }

    const word = data.data;

    if (!word) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-gray-50">
                <Empty
                    description="Palavra não encontrada"
                    className="py-12"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
                <Button
                    onClick={handleGoBack}
                    type="primary"
                    size="large"
                    icon={<ArrowLeftOutlined />}
                    className="h-12 px-8 rounded-xl font-medium"
                >
                    Voltar
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mt-4 mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="bg-primary rounded-t-lg to-primary-dark text-white p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 break-words">
                            {word.word}
                        </h1>

                        <div className="flex items-center gap-2 mb-4">
                            <TagOutlined className="text-white/80" />
                            <span className="text-lg text-white/90 font-medium">
                                {word.phonemic
                                    ? `/${word.phonemic}/`
                                    : "Fonética não registrada"}
                            </span>
                        </div>
                    </div>
                </div>

                {word.categories && word.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {word.categories.map((category, index) => (
                            <Tag
                                key={index}
                                className="bg-white/20 border-white/30 text-white rounded-full px-4 py-1 font-medium"
                            >
                                {category.category}
                            </Tag>
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-white p-8">
                {word.meanings && word.meanings.length > 0 ? (
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <BookOutlined className="text-xl text-primary" />
                            <h2 className="text-2xl font-bold text-dark">
                                Significados
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {word.meanings.map((meaning) => (
                                <>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                                <h3 className="font-semibold text-primary text-sm uppercase tracking-wider">
                                                    Wai Wai
                                                </h3>
                                            </div>
                                            <Paragraph className="text-lg font-medium text-dark mb-0">
                                                {meaning.meaning_ww}
                                            </Paragraph>
                                            <Paragraph className="text-body-color text-sm leading-relaxed mb-0">
                                                {meaning.comment_ww ||
                                                    "Sem comentários adicionais."}
                                            </Paragraph>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                                <h3 className="font-semibold text-primary text-sm uppercase tracking-wider">
                                                    Português
                                                </h3>
                                            </div>
                                            <Paragraph className="text-lg font-medium text-dark mb-0">
                                                {meaning.meaning_pt}
                                            </Paragraph>
                                            <Paragraph className="text-body-color text-sm leading-relaxed mb-0">
                                                {meaning.comment_pt ||
                                                    "Sem comentários adicionais."}
                                            </Paragraph>
                                        </div>
                                    </div>

                                    {meaning.reference && (
                                        <>
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <BookOutlined className="text-primary mt-1" />
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-dark mb-2">
                                                            Referência
                                                        </h4>
                                                        <Paragraph className="text-sm text-body-color mb-2">
                                                            {
                                                                meaning
                                                                    .reference
                                                                    .reference
                                                            }
                                                            {meaning.reference
                                                                .authors &&
                                                                ` - ${meaning.reference.authors}`}
                                                            {meaning.reference
                                                                .year &&
                                                                ` (${meaning.reference.year})`}
                                                        </Paragraph>
                                                        {meaning.reference
                                                            .url && (
                                                            <Link
                                                                href={
                                                                    meaning
                                                                        .reference
                                                                        .url
                                                                }
                                                                target="_blank"
                                                                className="flex items-center gap-2 text-primary hover:text-primary-dark"
                                                            >
                                                                <GlobalOutlined />
                                                                Ver fonte
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <Divider className="my-6" />
                                </>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <BookOutlined className="text-2xl text-gray-400" />
                        </div>
                        <p className="text-body-color/70 text-lg">
                            Nenhum significado cadastrado para esta palavra.
                        </p>
                    </div>
                )}

                {attachments && (
                        <AttachmentsSection attachments={attachments} />
                )}

                <Divider className="my-8" />

                <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-body-color">
                        <div className="flex items-center gap-3">
                            <CalendarOutlined className="text-primary" />
                            <span>
                                <strong>Criado em:</strong>{" "}
                                {fnFormatDate(word.created_at)}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CalendarOutlined className="text-primary" />
                            <span>
                                <strong>Atualizado em:</strong>{" "}
                                {fnFormatDate(word.updated_at)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordDetail;
