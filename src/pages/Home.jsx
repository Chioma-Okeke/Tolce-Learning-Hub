// import React from "react";

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
import { testimonialData } from "../data/TestimonialData";

function Home() {
    console.log(heroData);
    const swiperRef = useRef(null);
    const [swiperInstane, setSwiperInstance] = useState(null);

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
    return (
        <div className="relative">
            <Nav />
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
                    <SwiperSlide key={id} className="relative w-full h-screen">
                        <HeroSection image={image} swiper={swiperInstane} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <section className="py-10">
                <Service title="Our focus areas" />
            </section>
            <section className="bg-[#0020F1]">
                <GetStarted />
            </section>
            {/* <Swiper
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
                <SwiperSlide className="my-16">
                    <Testimonials swiper={swiperInstane} />
                </SwiperSlide>
            </Swiper> */}
            <section className="my-16">
                <Testimonials />
            </section>
            <div className="w-[85%] mx-auto my-10">
                <JoinUs />
            </div>
            <footer className="bg-[#0C111D] py-16">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
