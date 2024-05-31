/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GrFormNextLink } from "react-icons/gr";
// import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

function GetStarted() {
    const [ref, isInView] = useInView();
    const mainControls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div className="w-[90%] max-w-[1024px] mx-auto px-4 py-12 md:py-20 border border-neutral-300 bg-white">
            <div className="md:flex md:items-center mb-4">
                <h1 className="font-bold mb-5 mb:mb-0 text-[#050794] text-xl sm:text-4xl md:w-[40%] lg:w-[50%]">
                    Accelerate Your Career Growth. Your learning, Our hub
                </h1>
                <button className=" flex items-center justify-center p-3 bg-white text-[#050794] rounded-lg transition ease-linear hover:bg-[#050794] hover:text-white duration-500">
                    Get Started
                    <GrFormNextLink
                        size={25}
                        className="ml-1 .blue-to-whiteIcon"
                    />
                </button>
            </div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.9 },
                    },
                }}
                initial="hidden"
                animate={mainControls}
                className="flex flex-col items-center justify-center sm:flex-row"
            >
                <div className="flex w-72 flex-col items-center py-8 sm:py-0">
                    <h1 className="mb-2 text-center">
                        <Counter number={31} />
                    </h1>
                    <p className="max-w-48 text-center text-neutral-600">
                        Students Trained
                    </p>
                </div>
                <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]"></div>
                <div className="flex w-72 flex-col items-center py-8 sm:py-0">
                    <h1 className="mb-2 text-center">
                        <Counter number={60} />
                    </h1>
                    <p>Outreaches</p>
                </div>
            </motion.div>
        </div>
    );
}

export default GetStarted;
