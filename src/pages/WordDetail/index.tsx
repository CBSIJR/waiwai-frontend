import React from "react";
import WordDetail from "./components/WordDetail";

const WordDetailPage: React.FC = () => {
    return (
        <div className="py-8 px-4 md:px-8">
            <div className="container mx-auto">{<WordDetail />}</div>
        </div>
    );
};

export default WordDetailPage;
