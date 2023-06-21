import axios from "axios";
import {IPost} from "../../types";

const API_URL = 'http://localhost:3004'
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
    }
}