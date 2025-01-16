import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { programData } from "../../data/programData";
import ServiceDescription from "./ServiceDescription";
import { FiCheckCircle } from "react-icons/fi";
import { splitSentence } from "../../utils/textFormatting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceTiers = ({ activeTab, setActiveTab }) => {
    // const [activeTab, setActiveTab] = useState("beginners");
    const [showSubMenus, setShowSubMenus] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const cardRefs = useRef([])
    const [ref, inView] = useInView();

    const mainControls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView, mainControls]);

    function scrollToTopOfCard(index) {
        console.log(index, "focused index")
        cardRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
            // inline: "nearest",
        });
    }

    function expandTier(id, index) {
        if (window.innerWidth < 768) {
            if (currentIndex === id) {
                setCurrentIndex(null);
                setShowSubMenus(false);
                scrollToTopOfCard(index);
                return;
            }
            setCurrentIndex(id);
            setShowSubMenus(true);
            scrollToTopOfCard(index);
        }
    }

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-12 border-b relative overflow-auto">
                    {/* <div
                        className={`absolute bottom-0 h-[3px] bg-red-500 transition-all ease-linear duration-300`}
                        style={{
                            width: "115px", // Adjust these widths according to tab text width
                            left:
                                activeTab === "beginners"
                                    ? "50%"
                                    : "calc(114px + 72px)", // Adjust the left position based on tabIndex
                        }}
                    ></div> */}
                    {Object.keys(programData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-8 py-4 text-lg font-semibold transition-all ease-linear duration-300 ${
                                activeTab === tab
                                    ? "text-[#1D976C]"
                                    : "text-[#555555]"
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Program
                            <div
                                className={`absolute bg-[#1D976C] h-[2px] w-full bottom-0 left-0 transition-transform ease-in-out duration-300 ${
                                    activeTab === tab
                                        ? "transform scale-x-100"
                                        : "transform scale-x-0"
                                }`}
                            ></div>
                        </button>
                    ))}
                </div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.4, delay: 0.1 },
                            y: 0,
                        },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    className={`${
                        programData[activeTab].packages.length > 1 ? "grid" : ""
                    } md:grid-cols-2  gap-8 overflow-scroll pb-10`}
                >
                    {programData[activeTab].packages.map((package_, index) => (
                        <div
                            key={package_.id}
                            ref={(el) => cardRefs.current[index] = el}
                            className={` bg-white rounded-xl shadow-lg p-8 ${
                                programData[activeTab].packages.length > 1
                                    ? ""
                                    : "lg:max-w-3xl lg:mx-auto"
                            } `}
                        >
                            <div
                                tabIndex={0}
                                onClick={() => expandTier(package_.id, index)}
                                className="mb-8 flex lg:block items-center justify-between"
                            >
                                <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 justify-between xl:items-center">
                                    <div>
                                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#333333] lg:mb-2">
                                            {package_.title}
                                        </h3>
                                        <p className="text-xl lg:text-2xl font-bold text-[#1D976C]">
                                            {package_.price}
                                        </p>
                                    </div>
                                    <button className="max-w-44 px-8 py-4 bg-[#1D976C] text-white font-semibold rounded-lg hover:bg-[#168c5f] transition-colors">
                                        Enroll Now
                                    </button>
                                </div>
                                {window.innerWidth < 768 && (
                                    <div>
                                        <IoIosArrowDown
                                            size={20}
                                            className={`transition-transform ease-in-out duration-100 ${
                                                showSubMenus &&
                                                currentIndex === package_.id
                                                    ? "-rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="hidden md:block">
                                <ServiceDescription package_={package_} />
                            </div>
                            {currentIndex === package_.id && (
                                <div className="block md:hidden">
                                    <ServiceDescription package_={package_} />
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
                <div className=" space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#333333] lg:mb-2">
                        Additional Features{" "}
                    </h3>
                    <ul className="space-y-3 pl-8 text-base xl:text-lg">
                        {programData[activeTab].additionalFeatures.map(
                            (item, index) => {
                                const { topic, rest } = splitSentence(
                                    item,
                                    ":"
                                );
                                return (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <FiCheckCircle
                                            size={20}
                                            className="text-[#1D976C] flex-shrink-0 mt-1"
                                        />
                                        <span className="text-[#555555]">
                                            <b>{topic}</b>: {rest}
                                        </span>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceTiers;
