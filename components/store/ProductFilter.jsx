import React, { Fragment, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { getUniqueCategory, getUniqueValues } from "@/helpers/utils";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const ProductFilter = ({ products, isSuccess }) => {
    const [query, setQuery] = useState("");
    const [selectedColor, setColor] = useState("all");
    const [selectedBrand, setBrand] = useState("all");
    const [selectedCategory, setCategory] = useState("all");
    const [price, setPrice] = useState(0);

    const colors = isSuccess ? getUniqueValues(products, "colors") : Array.from({ length: 3 });
    const brands = isSuccess ? getUniqueValues(products, "brand") : null;
    const categories = isSuccess ? getUniqueCategory(products) : Array.from({ length: 7 });

    const onSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const filterByCategory = (e) => {
        const category = e.target.dataset.category;
        setCategory(category);
    };

    const filterByColor = (color) => {
        setColor(color);
    };

    const filterByBrand = (e) => {
        const brand = e.target.value;
        setBrand(brand);
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
            <div className={`mb-5`}>
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

            <div className="flex justify-between items-start">
                {/* colors */}
                <div className={``}>
                    <h4 className="font-semibold mb-3">Colors</h4>
                    <div className={`flex space-x-1`}>
                        {colors.map((color, index) => (
                            <Fragment key={index}>
                                {!isSuccess ? (
                                    <div className="w-6 h-6 rounded-x overflow-hidden">
                                        <LoadingSkeleton />
                                    </div>
                                ) : (
                                    <button
                                        key={index}
                                        data-color={color}
                                        onClick={() => {
                                            filterByColor(color);
                                        }}
                                        className={`w-6 h-6 relative rounded-full p-1 flex justify-center items-center ${
                                            selectedColor === color && ""
                                        }`}
                                        style={{ backgroundColor: `${color.toLowerCase()}` }}
                                    >
                                        {color === "all" ? <span className="text-sm">{color}</span> : ""}
                                        {color === selectedColor ? (
                                            <BsCheckCircle
                                                className={`block absolute top-0 left-0 w-full h-full text-primary`}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </button>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>

                {/* brands */}
                <div className={``}>
                    <h4 clclassName="font-semibold mb-3">Brands</h4>
                    <div className="">
                        <select name="" id="" className="eco-input" onChange={filterByBrand} value={selectedBrand}>
                            {brands ? (
                                brands.map((brand) => (
                                    <option
                                        data-brand={brand}
                                        key={brands.indexOf(brand)}
                                        className={`${selectedBrand === brand && ""}`}
                                    >
                                        {brand}
                                    </option>
                                ))
                            ) : (
                                <option>Loading...</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ProductFilter;
