import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
    return (
        <>
            <main id='main'>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    )
}
export default Main;