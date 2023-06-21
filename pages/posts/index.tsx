import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import {usePosts} from "../../src/hooks/usePosts";

const PostsPage = () => {
    const {isLoading, posts} = usePosts()

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    React Query
                </h1>

                {isLoading ? <div>Loading...</div> : posts?.length ?
                    <div className={styles.grid}>
                        {posts.map((post) => (
                            <Link href={`/posts/${post.id}`}>
                                <div className={styles.card} key={post.id}>
                                    <Image src={post.image} alt={post.title} width={200} height={200}/>
                                    <p>ID: {post.id}</p>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            </Link>

                        ))}

                    </div> : <div>Elements not found</div>
                }

            </main>
        </div>
    );
};

export default PostsPage;