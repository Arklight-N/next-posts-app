import React, {FC} from 'react';
import classes from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@mui/material";

const Header: FC = () => {
    const links = [
        {id: 1, title: 'Главная', path: '/'},
        {id: 2, title: 'Посты', path: '/posts'},
        {id: 3, title: 'О нас', path: '/about-us'}
    ]

    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <Link href={'/'}>
                    <Image alt={'logo'} width={30} height={30} src={'/logo.png'}/>
                </Link>
            </div>
            <div className={classes.header__content}>
                {links.map(link => (
                    <Link key={link.id} className={classes.header__link} href={link.path}>
                        {link.title}
                    </Link>
                ))}
            </div>

        </header>
    );
};

export default Header;