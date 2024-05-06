import React from "react";
import Hero from "@/components/store/Hero";
import TopCategories from "@/components/store/TopCategories";
import TopSelling from "@/components/home/TopSelling";

const StorePage = () => {
    return (
        <div>
            <Hero />
            <TopCategories />
            <TopSelling />
        </div>
    );
};

export default StorePage;
