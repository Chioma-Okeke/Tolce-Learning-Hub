import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MissionAndValues from "../components/MissionAndValues";
import TeamMembers from "../components/AboutPage/TeamMembers";
import backgroundPicture from "../assets/backgroundpattern.svg";
import Team from "../assets/Hero/Core_values_3.png";
import AnimatedSection from "../components/shared/AnimatedSection";

function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 1024);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="relative">
            <AnimatedSection className="w-[90%] mx-auto py-10 md:py-20">
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
            </AnimatedSection>

            <section
                className="bg-[#F6F9FE] lg:bg-none"
                style={{
                    backgroundImage: !isSmallScreen
                        ? `url(${backgroundPicture})`
                        : "none",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <AnimatedSection
                    className={`max-w-[1800px] py-20 flex flex-col-reverse sm:flex-row items-center w-[90%] lg:w-full h-[450px] 2xl:h-[550px] mx-auto relative ${
                        isSmallScreen ? "bg-none h-fit gap-5" : "bg-cover h-fit"
                    }`}
                >
                    <div className="flex-1 lg:py-12 lg:pl-16 sm:pr-4 sm:bg-white">
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
                            bridge the wide skill gap between classroom and
                            corporate world.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src={Team}
                            alt="Our Team"
                            loading="lazy"
                            className="bg-white object-cover object-center lg:w-[80%] mx-auto lg:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-lg"
                        />
                    </div>
                </AnimatedSection>
            </section>

            <section>
                <MissionAndValues />
            </section>

            <div className="bg-gradient-to-r from-[#080E7F] to-[#0020F1] text-white">
                <AnimatedSection>
                    <TeamMembers />
                </AnimatedSection>
            </div>

            <Footer />
        </div>
    );
}

export default About;
