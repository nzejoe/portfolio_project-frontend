import React from "react";

const OurFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Top Categories",
            description:
                "Explore our top categories, including organic clothing, sustainable home goods, and eco-friendly beauty products. Discover a wide range of ethically sourced and environmentally conscious items to suit your lifestyle and values.",
            screenshot: "/images/home/top-category.png",
        },
        {
            id: 2,
            title: "Top Selling Products",
            description:
                "Browse our selection of top-selling products, curated based on popularity and customer satisfaction. From reusable kitchenware to energy-efficient gadgets, find the most sought-after eco-friendly products that align with your commitment to sustainability.",
            screenshot: "/images/home/top-selling.png",
        },
    ];
    return (
        <section className="section">
            <h1 className="section-title ">Our Features</h1>
            <div className="md:grid grid-cols-2 gap-10">
                {features.map((item) => (
                    <div key={item.id} className="rounded-xv p-5 border mb-10">
                        <div className="h-[300px] w-full">
                            <img src={item.screenshot} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">{item.title}</h4>
                            <p className="text-justify">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurFeatures;
