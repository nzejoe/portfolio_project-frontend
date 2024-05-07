import React from "react";
import StoreBanner from "@/components/store/StoreBanner";
import TopCategories from "@/components/store/TopCategories";
import TopSelling from "@/components/home/TopSelling";

const StorePage = () => {
    return (
        <div>
            <StoreBanner />
            <TopCategories />
            <TopSelling />
        </div>
    );
};

export default StorePage;
