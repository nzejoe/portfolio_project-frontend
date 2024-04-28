import React, { Fragment } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const TopSelling = () => {
    const fetchData = () => {
        let url = "/products/top_products/";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({
        queryKey: ["top-products"],
        queryFn: () => fetchData(),
    });

    const topProducts = isSuccess ? data.data : Array.from({ length: 6 }).map((_, idx) => ({ id: idx }));

    return (
        <section className="section ">
            <h1 className="section-title">Best sellers</h1>
            <div className={"grid grid-cols-2 gap-5 text-center md:grid-cols-3 mb-10"}>
                {topProducts.map((product) => {
                    return (
                        <Fragment key={product.id}>
                            {!isSuccess ? (
                                <div className="h-[13rem] rounded-x overflow-hidden xl:h-[20rem]">
                                    <LoadingSkeleton />
                                </div>
                            ) : (
                                <div
                                    className={
                                        "h-[13rem] flex flex-col justify-between border rounded-xv p-3 xl:h-[20rem] xl:p-5"
                                    }
                                >
                                    <div className={"h-[50%] w-full"}>
                                        <img
                                            src={product.image}
                                            alt={product.product_name}
                                            className="h-full w-full object-contain object-center"
                                        ></img>
                                    </div>
                                    <div className={"flex-1 flex flex-col justify-between items-center"}>
                                        <div>
                                            <h4 className="text-xs md:text-sm xl:text-base xl:mb-2">
                                                {product.product_name.length > 40
                                                    ? `${product.product_name.slice(0, 40)}...`
                                                    : product.product_name}
                                            </h4>
                                            <div className="text-sm text-primary font-semibold xl:mb-2 xl:text-lg">
                                                <span>$</span>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="button-sm bg-secondary text-white">view</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Fragment>
                    ); // set it to grid view
                })}
            </div>
            <div className="text-center">
                <button className="button-lg button-outline border border-primary text-primary hover:bg-primary hover:text-white">
                    View More
                </button>
            </div>
        </section>
    );
};

export default TopSelling;
