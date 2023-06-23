import axios from "axios";
import {IPost} from "../../types";

const API_URL = 'https://next-posts-app-xvf7.vercel.app/'
axios.defaults.baseURL = API_URL
export const PostsService = {
    async getAll() {
        return axios.get<IPost[]>('/posts')
    },
    async getById(id: string) {
        return axios.get<IPost[]>(`/posts/${id}`)
    },
    async create(data: IPost) {
        return axios.post('/posts', data, {headers: {"Content-Type": 'application/json'}})
    },
    async deletePost(id: number) {
        return axios.delete(`/posts/${id}`);
    },
}