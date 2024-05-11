import React, { Fragment, useState } from "react";
import { getUniqueCategory, getUniqueValues } from "@/helpers/utils";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const ProductFilter = ({ products, isSuccess }) => {
    const [query, setQuery] = useState("");
    const [selectedColor, setColor] = useState("all");
    const [selectedBrand, setBrand] = useState("all");
    const [selectedCategory, setCategory] = useState("all");
    const [price, setPrice] = useState(0);

    const colors = isSuccess ? getUniqueValues(products, "colors") : Array.from({ length: 3 });
    const brands = isSuccess ? getUniqueValues(products, "brand") : Array.from({ length: 3 });
    const categories = isSuccess ? getUniqueCategory(products) : Array.from({ length: 7 });

    const onSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const filterByCategory = (e) => {
        const category = e.target.dataset.category;
        setCategory(category);
    };

    return (
        <aside>
            {/* search */}
            <div className={`mb-5`}>
                <input
                    type="search"
                    placeholder="search"
                    className="eco-input"
                    value={query}
                    onChange={onSearchChange}
                />
            </div>

            {/* category */}
            <div className={``}>
                <h4 className="font-semibold mb-3">Category</h4>
                {categories.map((category, idx) => (
                    <Fragment key={idx}>
                        {!isSuccess ? (
                            <div className="h-8 w-28 rounded-x overflow-hidden mb-3">
                                <LoadingSkeleton />
                            </div>
                        ) : (
                            <button
                                data-category={category}
                                onClick={filterByCategory}
                                className={`block px-3 py-1 capitalize text-sm ${
                                    selectedCategory === category ? "bg-primary text-white font-semibold" : ""
                                }`}
                            >
                                {category}
                            </button>
                        )}
                    </Fragment>
                ))}
            </div>
        </aside>
    );
};

export default ProductFilter;
