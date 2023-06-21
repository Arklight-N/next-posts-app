import {useQuery} from "react-query";
import {PostsService} from "../services/posts.service";
import {IPost} from "../../types";

export const usePost = (id: string ) => {
    const {isLoading, error, data:post} = useQuery(['posts list', id], () => PostsService.getById(id), {
        onError: (error: any) =>{
            alert(error.message)
        },
        select: ({data}):IPost[] => data,
        enabled: !!id
    })

    return {isLoading, post}
}