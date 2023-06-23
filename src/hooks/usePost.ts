import {IPost} from "../../types";
import {useQuery} from "react-query";
import {PostsService} from "../services/posts.service";

export const usePost = (id: string ) => {
    // @ts-ignore
    const { isLoading, error, data: post } = useQuery(['posts list', id], () => PostsService.getById(id), {
        onError: (error: any) => {
            alert(error.message)
        },
        select: ({ data }: { data: IPost }) => data, // Return a single IPost object instead of an array
        enabled: !!id
    });

    return { isLoading, error, post };
}