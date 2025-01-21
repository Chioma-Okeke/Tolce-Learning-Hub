import React, { useEffect, useRef, useState } from "react";
import {
    BiBook,
    BiUserPlus,
    BiAward,
    BiHeart,
    BiCheckCircle,
    BiCalendar,
    BiUser,
    BiBriefcase,
} from "react-icons/bi";
import Footer from "../components/Footer";
import ServiceTiers from "../components/ServicePage/ServiceTiers";
import SellingPoint from "../components/ServicePage/SellingPoint";
import { useLocation } from "react-router-dom";
import Questions from "../components/shared/FAQ";
import AnimatedSection from "../components/shared/AnimatedSection";

const ServicePage = () => {
    const [activeTab, setActiveTab] = useState("beginners");
    const serviceTierRef = useRef(null);
    const location = useLocation();
    const { program, section } = location.state || {};
    console.log(program);

    useEffect(() => {
        if (section === "services") {
            setActiveTab(program);
            serviceTierRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            window.scrollTo(0, {
                top: 0,
                behavior: "smooth",
            });
        }
    }, [section, program]);

    const scrollToServices = () => {
        serviceTierRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative py-20 w-full bg-gradient-to-r from-[#0020F1] to-[#080E7F] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
                <AnimatedSection className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-[60px] font-bold text-white leading-[1.2] font-['Inter']">
                        Empowering the Next Generation of Leaders with Digital
                        and Soft Skills
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-white leading-[1.5] font-['Inter']">
                        Simplified, engaging, and self-paced learning for
                        today's digital world.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                        <button className="w-[200px] h-[60px] border-2 border-white bg-white text-[#0020F1] font-semibold text-lg rounded-lg shadow-md transition-colors ease-in-out hover:bg-transparent hover:text-white duration-500">
                            Join Now
                        </button>
                        <button
                            onClick={scrollToServices}
                            className="w-[200px] h-[60px] border-2 border-white text-white font-semibold text-lg rounded-lg shadow-md bg-transparent transition ease-linear hover:bg-white hover:text-[#0020F1] duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                </AnimatedSection>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-[#F7F9FC] py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedSection>
                        <h2 className="text-4xl text-center font-semibold text-[#333333] leading-tight">
                            Why Choose TOLCE Learning Hub?
                        </h2>
                        <SellingPoint />
                    </AnimatedSection>
                    {/* <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/api/placeholder/600/400"
                            alt="Team learning"
                            className="w-full h-full object-cover"
                        />
                    </div> */}
                </div>
            </div>

            {/* Service Tiers Section */}
            <AnimatedSection>
                <div ref={serviceTierRef}>
                    <ServiceTiers
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
            </AnimatedSection>

            {/* Interactive Elements Section */}
            {/* <div className="bg-[#F7F9FC] py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <BiBook />, title: "Case Studies" },
                            { icon: <BiUserPlus />, title: "Role Plays" },
                            { icon: <BiBriefcase />, title: "Simulations" },
                            { icon: <BiHeart />, title: "Community Projects" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-white rounded-xl shadow-sm"
                            >
                                <div className="inline-block p-4 bg-[#EAF6F2] rounded-full mb-4">
                                    {React.cloneElement(item.icon, {
                                        className: "w-12 h-12 text-[#1D976C]",
                                    })}
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#555555]">
                                    Interactive learning experience through{" "}
                                    {item.title.toLowerCase()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Certification Section */}
            {/* <div className="bg-[#EAF6F2] py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <BiAward />, title: "Certification" },
                            { icon: <BiBriefcase />, title: "Career Services" },
                            { icon: <BiUserPlus />, title: "Alumni Community" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm"
                            >
                                <div className="mb-4 text-[#1D976C]">
                                    {React.cloneElement(item.icon, {
                                        className: "w-8 h-8",
                                    })}
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#555555]">
                                    Comprehensive support for your learning
                                    journey through our{" "}
                                    {item.title.toLowerCase()} program
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* frequently asked questions */}
            <AnimatedSection className="pb-20">
                <Questions />
            </AnimatedSection>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ServicePage;
