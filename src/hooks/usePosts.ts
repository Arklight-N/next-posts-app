import {useQuery} from "react-query";
import {PostsService} from "../services/posts.service";
import {IPost} from "../../types";

export const usePosts = () => {
    const {isLoading, error, data:posts} = useQuery('posts list', () => PostsService.getAll(), {
        onError: (error: any) =>{
            alert(error.message)
        },
        select: ({data}):IPost[] => data.map(post => ({
            ...post,
            title: post.title + ' !'
        }))
    })

    return {isLoading, posts}
}