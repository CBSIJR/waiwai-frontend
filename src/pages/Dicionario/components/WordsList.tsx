import React, { useState } from "react";
import { useGetWordsListQuery } from "../api/Queries";
import WordsListComponent from "@/components/List/WordList";

const WordsList: React.FC = () => {
    const [searchParams, setSearchParams] = useState<QueryParam>({
        q: "",
        page: 1,
        page_size: 10,
    });

    const { data, refetch, isLoading, isError, error } =
        useGetWordsListQuery(searchParams);

    return (
        <WordsListComponent
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            data={data}
            isLoading={isLoading}
            isError={isError}
            error={error}
            refetch={refetch}
        />
    );
};

export default WordsList;
