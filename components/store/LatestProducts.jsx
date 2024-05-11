import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, actions as productActions } from "@/store/product-slice";
import { getPaginatedProducts } from "@/helpers/utils";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const LatestProducts = () => {
    const [page, setPage] = useState(0);
    const { filteredProducts, filter, loading } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const isFetched = () => {
        return Boolean(!loading && filteredProducts.length !== 0);
    };

    const products = isFetched()
        ? getPaginatedProducts(filteredProducts)
        : Array.from({ length: 1 }).map((_) => Array.from({ length: 6 }).map((_, idx) => ({ id: idx })));

    console.log("filteredProducts :>> ", products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <section className="section">
            <h1 className="text-xl mb-5">Latest products</h1>
            <div>
                <div></div>
                <div>
                    {products[page].map((product) => (
                        <Fragment key={product.id}>
                            {!isFetched() ? (
                                ""
                            ) : (
                                <div>
                                    <div>
                                        <img src={product.image} alt={product.product_name} />
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
