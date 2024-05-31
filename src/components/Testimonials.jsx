import React from "react";
import Image from "../assets/get-started/image1.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialData } from "../data/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

function Testimonials() {
    const swiperRef = React.useRef(null);
    const [swiperInstane, setSwiperInstance] = React.useState(null);

    React.useEffect(() => {
        if (swiperRef.current) {
            setSwiperInstance(swiperRef.current);
        }
    }, []);

    const handleSlideChange = (swiper) => {
        if (swiper.activeIndex === testimonialData.length) {
            swiper.slideToLoop(0, 0); // Transition to the first slide immediately
        }
    };

    function handlePrev() {
        swiperInstane?.slidePrev();
    }

    function handleNext() {
        swiperInstane?.slideNext();
    }

    return (
        <div className="flex items-center w-[90%] mx-auto gap-2">
            <div>
                <IoIosArrowBack
                    size={30}
                    className="transition ease-out hover:scale-150"
                    cursor={"pointer"}
                    onClick={handlePrev}
                />
            </div>
            <Swiper
                spaceBetween={0}
                speed={4000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect={"slide"}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                loop={true}
                className="mySwiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {testimonialData.map(({ id, message, name, cohort }) => (
                    <SwiperSlide key={id} className="relative w-full h-fit">
                        <div
                            key={id}
                            className="flex flex-col sm:flex-row min-w-full sm:w-[80%] mx-auto"
                        >
                            <img
                                src={Image}
                                alt=""
                                className="rounded-full sm:rounded-none w-[60%] sm:w-[40%] mx-auto"
                            />
                            <div className="py-4 px-4 sm:px-12 lg:px-16 flex flex-col justify-center">
                                <p className="text-md sm:text-lg md:text-xl lg:text-2xl leading-6 mb-3">
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
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <IoIosArrowForward
                    size={30}
                    className="transition ease-out hover:scale-150"
                    cursor={"pointer"}
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}

export default Testimonials;
