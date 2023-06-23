import React, {useState} from 'react';
import { useQuery, useMutation } from 'react-query';
import {useComment} from "../../hooks/useComment";
import {IComment} from "../../../types";
import {CommentsService} from "../../services/comments.service";
import {useForm} from "react-hook-form";

type FormType = {
    nickname: string
    text: string
}

const CommentSection = ({ id }: { id: string }) => {
    // Получение комментариев с помощью React Query
    const { comments, isLoading } = useComment(id)

    const [commData, setCommData] = useState<IComment>({} as IComment)

    const {mutate} = useMutation('create comments', (data: IComment) => CommentsService.createNewComment(data), {
        onSuccess: () => {
            window.location.reload()
        },

        onError: (error: any) =>{
            alert(error.message)
        }
    })



    const {register, formState: {
        errors
    }, handleSubmit} = useForm<FormType>()

    const onSubmit = (formData: FormType) => {
        const newComment: IComment = {
            id: id,
            ...formData
        };
        setCommData(newComment);
        mutate(newComment);
    };

    if (isLoading) {
        return <div>Loading comments...</div>;
    }



    return (
        <div>
            <h2>Комментарии</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>
                    Ваш ник:
                    <input {...register('nickname', {
                        required: 'Это поле обязательно для заполнения',
                        minLength: {
                            value: 3,
                            message: 'Заголовок не может быть менее 3 символов'
                        }
                    })} onChange={e => setCommData({...commData, nickname: e.target.value})}/>
                </label>
                <div>{errors?.nickname && <p>{errors?.nickname?.message}</p>}</div>
                <label>
                    Содержание комментария:
                    <input {...register('text', {
                        required: 'Это поле обязательно для заполнения',
                        minLength: {
                            value: 3,
                            message: 'Содержание не может быть менее 3 символов'
                        }
                    })} onChange={e => setCommData({...commData, text: e.target.value})}/>
                </label>
                <div>{errors?.text && <p>{errors?.text?.message}</p>}</div>
                <input type={'submit'}/>
            </form>
            {comments && comments.length > 0 ? (
                <div>
                    {comments.map((comment: any) => (
                        <div key={comment.comId}>
                            <h3>{comment.nickname}</h3>
                            <div>{comment.text}</div>
                        </div>

                    ))}
                </div>
            ) : (
                <p>No comments yet.</p>
            )}

        </div>
    );
};

export default CommentSection;
