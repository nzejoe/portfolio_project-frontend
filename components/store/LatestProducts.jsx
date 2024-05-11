import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LatestProducts = () => {
    const fetchData = () => {
        let url = "/products";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({
        queryKey: ["latest-products"],
        queryFn: () => fetchData(),
    });

    const products = isSuccess ? data.data : Array.from({ length: 4 }).map((_, idx) => ({ id: idx }));

    return (
        <section className="section">
            <h1 className="text-xl mb-5">Latest products</h1>
            <div>LatestProducts</div>
        </section>
    );
};

export default LatestProducts;
