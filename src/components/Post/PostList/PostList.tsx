import React, {FC} from 'react';
import styles from "../../../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Post from "../../../../pages/posts/[id]";
import PostItem from "../PostItem/PostItem";
import {IPost} from "../../../../types";

// @ts-ignore
const PostList: FC = ({posts}) => {

    return (
        <div>
            {posts.map((post: IPost) => (
                <PostItem key={post.id} post={post}/>
            ))}

        </div>
    );
};

export default PostList;