import React from "react";
import { useNavigate } from "react-router-dom";
import { Word } from "../Dicionario.types";

interface WordItemProps {
    word: Word;
}

const WordItem: React.FC<WordItemProps> = ({ word }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/dicionario/${word.id}`)}
            className="block p-4 sm:p-5 mb-4 bg-white rounded-xl w-full border border-stroke hover:shadow-md transition-all duration-300 cursor-pointer"
        >
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
    );
};

export default WordItem;
