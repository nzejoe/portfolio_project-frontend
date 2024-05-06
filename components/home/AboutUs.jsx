import React from "react";

const AboutUs = () => {
    return (
        <section className="section">
            <h1 className="section-title ">About EcoMarket</h1>
            <div className="">
                <div className="mb-5">
                    <h4 className="font-bold mb-3"> Our Inspiration:</h4>
                    <p>
                        {`EcoMarket was born out of a deep passion for environmental sustainability and a desire to make a
                        positive impact on our planet. Growing up, I witnessed firsthand the devastating effects of
                        climate change and environmental degradation. Inspired by a sense of responsibility to future
                        generations, I embarked on a journey to create a platform that promotes eco-friendly living and
                        empowers individuals to make sustainable choices in their daily lives.`}
                    </p>
                </div>

                <div className="mb-5">
                    <h4 className="font-bold mb-3">Our Journey:</h4>
                    <p>
                        {`The idea for EcoMarket began to take shape during my time at Holberton School, where I was
                        inspired by the school's emphasis on project-based learning and real-world applications of
                        technology. Over the course of several months, I dedicated countless hours to research, design,
                        and development, transforming my vision into a reality. Today, EcoMarket stands as a testament
                        to the power of innovation and collaboration in driving positive change.`}
                    </p>
                </div>

                <div className="border-t pt-5">
                    <h4 className="font-bold mb-3">Meet the Team:</h4>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
