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

    const handlePage = (index) => {
        setPage(index);
    };

    return (
        <section className="section">
            <h1 className="text-xl mb-5">Latest products</h1>
            <div className="xl:grid grid-cols-7">
                <div className="col-span-2"></div>
                <div className="col-span-5">
                    <div className="grid grid-cols-2 gap-2 mb-5 md:grid-cols-3 md:gap-5">
                        {products[page].map((product) => (
                            <Fragment key={product.id}>
                                {!isSuccess ? (
                                    <div className="h-[13rem] rounded-x overflow-hidden xl:h-[20rem]">
                                        <LoadingSkeleton />
                                    </div>
                                ) : (
                                    <div>
                                        <div className="h-[15rem] flex flex-col justify-start  rounded-xv overflow-hidden border border-primary/20 xl:h-[15rem]">
                                            <div className={"h-[60%] w-full relative mb-2"}>
                                                <img
                                                    src={product.image}
                                                    alt={product.product_name}
                                                    className="h-full w-full object-contain object-center"
                                                />
                                                <div className="absolute left-0 top-0 z-1 w-full h-full bg-primary/10"></div>
                                            </div>

                                            <div className="text-center px-3">
                                                <h4 className="text-xs md:text-sm xl:mb-2">{product.product_name}</h4>
                                                <div>
                                                    <div
                                                        className={
                                                            "text-sm text-primary font-semibold xl:mb-2 xl:text-lg"
                                                        }
                                                    >
                                                        $<span>{product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>

                    {/* PAGINATION BUTTONS */}
                    <div className="w-full flex justify-end">
                        {products && products.length > 1 && (
                            <div className={""}>
                                {page > 0 ? (
                                    <button onClick={() => handlePage(page - 1)} className={""}>
                                        Prev
                                    </button>
                                ) : (
                                    <button className={``}>Prev</button>
                                )}
                                {products.map((product, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={`${page === index ? "" : ""}`}
                                            onClick={() => handlePage(index)}
                                        >
                                            {index + 1}
                                        </button>
                                    );
                                })}
                                {page < products.length - 1 ? (
                                    <button onClick={() => handlePage(page + 1)} className={""}>
                                        Next
                                    </button>
                                ) : (
                                    <button className={``}>Next</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
