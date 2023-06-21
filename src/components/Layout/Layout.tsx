import React, {FC} from 'react';
import Header from "../Header/Header";
import {PropsWithChildren} from "react";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";


const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={classes.main}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;