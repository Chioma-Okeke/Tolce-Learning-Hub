import { useEffect, useRef, useState } from "react";
// import Image from "../assets/get-started/image1.png";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialData } from "../data/TestimonialData";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import { Autoplay, EffectFade } from "swiper/modules";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const testimonialRef = useRef([]);
    const intervalRef = useRef(null);

    function scrollToCard(index) {
        const container = containerRef.current;
        if (container) {
            const containerWidth = container.offsetWidth; // Visible width of the container
            const cardWidth = container.scrollWidth / testimonialData.length; // Width of a single testimonial card

            // Calculate the scroll amount to center the current index item
            const scrollAmount =
                index * cardWidth - (containerWidth - cardWidth) / 2;

            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }

    function startAutoScroll() {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= testimonialData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000)
    }

    function stopAutoScroll() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    useEffect(() => {
        if (!isPaused) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        return () => stopAutoScroll();
    }, [isPaused]);

    useEffect(() => {
        scrollToCard(currentIndex);
    }, [currentIndex]);

    // const swiperRef = React.useRef(null);
    // const [swiperInstance, setSwiperInstance] = React.useState(null);

    // React.useEffect(() => {
    //     if (swiperRef.current) {
    //         setSwiperInstance(swiperRef.current);
    //     }
    // }, []);

    // const handleSlideChange = (swiper) => {
    //     if (swiper.activeIndex === testimonialData.length) {
    //         swiper.slideToLoop(0, 0); // Transition to the first slide immediately
    //     }
    // };

    // function handlePrev() {
    //     swiperInstance?.slidePrev();
    // }

    // function handleNext() {
    //     swiperInstance?.slideNext();
    // }

    return (
        <div className="mx-auto w-full max-w-[1300px] overflow-hidden">
            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-10 items-center testimonial-carousel h-[400px]"
            >
                {testimonialData.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        ref={(el) => {
                            if (el) {
                                testimonialRef.current[index] = el;
                            }
                        }}
                        className={`transition-opacity duration-500 ${
                            currentIndex === index
                                ? "opacity-100"
                                : "opacity-45"
                        }`}
                    >
                        <div
                            tabIndex={0}
                            onMouseEnter={() => currentIndex === index && setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex flex-col gap-4 text-lg p-6 rounded-lg shadow-lg border bg-white transition-opacity duration-500 ${
                                currentIndex === index
                                    ? "opacity-80 w-[610px] text-lg backdrop-blur-md"
                                    : "opacity-40 w-[505px] text-sm cursor-pointer hover:opacity-60"
                            }`}
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-[60%] sm:w-[20%] "
                                />
                                <div>
                                    <p className="font-bold">
                                        {testimonial.name}
                                    </p>
                                    <h2 className="font-semibold mb-4">
                                        {testimonial.cohort}
                                    </h2>
                                </div>
                            </div>
                            <p className="mb-2">{testimonial.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    // const swiperRef = React.useRef(null);
    // const [swiperInstance, setSwiperInstance] = React.useState(null);

    // React.useEffect(() => {
    //     if (swiperRef.current) {
    //         setSwiperInstance(swiperRef.current);
    //     }
    // }, []);

    // const handleSlideChange = (swiper) => {
    //     if (swiper.activeIndex === testimonialData.length) {
    //         swiper.slideToLoop(0, 0); // Transition to the first slide immediately
    //     }
    // };

    // function handlePrev() {
    //     swiperInstance?.slidePrev();
    // }

    // function handleNext() {
    //     swiperInstance?.slideNext();
    // }

    // return (
    //     <div className="flex items-center w-[90%] mx-auto gap-2">
    //         <div>
    //             <IoIosArrowBack
    //                 size={30}
    //                 className="transition ease-out hover:scale-150"
    //                 cursor={"pointer"}
    //                 onClick={handlePrev}
    //             />
    //         </div>
    //         <Swiper
    //             spaceBetween={0}
    //             speed={3000}
    //             autoplay={{ delay: 5000, disableOnInteraction: false }}
    //             effect={"slide"}
    //             fadeEffect={{ crossFade: true }}
    //             modules={[Autoplay, EffectFade]}
    //             loop={true}
    //             className="mySwiper"
    //             onSlideChange={(swiper) => handleSlideChange(swiper)}
    //             onSwiper={(swiper) => (swiperRef.current = swiper)}
    //         >
    //             {testimonialData.map(({ id, message, name, cohort }) => (
    //                 <SwiperSlide key={id} className="relative w-full h-fit">
    //                     <div
    //                         key={id}
    //                         className="flex flex-col sm:flex-row min-w-full sm:w-[80%] mx-auto"
    //                     >
    //                         <img
    //                             src={Image}
    //                             alt=""
    //                             className="rounded-full sm:rounded-none w-[60%] sm:w-[40%] mx-auto"
    //                         />
    //                         <div className="py-4 px-4 sm:px-12 lg:px-16 flex flex-col justify-center">
    //                             <p className="text-md sm:text-lg md:text-xl lg:text-2xl leading-6 mb-3 text-center md:text-left">
    //                                 {message}
    //                             </p>
    //                             <div>
    //                                 <div>
    //                                     <p className="font-semibold text-[#101828] text-sm lg:text-lg">
    //                                         {name}
    //                                     </p>
    //                                     <p className="font-light text-[#475467] text-xs lg:text-md">
    //                                         {cohort}
    //                                     </p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </SwiperSlide>
    //             ))}
    //         </Swiper>
    //         <div>
    //             <IoIosArrowForward
    //                 size={30}
    //                 className="transition ease-out hover:scale-150"
    //                 cursor={"pointer"}
    //                 onClick={handleNext}
    //             />
    //         </div>
    //     </div>
    // );
}

export default Testimonials;
