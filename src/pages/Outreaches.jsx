import React, { useEffect, useRef, useState } from "react";
import image from "../assets/outreach-1.jpg";
import videoSrc from "../assets/outreach-hero-video.mp4";
import { useDispatch } from "react-redux";
import { setTransparentNav } from "../store/navSlice";
import { motion, AnimatePresence } from "framer-motion";

function Outreaches() {
    const [animate, setAnimate] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = isLocked ? "hidden" : "auto";

        return () => (document.body.style.overflow = "auto");
    }, [isLocked]);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const revealPageContent = () => {
        setAnimate(true);
        dispatch(setTransparentNav(false));
        setTimeout(() => {
            console.log("I ran");
            setIsLocked(false); // Unlock scroll after animation
        }, 2000); // Match animation duration
    };

    return (
        <main className="relative">
            <AnimatePresence mode="wait">
                {!animate && (
                    <motion.div
                        key="hero-section"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={`w-full h-screen relative z-10 bg-gray-400`}
                    >
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover object-center absolute right-0 bottom-0 -z-20 background-video"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>

                        <div className="bg-black h-full absolute top-0 left-0 opacity-50 w-full -z-10"></div>
                        <div className="w-[90%] mx-auto max-w-[1440px] z-30 flex flex-col justify-center items-center h-full">
                            <h1 className="font-bold text-center text-5xl md:text-6xl lg:text-[160px] text-white w-full lg:w-[80%] mb-5 md:mb-9 leading-12 background-text">
                                Outreaches
                            </h1>
                            <button
                                onClick={revealPageContent}
                                className="w-[200px] h-[60px] border-2 text-white font-semibold text-lg lg:text-2xl rounded-lg shadow-md hover:shadow-white shadow- transition-colors"
                            >
                                Explore
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(
                    <motion.div
                        key="main-content"
                        // initial={{ y: "100%" }}
                        // animate={{ y: 0 }}
                        // transition={{ duration: 1, ease: "easeInOut" }}
                        className={`absolute top-0 w-full ${
                            animate ? "h-auto" : "h-0"
                          } bg-white`}
                    >
                        <div className="bg-red-50 h-screen">
                            <h1 className="text-5xl md:text-[60px] font-bold text-black leading-[1.2] font-['Inter']">
                                Empowering the Next Generation of Leaders with
                                Digital and Soft Skills
                            </h1>
                            <p className="mt-6 text-xl md:text-2xl text-white leading-[1.5] font-['Inter']">
                                Simplified, engaging, and self-paced learning
                                for today's digital world.
                            </p>
                            <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                                <button className="w-[200px] h-[60px] bg-[#1D976C] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#168c5f] transition-colors">
                                    Join Now
                                </button>
                                <button
                                    // onClick={scrollToServices}
                                    className="w-[200px] h-[60px] text-white font-semibold text-lg rounded-lg shadow-md bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <section className="h-screen bg-green-500 flex justify-center items-center">
                            <h2 className="text-4xl font-bold text-white">
                                Section 1
                            </h2>
                        </section>
                        <section className="h-screen bg-purple-500 flex justify-center items-center">
                            <h2 className="text-4xl font-bold text-white">
                                Section 2
                            </h2>
                        </section>
                        <section className="h-screen bg-orange-500 flex justify-center items-center">
                            <h2 className="text-4xl font-bold text-white">
                                Section 3
                            </h2>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Outreaches;
