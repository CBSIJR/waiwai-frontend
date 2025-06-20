import React from "react";
import { useNavigate } from "react-router-dom";
import { Word } from "../Dicionario.types";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface WordItemProps {
    word: Word;
    onEdit?: (word: Word) => void;
    onDelete?: (wordId: string | number) => void;
}

const WordItem: React.FC<WordItemProps> = ({ word, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onEdit) {
            onEdit(word);
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(word.id);
        }
    };

    const handleCardClick = () => {
        navigate(`/dicionario/${word.id}`);
    };

    return (
        <div className="relative block p-4 sm:p-5 mb-4 bg-white rounded-xl w-full border border-stroke hover:shadow-md transition-all duration-300">
            <div className="absolute flex flex-col top-6 right-5 gap-4">
                {onEdit && (
                    <Button
                        type="text"
                        size="small"
                        icon={<EditOutlined />}
                        onClick={handleEdit}
                        className="hover:bg-blue-50"
                        title="Editar palavra"
                    />
                )}

                {onDelete && (
                    <Popconfirm
                        title="Excluir palavra"
                        description="Tem certeza que deseja excluir esta palavra?"
                        onConfirm={handleDelete}
                        okText="Sim"
                        cancelText="Não"
                        placement="bottomRight"
                    >
                        <Button
                            type="text"
                            size="small"
                            icon={<DeleteOutlined />}
                            danger
                            className="hover:bg-red-50"
                            title="Excluir palavra"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </Popconfirm>
                )}
            </div>

            <div onClick={handleCardClick} className="cursor-pointer pr-20">
                <div className="flex flex-col gap-2">
                    {/* Cabeçalho com palavra e fonema */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-dark break-words">
                            {word.word}
                        </h3>
                        {word.phonemic && (
                            <span className="text-sm sm:text-base text-body-color italic break-words">
                                {word.phonemic}
                            </span>
                        )}
                    </div>

                    {/* Categorias, se houver */}
                    {word.categories && word.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {word.categories.map((cat, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 text-xs bg-gray-light text-body-color rounded-full"
                                >
                                    {cat.category}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WordItem;
