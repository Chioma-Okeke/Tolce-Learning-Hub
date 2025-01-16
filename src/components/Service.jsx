/* eslint-disable react/prop-types */
// import React from "react";
import { useEffect, useState } from "react";
import Image from "../assets/Hero/focusing-image.png";
import { serviceData } from "../data/serviceData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRightLong } from "react-icons/fa6";

function Service({ title }) {
    const [ref, isInView] = useInView();
    const mainControls = useAnimation();
    const [isItemHovered, setIsItemHovered] = useState(false);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div className="w-[90%] mx-auto font-medium">
            <div className="text-center mb-5">
                <h1 className="font-semibold text-2xl lg:text-4xl  xl:text-[40px]">
                    {title}
                </h1>
                <p className="text-base font-medium text-[#475467] lg:text-lg xl:text-[18px]">
                    We currently focus on two(2) major areas
                </p>
            </div>
            <div className="lg:w-[70%] mx-auto">
                <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
                    <div className="w-full lg:w-[370px] border h-[511px] rounded-lg">
                        <img src="" alt="" />
                        <div>
                            <div>
                                <h4>Outreaches</h4>
                                <p>description will go here</p>
                            </div>
                            <button
                                className="relative flex h-10 items-center w-fit"
                                onMouseEnter={() => setIsItemHovered(true)}
                                onMouseLeave={() => setIsItemHovered(false)}
                            >
                                <div
                                    className={` h-10 rounded-full absolute top-1 transition-all ease-in-out duration-500 ${
                                        isItemHovered
                                            ? "w-full opacity-30 bg-transparent"
                                            : "w-10 opacity-100 bg-blue-400"
                                    }`}
                                ></div>
                                <div className={`z-20 flex items-center gap-2 justify-between transition-colors ease-in-out duration-300 ${
                                            isItemHovered
                                                ? "text-blue-400"
                                                : "text-[#141414]"
                                        }`}>
                                    <span>
                                        Learn more
                                    </span>
                                    <FaArrowRightLong />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-[370px] border h-[511px] rounded-lg">
                        <img src="" alt="" />
                        <div>
                            <div>
                                <h4>Skill Acquisition</h4>
                                <p>description will go here</p>
                            </div>
                            <button
                                className="relative flex h-10 items-center w-fit"
                                onMouseEnter={() => setIsItemHovered(true)}
                                onMouseLeave={() => setIsItemHovered(false)}
                            >
                                <div
                                    className={` h-10 rounded-full absolute top-1 transition-all ease-in-out duration-500 ${
                                        isItemHovered
                                            ? "w-full opacity-30 bg-transparent"
                                            : "w-10 opacity-100 bg-blue-400"
                                    }`}
                                ></div>
                                <div className={`z-20 flex items-center gap-2 justify-between transition-colors ease-in-out duration-300 ${
                                            isItemHovered
                                                ? "text-blue-400"
                                                : "text-[#141414]"
                                        }`}>
                                    <span>
                                        Learn more
                                    </span>
                                    <FaArrowRightLong />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className=" overflow-hidden">
                    <img
                        className="hidden md:block w-full max-h-screen object-cover object-center h-full aspect-[1/6]"
                        src={Image}
                        alt=""
                    />
                </div>
                <div className="grid grid-row-3 md:grid-cols-3 gap-4 lg:grid-rows-none md:mt-[-200px] lg:mt-[-250px]">
                    {serviceData.map(({ id, Icon, title, description }) => (
                        <motion.div
                            ref={ref}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.9 }}
                            key={id}
                            className="p-6 bg-[#F9FAFB] pb-10 lg:pb-16 md:p-4"
                        >
                            <div className="bg-[#61DB99] rounded-lg w-fit p-2 mb-12">
                                <Icon size={30} color="white" />
                            </div>
                            <h1 className="font-bold text-lg lg:text-2xl text-[#141414] mb-2">
                                {title}
                            </h1>
                            <p className="text-lg lg:text-xl">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default Service;
