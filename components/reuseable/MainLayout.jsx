import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="pt-[70px]">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
