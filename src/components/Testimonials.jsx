/* eslint-disable react/prop-types */
// import React from 'react'
import Image from "../assets/get-started/image1.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testimonialData } from "../data/TestimonialData";

function Testimonials({ swiper }) {
    // const scrollContainer = document.querySelector(".scrollBar");
    // scrollContainer.addEventListener("wheel", (event) => {
    //     event.preventDefault();
    //     scrollContainer.scrollLeft += event.deltaY;
    //     scrollContainer.style;
    // });

    // const backBtn = document.querySelector(".backBtn");
    // const nextBtn = document.querySelector(".nextBtn");

    // backBtn.addEventListener("click", () => {
    //     scrollContainer.style.scrollBehavior = "smooth";
    //     scrollContainer.scrollLeft -= 1200;
    // });

    // nextBtn.addEventListener("click", () => {
    //     scrollContainer.style.scrollBehavior = "smooth";
    //     scrollContainer.scrollLeft += 1200;
    // });

    function handlePrev() {
        swiper?.slidePrev();
    }

    function handleNext() {
        swiper?.slideNext();
    }

    return (
        <div className="flex items-center w-[95%] mx-auto">
            <div className="bg-white border border-[#EAECF0] rounded-full w-fit">
                <IoIosArrowRoundBack
                    size={25}
                    className="hover:scale-150"
                    cursor={"pointer"}
                />
            </div>
            <div className="flex overflow-y-scroll w-[90%] mx-auto scrollBar">
                {testimonialData.map(({ id, message, name, cohort }) => {
                    return (
                        <div
                            key={id}
                            className="flex flex-col sm:flex-row min-w-full sm:w-[85%] mx-auto"
                        >
                            <img
                                src={Image}
                                alt=""
                                className="rounded-full sm:rounded-none w-[60%] sm:w-[40%] mx-auto"
                            />
                            <div className="py-4 px-4 sm:px-12 lg:px-16 flex flex-col justify-center">
                                <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl leading-6 mb-3">
                                    {message}
                                </p>
                                <div>
                                    <div>
                                        <p className="font-semibold text-[#101828] text-sm lg:text-lg">
                                            {name}
                                        </p>
                                        <p className="font-light text-[#475467] text-xs lg:text-md">
                                            {cohort}
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center gap-3">
                                    <div className="bg-white border border-[#EAECF0] rounded-full">
                                        <IoIosArrowRoundBack
                                            size={25}
                                            className="hover:scale-150"
                                        />
                                    </div>
                                    <div className="bg-white border border-[#EAECF0] rounded-full">
                                        <IoIosArrowRoundForward
                                            size={25}
                                            className="hover:scale-150"
                                        />
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bg-white border border-[#EAECF0] rounded-full w-fit">
                <IoIosArrowRoundForward
                    size={25}
                    className="hover:scale-150"
                    cursor={"pointer"}
                />
            </div>
        </div>
    );
}

export default Testimonials;
