import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import { heroData } from "../data/homeData";
import { useEffect, useRef, useState } from "react";
import JoinUs from "../components/JoinUs";
import GetStarted from "../components/GetStarted";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Service from "../components/Service";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ConfirmationModal from "../components/ConfirmationModal";
import { PositionProvider } from "../components/PositionContext";
import BackToTop from "../components/BackToTop";

function Home() {
    console.log(heroData);
    const swiperRef = useRef(null);
    const [swiperInstane, setSwiperInstance] = useState(null);
    const [subscriptionConfirmed, setSubscriptionConfirmed] =
        React.useState(false);

    useEffect(() => {
        if (swiperRef.current) {
            setSwiperInstance(swiperRef.current);
        }
    }, []);

    const handleSlideChange = (swiper) => {
        if (swiper.activeIndex === heroData.length) {
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
        <div className="relative">
            <BackToTop />
            <Nav />
            <section className="">
                <IoIosArrowBack
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="hidden transition ease-out hover:scale-150 z-20"
                    onClick={handlePrev}
                />
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
                    {heroData.map(({ id }) => (
                        <SwiperSlide
                            key={id}
                            className="relative w-full h-screen"
                        >
                            <HeroSection swiper={swiperInstane} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IoIosArrowForward
                    size={50}
                    color="white"
                    cursor={"pointer"}
                    className="hidden transition ease-out hover:scale-150 z-20"
                    onClick={handleNext}
                />
            </section>
            <section className="py-10">
                <Service title="Our focus areas" />
            </section>
            <section className="bg-[#0020F1]">
                <GetStarted />
            </section>
            <section className="my-16">
                <Testimonials />
            </section>
            <div className="w-[90%] mx-auto my-10">
                <JoinUs setSubscriptionConfirmed={setSubscriptionConfirmed} />
            </div>
            <footer className="bg-[#0C111D] py-16">
                <Footer />
            </footer>
            {subscriptionConfirmed && (
                <ConfirmationModal
                    setSubscriptionConfirmed={setSubscriptionConfirmed}
                    offset={{ x: 100, y: 50 }}
                />
            )}
        </div>
    );
}

export default Home;
