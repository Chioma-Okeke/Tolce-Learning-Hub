// import React from "react";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import backgroundPicture from "../assets/backgroundpattern.svg";
import YoutubeVideo from "../components/YoutubeVideo";
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import MissionAndValues from "../components/MissionAndValues";
import Team from "../assets/Hero/Core_values_3.png";
import GetStarted from "../components/GetStarted";

function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 664);
        }

        handleResize();

        window.addEventListener("reszie", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative">
            <section className="w-[90%] mx-auto my-4 pt-4 pb-8">
                <div className="w-full flex flex-col lg:flex-row lg:items-center">
                    <h1 className="text-[28px] lg:text-4xl xl:text-5xl font-bold lg:w-[40%] lg:pl-10">
                        Why we exist?
                    </h1>
                    <p className="text-base font-medium text-[#475467] xl:text-lg text-justify lg:w-[60%]">
                        There is a wide skill gap between the Classroom and
                        Corporate environment. We believe in the transformative
                        power of acquiring marketable skills to solve pressing
                        global challenges in the 21st century. By exposing
                        students to the required knowledge, tools and skills,
                        they become empowered to be valuable to organizations
                        and the world at large.
                    </p>
                </div>
            </section>
            <section className="bg-[#F6F9FE] lg:bg-none">
                <div
                    style={{
                        backgroundImage: !isSmallScreen
                            ? `url(${backgroundPicture})`
                            : "none",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                    className={`flex flex-col-reverse lg:flex-row items-center w-[90%] lg:w-full h-[450px] 2xl:h-[550px] mx-auto relative ${
                        isSmallScreen ? "bg-none h-fit gap-5 py-10" : "bg-cover"
                    }`}
                >
                    <div className="flex-1 lg:py-12 lg:pl-16 lg:pr-4 lg:bg-white">
                        <p className="text-base font-medium text-[#475467] xl:text-lg text-justify">
                            <span className="font-semibold text-xl lg:text-2xl ">
                                TOLCE Learning Hub
                            </span>{" "}
                            is deeply committed to being a key player in solving
                            Africa’s Human Capital crisis. Through innovative
                            learning initiatives, we aim to equip youths with
                            the skills, knowledge, confidence, and opportunities
                            needed to thrive in today’s rapidly evolving world.
                            Founded in 2023 by Tolulope Esan, TOLCE helps to
                            bride the wide skill gap between classroom and
                            corporate world.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src={Team}
                            alt=""
                            className="bg-white object-cover object-center lg:w-[80%] mx-auto lg:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-lg"
                        />
                    </div>
                    {/* <YoutubeVideo videoFrameClass="bg-black absolute bottom-14 md:bottom-0 left-1/2 -translate-x-1/2 left w-[80%] md:w-[680px] xl:w-[60%] h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-lg"/> */}
                </div>
            </section>
            {/* <section className="py-10">
                <Service title="Our Services" />
            </section> */}
            {/* <section className="bg-[#0020F1] sm:bg-transparent">
                <GetStarted />
            </section> */}
            <section className="lg:py-10">
                <MissionAndValues />
            </section>
            <section className="absolute w-full">
                <GetStarted hideStatistics={true} />
            </section>
            {/* <div className="w-[90%] mx-auto my-10">
                <JoinUs />
            </div> */}
            <footer className="bg-[#0C111D] pt-28 pb-10 lg:pb-16 mt-40">
                <Footer />
            </footer>
        </div>
    );
}

export default About;
