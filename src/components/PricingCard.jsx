import React from "react";
import PropTypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";
import { splitSentence } from "../utils/textFormatting";
import DiamondSvg from "../assets/random-designs/pentagon-design.svg";

function PricingCard({ index, title, price, features }) {
    return (
            <div
                className={`relative md:h-[750px] lg:h-[675px] pb-10 md:pb-0 lg:max-w-lg border lg:mx-auto  rounded-2xl shadow ${
                    index === 1
                        ? "text-white bg-gradient-to-r from-[#0020F1] to-[#080E7F]"
                        : "bg-white text-black"
                }`}
            >
                <div className="px-5 lg:px-[31px] pt-10 flex flex-col gap-6 md:gap-4 lg:gap-10">
                    <div>
                        <div className="text-lg lg:text-2xl font-bold">
                            <h2>{title}</h2>
                        </div>
                        <div className="py-2 lg:pt-5 lg:pb-4">
                            <p className="font-semibold text-2xl lg:text-4xl leading-[46px]">
                                {price}
                            </p>
                        </div>
                        <div>
                            <button
                                className={`px-6 py-3 w-[145px]  font-semibold rounded-lg text-white transition-colors ease-in-out duration-500 ${
                                    index === 1
                                        ? "border-2 border-white bg-transparent hover:bg-white/20 "
                                        : "bg-[#0020F1] hover:bg-[#080E7F]"
                                }`}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                    <div>
                        {features.length > 1 && (
                            <ul className="space-y-1 lg:space-y-3">
                                {features.map((item, index) => {
                                    const { topic, rest } = splitSentence(
                                        item,
                                        ":"
                                    );
                                    return (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <FiCheckCircle
                                                size={20}
                                                className=" flex-shrink-0 mt-1"
                                            />
                                            <span className="">
                                                <b>{topic}</b>: {rest}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="absolute top-0 right-0">
                    <img
                        src={DiamondSvg}
                        alt=""
                    />
                </div>
            </div>
    );
}

PricingCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    features: PropTypes.array,
};

export default PricingCard;
