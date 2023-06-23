import { useQuery } from "react-query";
import { CommentsService } from "../services/comments.service";
import { IComment } from "../../types";

export const useComment = (id: string) => {
    const { isLoading, error, data: response } = useQuery(["comments", id], () =>
            CommentsService.getAllByPostId(id),
        {
            onError: (error: any) => {
                alert(error.message);
            },
        }
    );

    const comments = response ? response.data : [];

    return { isLoading, comments };
};
