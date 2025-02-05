/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { heroData } from "../data/homeData";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const swiperRef = React.useRef(null);
    const navigate = useNavigate()
    // const [swipeInstance, setSwiperInstance] = React.useState(null);
    // React.useEffect(() => {
    //     if (swiperRef.current) {
    //         setSwiperInstance(swiperRef.current);
    //     }
    // }, []);

    const handleSlideChange = (swiper) => {
        if (swiper.activeIndex === heroData.length) {
            swiper.slideToLoop(0, 0);
        }
    };

    function navigateToContact () {
        navigate("/contact")
    }

    // function handlePrev() {
    //     swipeInstance?.slidePrev();
    // }

    // function handleNext() {
    //     swipeInstance?.slideNext();
    // }

    return (
        <div className="relative h-fit">
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
                {heroData.map(({ id, image, text }) => (
                    <SwiperSlide key={id} className="relative w-full z-10">
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="w-full h-[800px]  md:h-screen bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/70 after:to-transparent"
                        >
                            <div className="w-[90%] mx-auto max-w-[1440px] z-20 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="ml-3 mt-5">
                                    <h1 className="font-bold text-center md:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full lg:w-[80%] mb-5 md:mb-9 leading-12">
                                        {text}
                                    </h1>
                                    <div className="flex flex-col md:flex-row items-center gap-3 mt-10">
                                        {/* <button className="w-[80%] sm:w-[60%] md:w-[200px] rounded-3xl text-[18px] sm:text-base font-bold text-white p-2 md:px-7 md:py-4 bg-[#0020F1]  transition ease-linear hover:bg-[#080E7F] duration-300">
                                            Join us
                                        </button> */}
                                        <button className="w-[200px] h-[60px] border-2 border-white bg-transparent text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#141414] hover:border-none transition-colors ease-in-out duration-500">
                                            Join Us
                                        </button>
                                        <button onClick={navigateToContact} className="w-[200px] h-[60px] text-white font-semibold text-lg rounded-lg shadow-md bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300">
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
