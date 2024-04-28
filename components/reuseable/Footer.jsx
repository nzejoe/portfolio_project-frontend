import React from "react";
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsYoutube, BsCodeSlash } from "react-icons/bs";

const Footer = () => {
    const items = [
        {
            id: 1,
            label: "INFORMATION",
            subItems: [
                {
                    id: 1,
                    label: "Terms & Conditions",
                    link: "",
                },
                {
                    id: 2,
                    label: "Privacy Policy",
                    link: "",
                },
                {
                    id: 3,
                    label: "Support",
                    link: "",
                },
                {
                    id: 4,
                    label: "FAQ",
                    link: "",
                },
            ],
        },
        {
            id: 2,
            label: "ABOUT US",
            subItems: [
                {
                    id: 1,
                    label: "Our company",
                    link: "",
                },
                {
                    id: 2,
                    label: "Our History",
                    link: "",
                },
                {
                    id: 3,
                    label: "Blog",
                    link: "",
                },
            ],
        },
    ];
    return (
        <div className="bg-secondary/10 pt-14 pb-20 border-b">
            <section className="px-5 md:grid md:grid-cols-2 gap-10 xl:grid-cols-4">
                <div className={"mb-7 md:mb-0"}>
                    <h3 className="text-lg uppercase font-semibold mb-3">contact us</h3>
                    <div className={"text-black"}>
                        <p>No 56 CDA Road, Via Ita-Oluwo, Ikorodu.</p>
                        <p>Lagos, Nigeria</p>
                        <p>Phone: +2348064547029</p>
                        <p>Email: jonathannzete@gmail.com</p>
                    </div>
                </div>
                {items.map((item) => (
                    <div key={item.id} className={"mb-7 md:mb-0"}>
                        <h3 className="text-lg uppercase font-semibold mb-3">{item.label}</h3>
                        <div className="">
                            {item.subItems.map((sub) => (
                                <button
                                    key={sub.id}
                                    className="block transition-all duration-500 hover:underline hover:ml-2"
                                >
                                    {sub.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
                <div className={""}>
                    <h3 className="text-lg uppercase font-semibold mb-3">follow us</h3>
                    <div className={"flex items-center space-x-4 text-lg"}>
                        <button className="transition-transform duration-300 hover:scale-125">
                            <BsFacebook className={""} />
                        </button>
                        <button className="transition-transform duration-300 hover:scale-125">
                            <BsTwitter className={""} />
                        </button>
                        <button className="transition-transform duration-300 hover:scale-125">
                            <BsPinterest className={""} />
                        </button>
                        <button className="transition-transform duration-300 hover:scale-125">
                            <BsInstagram className={""} />
                        </button>
                        <button className="transition-transform duration-300 hover:scale-125">
                            <BsYoutube className={""} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
