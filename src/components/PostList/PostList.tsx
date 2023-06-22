import React, {FC} from 'react';
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Post from "../../../pages/posts/[id]";
import PostItem from "../PostItem/PostItem";

const PostList: FC = ({posts}) => {
    return (
        <div className={styles.grid}>
            {posts.map((post) => (
                <PostItem post={post}/>
            ))}

        </div>
    );
};

export default PostList;