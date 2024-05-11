import React from "react";
import StoreBanner from "@/components/store/StoreBanner";
import TopCategories from "@/components/store/TopCategories";
import TopSelling from "@/components/home/TopSelling";
import LatestProducts from "@/components/store/LatestProducts";

const StorePage = () => {
    return (
        <div>
            <StoreBanner />
            <TopCategories />
            <TopSelling />
            <LatestProducts />
        </div>
    );
};

export default StorePage;
