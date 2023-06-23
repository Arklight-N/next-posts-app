import React, { FC } from 'react';
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePost } from "../../src/hooks/usePost";
import { useForm } from "react-hook-form";
import { IComment } from "../../types";
import CommentSection from "../../src/components/CommentSection/CommentSections";

const Post: FC = () => {
    const { query } = useRouter();
    const { isLoading, post } = usePost(String(query?.id));
    const id = query?.id;

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<IComment>();

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className={styles.container}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <main className={styles.main}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div>
                        <div className={styles.div}>
                            <div className={styles.img}>
                                <Image
                                    className={styles.img__item}
                                    src={post.image}
                                    alt={post.title}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <p>{post.body}</p>
                        </div>
                        <CommentSection id={id} />
                    </div>
                </main>
            )}
        </div>
    );
};

export default Post;
