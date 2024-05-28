/* eslint-disable react/prop-types */
import React from "react";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";

const FaqItems = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 py-4 pb-3 w-full">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleOpen}
            >
                <h3
                    className={`text-base lg:text-lg ${
                        isOpen ? "font-bold" : "font-light"
                    }`}
                >
                    {question}
                </h3>
                <button
                    onClick={toggleOpen}
                    className="w-fit p-1 transition ease-out hover:scale-150 duration-300 rounded-full border border-solid border-[#475467]"
                >
                    {isOpen ? <FaMinus /> : <HiOutlinePlusSm />}
                </button>
            </div>
            {isOpen && (
                <div className="mt-4 lg:text-lg text-[#475467]">{answer}</div>
            )}
        </div>
    );
};

export default FaqItems;
