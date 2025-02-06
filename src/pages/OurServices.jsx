import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import ServiceTiers from "../components/ServicePage/ServiceTiers";
import SellingPoint from "../components/ServicePage/SellingPoint";
import { useLocation } from "react-router-dom";
import Questions from "../components/shared/FAQ";
import AnimatedSection from "../components/shared/AnimatedSection";
import SearchEngineConfig from "../SEO";

const ServicePage = () => {
    const [activeTab, setActiveTab] = useState("beginners");
    const serviceTierRef = useRef(null);
    const location = useLocation();
    const { section } = location.state || {};

    useEffect(() => {
        if (section === "services") {
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
    }, [section]);

    const scrollToServices = () => {
        serviceTierRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <SearchEngineConfig
                title="Tolce Learning Services Offered"
                description="Learn more about Tolce Learning Hub and our mission to empower learners."
                url="https://tolcelearninghub.netlify.app/about"
                image="https://tolcelearninghub.netlify.app/about-image.jpg"
            />
            <div className="w-full">
                {/* Hero Section */}
                <div className="relative py-12 sm:py-20 w-full bg-gradient-to-r from-[#0020F1] to-[#080E7F] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30" />{" "}
                    {/* Overlay */}
                    <AnimatedSection className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <h1 className="font-bold text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full mb-5 md:mb-9 leading-12">
                            Empowering the Next Generation of Leaders with
                            Digital and Soft Skills
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-white leading-[1.5]">
                            Simplified, engaging, and self-paced learning for
                            today&apos;s digital world.
                        </p>
                        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                            <button className="w-[200px] h-[60px] border-2 border-white bg-white text-[#0020F1] font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors ease-in-out duration-300">
                                Join Now
                            </button>
                            <button
                                onClick={scrollToServices}
                                className="w-[200px] h-[60px] border-2 border-white text-white font-semibold text-lg rounded-lg shadow-md bg-transparent hover:bg-white/20 transition-colors ease-in-out duration-300"
                            >
                                Learn More
                            </button>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-[#F7F9FC] py-12 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                                Why Choose TOLCE Learning Hub?
                            </h2>
                            <SellingPoint />
                        </AnimatedSection>
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

                {/* frequently asked questions */}
                <AnimatedSection className="py-12 sm:py-20">
                    <Questions />
                </AnimatedSection>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default ServicePage;
