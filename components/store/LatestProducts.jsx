import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getPaginatedProducts } from "@/helpers/utils";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const LatestProducts = () => {
    const [page, setPage] = useState(0);

    const fetchData = () => {
        let url = "/products/";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({ queryKey: ["latest-products"], queryFn: () => fetchData() });

    const products = isSuccess
        ? getPaginatedProducts(data.data)
        : Array.from({ length: 1 }).map((_) => Array.from({ length: 6 }).map((_, idx) => ({ id: idx })));

    console.log("products :>> ", products);

    return (
        <section className="section">
            <h1 className="text-xl mb-5">Latest products</h1>
            <div>
                <div></div>
                <div className="grid grid-cols-2 gap-5">
                    {products[page].map((product) => (
                        <Fragment key={product.id}>
                            {!isSuccess ? (
                                ""
                            ) : (
                                <div className="h-[13rem] flex flex-col justify-between  rounded-xv p-3 xl:h-[15rem] xl:p-5">
                                    <div className={""}>
                                        <img
                                            src={product.image}
                                            alt={product.product_name}
                                            className="h-full w-full object-contain object-center"
                                        />
                                    </div>
                                    <div></div>
                                </div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
