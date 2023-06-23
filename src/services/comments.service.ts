import axios from "axios";
import { IComment } from "../../types";

const API_URL = "http://localhost:3004";
axios.defaults.baseURL = API_URL;

export const CommentsService = {
    async getAllByPostId(id: string) {
        return axios.get<IComment[]>(`/comments?id=${id}`);
    },
    async createNewComment(data: IComment) {
        return axios.post(`/comments?id=${data.id}`, data, {headers: {"Content-Type": 'application/json'}})
    }
};
