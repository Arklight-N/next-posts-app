import React, {useState} from 'react';
import Link from "next/link";
import styles from "../../../../styles/Home.module.css";
import Image from "next/image";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import {useMutation} from "react-query";
import {PostsService} from "../../../services/posts.service";

const PostItem = ({post}) => {



    const {mutate} = useMutation('delete post', (id: number) => PostsService.deletePost(id), {
        onError: (error: any) =>{
            alert(error.message)
        },
        onSuccess: () => {
            window.location.reload()
        }
    })

    return (

            <div>

                <Link style={{width: '100%'}} href={`/posts/${post.id}`}>
                    <div className={styles.card} key={post.id}>
                        <div style={{textAlign: 'center'}}>
                            <Image style={{width: "auto"}} src={post.image} alt={post.title} width={200} height={200}/>
                        </div>
                        <h2>{post.title}</h2>
                    </div>

                </Link>
                <Button onClick={() => mutate(post.id)} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>


    );
};

export default PostItem;