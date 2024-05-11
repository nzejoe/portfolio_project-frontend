import React, { useState } from "react";

const ProductFilter = () => {
    const [query, setQuery] = useState("");
    const [selectedColor, setColor] = useState("all");
    const [selectedBrand, setBrand] = useState("all");
    const [selectedCategory, setCategory] = useState("all");
    const [price, setPrice] = useState(0);

    const onSearchChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <aside>
            <div className={``}>
                <input type="search" placeholder="search" value={query} onChange={onSearchChange} />
            </div>
        </aside>
    );
};

export default ProductFilter;
