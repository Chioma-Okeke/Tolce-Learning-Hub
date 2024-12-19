/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const FaqItems = ({
    question,
    answer,
    index,
    currentIndex,
    setCurrentIndex,
}) => {
    const isOpen = currentIndex === index;

    useEffect(() => {
        console.log(currentIndex);
    }, [currentIndex]);

    const toggleOpen = (index) => {
        // if (isOpen && currentIndex !== index) {
        //     setIsOpen(false)
        // }
        setCurrentIndex(isOpen ? null : index);
    };

    return (
        <div className="border-b border-gray-200 py-4 pb-3 w-full">
            <div
                tabIndex={0}
                className="flex justify-between items-center cursor-pointer bg-white"
                onClick={() => toggleOpen(index)}
            >
                <h3
                    className={`text-base text-[#141414] lg:text-lg transition-all ease-in-out duration-300 ${
                        isOpen ? "font-bold" : "font-medium"
                    }`}
                >
                    {question}
                </h3>
                <button className="w-fit p-1 transition ease-out lg:hover:scale-150 duration-300 rounded-full border border-solid border-[#475467]">
                    {isOpen ? <FaMinus /> : <HiOutlinePlusSm />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ y: "-30%", opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 lg:text-lg text-[#141414]"
                    >
                        {answer} {currentIndex} {index}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItems;
