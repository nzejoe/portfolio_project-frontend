import React, { useState, useRef } from "react";
import { useInterval } from "@/hooks/useInterval";
import { heroImageData } from "@/data";

const Hero = () => {
    const [index, setIndex] = useState(0);

    const slideHandler = () => {
        setIndex((prev) => (prev == 0 ? 1 : 0));
    };

    useInterval(slideHandler, 5000);

    return (
        <div className="section h-[18rem] md:h-[30rem] xl:h-[45rem]">
            <div className="w-full flex slide-viewer">
                {heroImageData.map((item, idx) => (
                    <div className={`relative slide  ${index === idx ? "slide-active" : ""}`} key={idx}>
                        <img src={item.url} alt="" />
                        <div className={`absolute left-0 pl-3 ${idx === 1 ? "top-1/2" : "top-0 xl:top-[20%]"}`}>
                            <h4 className={"text-xxs md:text-sm xl:text-2xl"}> {item.hash}</h4>
                            <h3 className={"text-sm font-bold md:text-base xl:text-4xl"}>{item.header}</h3>
                            <p className={"text-xxs-2 mb-2 md:text-xs xl:text-base"}>{item.text}</p>
                            <div className={""}>
                                <button className={`button-lg bg-primary text-white`}>{item.link}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
