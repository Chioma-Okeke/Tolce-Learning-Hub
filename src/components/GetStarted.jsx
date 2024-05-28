/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { image1, image2 } from "../assets/get-started";
import { GrFormNextLink } from "react-icons/gr";
import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useAnimate,
    useAnimation,
    useScroll,
} from "framer-motion";

function GetStarted() {
    // const [studentCount, setStudentCount] = React.useState(0);
    // let count = 1;

    // setInterval(() => {
    //     if (count < 35) {
    //         count++;
    //         // setStudentCount(count);
    //         console.log(count);
    //     }
    // }, 1);

    // const { scrollYProgress } = useScroll;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className="w-[85%] mx-auto py-20 md:py-28" ref={ref}>
            <div className="md:flex md:items-center justify-between mb-16">
                <h1 className="font-bold mb-5 mb:mb-0 text-white text-xl sm:text-4xl md:w-[40%] lg:w-[30%]">
                    Accelerate Your Career Growth. Your learning, Our hub
                </h1>
                <button className=" flex items-center justify-center bg-white text-[#050794] rounded-lg py-3 px-5 transition ease-linear hover:bg-[#050794] hover:text-white duration-500">
                    Get Started
                    <GrFormNextLink
                        size={25}
                        className="ml-1 .blue-to-whiteIcon"
                    />
                </button>
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                animate={mainControls}
                transition={{ duration: 0.4 }}
                className="gap-4 grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-none w-[80%] mx-auto sm:w-full"
            >
                <div className="bg-[#F9FAFB] flex flex-col justify-center px-5">
                    <h1 className="font-extrabold text-4xl mb-1">35+</h1>
                    <p>Students Trained</p>
                </div>
                <img
                    src={image1}
                    alt=""
                    className="rounded-full sm:rounded-none opacity-80 transition hover:opacity-100 hover:scale-110 duration-300"
                />
                <div className="bg-[#61DB99] flex flex-col justify-center  px-5">
                    <h1 className="font-extrabold text-4xl mb-1">60+</h1>
                    <p>Outreaches</p>
                </div>
                <img
                    src={image2}
                    alt=""
                    className="rounded-full sm:rounded-none opacity-80 transition hover:opacity-100 hover:scale-110 duration-300"
                />
            </motion.div>
        </div>
    );
}

export default GetStarted;
