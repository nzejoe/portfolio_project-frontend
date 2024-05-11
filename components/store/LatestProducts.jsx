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

    return (
        <section className="section">
            <h1 className="text-xl mb-5">Latest products</h1>
            <div>
                <div></div>
                <div className="grid grid-cols-2 gap-2">
                    {products[page].map((product) => (
                        <Fragment key={product.id}>
                            {!isSuccess ? (
                                <div className="h-[13rem] rounded-x overflow-hidden xl:h-[20rem]">
                                    <LoadingSkeleton />
                                </div>
                            ) : (
                                <div className="h-[15rem] flex flex-col justify-start  rounded-xv overflow-hidden border border-primary/50 xl:h-[15rem]">
                                    <div className={"h-[70%] w-full relative mb-2"}>
                                        <img
                                            src={product.image}
                                            alt={product.product_name}
                                            className="h-full w-full object-contain object-center"
                                        />
                                        <div className="absolute left-0 top-0 z-1 w-full h-full bg-primary/10"></div>
                                    </div>

                                    <div className="text-center">
                                        <h4 className="text-xs md:text-sm xl:mb-2">{product.product_name}</h4>
                                        <div>
                                            <div className={"text-sm text-primary font-semibold xl:mb-2 xl:text-lg"}>
                                                $<span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
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
