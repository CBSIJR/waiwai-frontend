import axios from "axios";

export const getWords = async (page: number = 1, pageSize: number = 10) => {
    let url = `/api/words/?page=${page}&page_size=${pageSize}`;
    const response = await axios.get(url);
    return response.data;
};

export const getWordID = async (id: string) => {
    const res = await axios.get<WordProps>(`/api/words/${id}`);
    return res.data;
};

export const getAttachments = async (id: string) => {
    const url = `/api/words/${id}/attachments/?page=${1}&page_size=${5}`;
    const res = await axios.get<AttachmentProps[]>(url);
    return res.data;
};
