/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const FaqItems = ({
    question,
    answer,
    index,
    currentIndex,
    setCurrentIndex,
}) => {
    const isOpen = currentIndex === index;

    const toggleOpen = (index) => {
        setCurrentIndex(isOpen ? null : index);
    };

    const convertAnswer = (answer) => {
        if (!answer.includes("*")) return <span>{answer}</span>;

        const separatedAnswer = answer.split("*");

        return (
            <div>
                <p className="mb-5">{separatedAnswer[0]}</p>
                <ul className="space-y-1 lg:space-y-3">
                    {separatedAnswer.slice(1).map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center gap-3 "
                            >
                                <FiCheckCircle
                                    size={18}
                                    className=" flex-shrink-0 mt-1"
                                />
                                <span className="">{item.trim()}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <div className="border-b border-gray-200 py-4 pb-3 w-full h-fit">
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
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 lg:text-lg text-[#141414] bg-white"
                    >
                        {convertAnswer(answer)}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItems;
