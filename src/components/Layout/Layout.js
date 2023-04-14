import React from "react";
import { Outlet } from "react-router-dom";

//Styles
import styles from "./Layout.module.scss";

//components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
    return <div className={styles.layout}>
        <div className={styles.inside}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>;
}

export default Layout;