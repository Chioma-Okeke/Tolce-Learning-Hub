import { useEffect, useRef, useState } from "react";
// import Image from "../assets/get-started/image1.png";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialData } from "../data/TestimonialData";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Banner from "./Banner";
// import { Autoplay, EffectFade } from "swiper/modules";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const testimonialRef = useRef([]);
    const intervalRef = useRef(null);
    const cardWidth = 300; // Adjust this based on your card width in pixels
    const totalWidth = testimonialData.length * 2 * cardWidth;

    const keyframes = {
        scroll: {
            "0%": { transform: "translateX(0)" },
            "100%": {
                transform: `translateX(-${
                    (100 * totalWidth) / window.innerWidth
                }%)`,
            },
        },
    };

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
        }, 5000);
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

    return (
        <div className="mx-auto md:w-[90%] max-w-[1200px] overflow-hidden">
            <div
                ref={containerRef}
                className="hidden md:flex overflow-x-auto gap-10 items-center testimonial-carousel h-[400px]"
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
                            onMouseEnter={() =>
                                currentIndex === index && setIsPaused(true)
                            }
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
            <div className="md:hidden">
                <Banner testimonialData={testimonialData} />
            </div>
        </div>
    );
}

export default Testimonials;
