import React, {FC} from 'react';

import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {useRouter} from "next/router";
import {usePost} from "../../src/hooks/usePost";
import {IPost} from "../../types";



const Post: FC = () => {

    const {query} = useRouter()

    const {isLoading, post} = usePost(String(query?.id))



    return (
        <div className={styles.container}>
            {isLoading ? <div>Loading...</div> :
                (
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        {post.title}
                    </h1>


                        <div className={styles.grid}>
                                <div className={styles.card}>
                                    <Image src={post.image} alt={post.title} width={200} height={200}/>
                                    <p>ID: {post.id}</p>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>

                        </div>

                </main>
                )
            }
        </div>
    )
};

    export default Post;