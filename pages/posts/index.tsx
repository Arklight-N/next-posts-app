import React, {useState} from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import {usePosts} from "../../src/hooks/usePosts";
import PostList from "../../src/components/PostList/PostList";
import {Button} from "@mui/material";
import Popup from "../../src/components/Popup/Popup";
import SendIcon from '@mui/icons-material/Send';
import {useMutation} from "react-query";
import {IPost} from "../../types";
import {PostsService} from "../../src/services/posts.service";


const PostsPage = () => {
    const {isLoading, posts} = usePosts()


    const [showPopup, setShowPopup] = useState(false)




    const openPopup = () => {
        setShowPopup(true)
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.header__content}>
                    <h1 className={styles.title}>
                        Список постов
                    </h1>
                    <Button onClick={openPopup} variant="contained" endIcon={<SendIcon />}>
                        Создать новый пост
                    </Button>
                </div>
                {showPopup && <Popup onClose={closePopup}/>}

                {isLoading ? <div>Loading...</div> : posts?.length ?
                    <PostList posts={posts}/> : <div>Elements not found</div>
                }

            </main>
        </div>
    );
};

export default PostsPage;