import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useQuery} from "react-query";
import {PostsService} from "../src/services/posts.service";
import * as http2 from "http2";
import {useState} from "react";
import {IPost} from "../types";
import {usePosts} from "../src/hooks/usePosts";
import Link from "next/link";
import {dividerClasses} from "@mui/material";

const Home: NextPage = () => {

  return (
    <div style={{textAlign: "center", fontSize: 40}}>Главная страница</div>
  )
}

export default Home
