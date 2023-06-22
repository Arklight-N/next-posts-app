import React, {FC, useState} from 'react';
import classes from './Popup.module.scss'
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {IPost} from "../../../types";
import {PostsService} from "../../services/posts.service";
import {useRouter} from "next/router";

type PopupProps = {
    onClose: () => void
}


type FormType = {
    title: string
    image: string
    body: string
}

const Popup: FC<PopupProps> = ({onClose}) => {

    const [postData, setPostData] = useState<IPost>({} as IPost)



    const {isLoading, mutate} = useMutation('create post', (data: IPost) => PostsService.create(data), {
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




    return (
        <div className={classes.overlay} onClick={onClose}>
            <div className={classes.popup} onClick={(event) => event.stopPropagation()}>
                <form onSubmit={handleSubmit(mutate)}>
                    <label>
                        Заголовок поста:
                        <input {...register('title', {
                            required: 'Это поле обязательно для заполнения',
                            minLength: {
                                value: 3,
                                message: 'Заголовок не может быть менее 3 символов'
                            }
                        })} onChange={e => setPostData({...postData, title: e.target.value})}/>
                    </label>
                    <div style={{height: 40}}>{errors?.title && <p>{errors?.title?.message}</p>}</div>
                    <label>
                        Содержание поста:
                        <input {...register('body', {
                            required: 'Это поле обязательно для заполнения',
                            minLength: {
                                value: 3,
                                message: 'Содержание не может быть менее 3 символов'
                            }
                        })} onChange={e => setPostData({...postData, body: e.target.value})}/>
                    </label>

                    <div>{errors?.body && <p>{errors?.body?.message}</p>}</div>
                    <label>
                        Картинка поста:
                        <input {...register('image', {
                            required: 'Это поле обязательно для заполнения',
                            minLength: {
                                value: 3,
                                message: 'Содержание не может быть менее 3 символов'
                            }
                        })} onChange={e => setPostData({...postData, image: e.target.value})}/>
                    </label>

                    <div>{errors?.image && <p>{errors?.image?.message}</p>}</div>
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    );
};

export default Popup;