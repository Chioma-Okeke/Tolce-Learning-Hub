/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { heroData } from "../data/homeData";

function HeroSection() {
    const swiperRef = React.useRef(null);
    const [swiperInstane, setSwiperInstance] = React.useState(null);
    React.useEffect(() => {
        if (swiperRef.current) {
            setSwiperInstance(swiperRef.current);
        }
    }, []);

    const handleSlideChange = (swiper) => {
        if (swiper.activeIndex === heroData.length) {
            swiper.slideToLoop(0, 0);
        }
    };

    function handlePrev() {
        swiperInstane?.slidePrev();
    }

    function handleNext() {
        swiperInstane?.slideNext();
    }

    return (
        <div className="relative h-screen">
            <Swiper
                spaceBetween={0}
                speed={4000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect={"slide"}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                loop={true}
                className="mySwiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {heroData.map(({ id, image }) => (
                    <SwiperSlide
                        key={id}
                        className="relative w-full h-fit z-10"
                    >
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="w-full h-screen bg-cover bg-no-repeat bg-center"
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="bg-black h-full absolute top-0 left-0 opacity-50 w-full z-10"></div>
            <div className="w-[90%] mx-auto max-w-[1440px] z-20 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* <IoIosArrowBack
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="transition ease-out hover:scale-150 z-20"
                    onClick={handlePrev}
                /> */}
                <div className="ml-3 mt-5">
                    <h1 className="font-bold text-center md:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full lg:w-[80%] mb-5 md:mb-9 leading-12">
                        Bridging the gap between the Classroom and Corporate
                        environment
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <button className="w-[80%] sm:w-[60%] md:w-[200px] bg-[#0020F1] text-[13px] sm:text-base font-bold text-white rounded-lg p-2 md:px-7 md:py-4 transition ease-linear delay-150 hover:bg-[#080E7F] duration-300">
                            Join us
                        </button>
                    </div>
                </div>
                {/* <IoIosArrowForward
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="transition ease-out hover:scale-150 z-20"
                    onClick={handleNext}
                /> */}
            </div>
        </div>
    );
}

export default HeroSection;
