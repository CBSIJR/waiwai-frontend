// src/components/dictionary/WordItem.tsx

import React from "react";
import { Link } from "react-router-dom";

interface WordItemProps {
    word: Word;
}

const WordItem: React.FC<WordItemProps> = ({ word }) => {
    console.log("word", word)
    return (
        <Link
            to={`/dicionario/${word.id}`}
            className="block p-4 mb-4 bg-white rounded-lg w-full border border-stroke hover:shadow-one transition-shadow duration-300"
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-dark">
                        {word.word}
                    </h3>
                    <div className="text-sm text-body-color">
                        {word.phonemic}
                    </div>
                </div>

                {word.categories && word.categories.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {word.categories.map((cat, index) => (
                            <span
                                key={index}
                                className="inline-block px-2 py-1 text-xs bg-gray-light text-body-color rounded-md"
                            >
                                {cat.category}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default WordItem;
