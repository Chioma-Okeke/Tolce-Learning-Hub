/* eslint-disable react/prop-types */
// import React from 'react'
import src from "../assets/Hero/heroimage1.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HeroSection({ image, swiper }) {
    function handlePrev() {
        swiper?.slidePrev();
    }

    function handleNext() {
        swiper?.slideNext();
    }

    console.log(image, "hey");
    return (
        <div
            style={{ backgroundImage: `url('${src}')` }}
            className="bg-no-repeat bg-center bg-cover h-screen relative hero-section pt-40"
        >
            <div className="bg-black h-full absolute top-0 left-0 opacity-50 w-full -z-1"></div>
            <div className="w-[90%] mx-auto max-w-[1440px] z-1 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <IoIosArrowBack
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="transition ease-out hover:scale-150"
                    onClick={handlePrev}
                />
                <div className="ml-3 mt-5">
                    <h1 className="font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl text-white w-full lg:w-[60%] mb-3 md:mb-9 leading-12">
                        Bridging the gap between the Classroom and Corporate
                        environment
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <button className="bg-[#0020F1] font-bold text-white rounded-lg p-2 w-[60%] lg:w-[30%] md:px-7 md:py-4 transition ease-linear delay-150 hover:bg-[#080E7F] duration-300">
                            Our Services
                        </button>
                        <button className="text-white font-bold bg-transparent rounded-lg p-2 w-[60%] lg:w-[30%] md:px-11 md:py-[13px] border-solid border-2 border-white transition ease-linear hover:bg-[#050794] hover:text-white duration-500">
                            Join us
                        </button>
                    </div>
                </div>
                <IoIosArrowForward
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="transition ease-out hover:scale-150"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}

export default HeroSection;
