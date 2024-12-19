/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GrFormNextLink } from "react-icons/gr";
// import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types"

function GetStarted({ hideStatistics }) {
    const [ref, isInView] = useInView();
    const mainControls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div
            className={`w-[90%] mx-auto flex-col lg:flex-row  ${
                hideStatistics
                    ? "justify-between bg-[#F9FAFB] max-w-[1030px] block mt-10 lg:mt-16 py-6 md:py-8 px-5 lg:px-12 rounded-lg shadow-md"
                    : "bg-white max-w-[1440px] flex py-12 md:py-20 px-4"
            }`}
        >
            <div
                className={`md:flex items-center  gap-5 xl:g ${
                    hideStatistics
                        ? "justify-between w-full mb-0"
                        : "lg:w-[60%] mb-4"
                }`}
            >
                <h1 className={`font-bold mb-5 mb:mb-0 text-[#050794]  md:w-[60%] ${
                    hideStatistics
                        ? "text-[22px] md:text-2xl lg:text-4xl"
                        : "text-2xl sm:text-4xl"
                }`}>
                    Accelerate Your Career Growth. Your learning, Our hub
                </h1>
                <button className=" flex items-center justify-center p-3 bg-white text-[#050794] rounded-lg transition ease-linear hover:bg-[#050794] hover:text-white duration-300">
                    Get Started
                    <GrFormNextLink
                        size={25}
                        className="ml-1 .blue-to-whiteIcon"
                    />
                </button>
            </div>
            {!hideStatistics && (
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
                    className="flex flex-col items-center justify-center sm:flex-row lg:w-[40%]"
                >
                    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
                        <h1 className="mb-2 text-center">
                            <Counter number={90} />
                        </h1>
                        <p className="max-w-48 text-center text-neutral-600">
                            Students Trained
                        </p>
                    </div>
                    <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]"></div>
                    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
                        <h1 className="mb-2 text-center">
                            <Counter number={600} />
                        </h1>
                        <p>Children Outreached</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

GetStarted.propTypes = {
    hideStatistics: PropTypes.bool
}

export default GetStarted;
