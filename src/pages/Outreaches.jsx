import React, { useEffect, useRef, useState } from "react";
import image from "../assets/outreach-1.jpg";
import videoSrc from "../assets/outreach-hero-video.mp4";
import videoEmpowerment from "../assets/outreach-section-video.mp4";
import { useDispatch } from "react-redux";
import { setTransparentNav } from "../store/navSlice";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Counter from "../components/reusables/Counter";

const stats = [
    { number: 10000, label: "Children Reached" },
    { number: 200, label: "Outreach Events Organized" },
    { number: 5000, label: "Volunteers Engaged" },
];

const galleryCategories = [
    {
        title: "Educational Workshops",
        images: [
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
        ],
    },
    {
        title: "Community Clean-Ups",
        images: [
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
        ],
    },
    {
        title: "Skill Training Programs",
        images: [
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
            "/api/placeholder/300/225",
        ],
    },
];

function Outreaches() {
    const [animate, setAnimate] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = isLocked ? "hidden" : "auto";

        return () => (document.body.style.overflow = "auto");
    }, [isLocked]);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const revealPageContent = () => {
        setAnimate(true);
        dispatch(setTransparentNav(false));
        setTimeout(() => {
            console.log("I ran");
            setIsLocked(false); // Unlock scroll after animation
        }, 2000); // Match animation duration
    };

    return (
        <main className="relative">
            <AnimatePresence mode="wait">
                {!animate && (
                    <motion.div
                        key="hero-section"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={`w-full h-screen relative z-10 bg-gray-400`}
                    >
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover object-center absolute right-0 bottom-0 -z-20 background-video"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>

                        <div className="bg-black h-full absolute top-0 left-0 opacity-50 w-full -z-10"></div>
                        <div className="w-[90%] mx-auto max-w-[1440px] z-30 flex flex-col justify-center items-center h-full">
                            <div className="relative text-center mb-10">
                                <h1 className="text-5xl font-bold text-white mb-4 font-inter">
                                    Making a Difference Together
                                </h1>
                                <p className="text-2xl text-white font-inter">
                                    Explore moments from our impactful community
                                    outreach programs.
                                </p>
                            </div>
                            <button
                                onClick={revealPageContent}
                                className="w-[200px] h-[60px] border-2 text-white font-semibold text-lg lg:text-2xl rounded-lg shadow-md hover:shadow-white shadow- transition-colors"
                            >
                                Explore
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {animate && (
                <div
                    key="main-content"
                    className={`absolute top-0 w-full ${
                        animate ? "h-auto" : "h-0"
                    } bg-white`}
                >
                    {/* Highlights Section */}
                    <section className="py-16 bg-[#F7F9FC]">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                                Our Impact in Numbers
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-[#0020F1] mb-2">
                                            <Counter number={stat.number} />
                                        </div>
                                        <div className="text-base text-[#555555]">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="py-16">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                                Gallery of Our Activities
                            </h2>
                            {galleryCategories.map(
                                (category, categoryIndex) => (
                                    <div key={categoryIndex} className="mb-16">
                                        <h3 className="text-2xl font-bold text-[#333333] mb-6 border-t pt-8">
                                            {category.title}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                            {category.images.map(
                                                (image, imageIndex) => (
                                                    <div
                                                        key={imageIndex}
                                                        className="relative group overflow-hidden rounded-lg"
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${
                                                                category.title
                                                            } ${
                                                                imageIndex + 1
                                                            }`}
                                                            className="w-full h-[225px] object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <div className="cursor-pointer absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white text-lg font-semibold">
                                                                View More
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    {/* Featured Story Section */}
                    <section className="relative h-[400px]">
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover object-center -z-10 background-video"
                        >
                            <source src={videoEmpowerment} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10">
                            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Empowering Women in Rural Communities
                                </h2>
                                <p className="text-xl text-white mb-6">
                                    How our skill training programs are changing
                                    lives.
                                </p>
                                <button className="text-white px-8 py-3 rounded-lg font-semibold text-lg w-fit bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Call-to-Action Section */}
                    <section className="bg-gradient-to-r from-[#0020F1] to-[#080E7F] py-20">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Be a Part of the Change
                            </h2>
                            <p className="text-xl text-white mb-8">
                                Join our mission to empower communities through
                                impactful outreach.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 border-2 border-white bg-white text-[#0020F1] font-semibold text-lg rounded-lg shadow-md transition-colors ease-in-out hover:bg-transparent hover:text-white duration-500">
                                    Volunteer With Us
                                </button>
                                <button className="px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg shadow-md bg-transparent transition ease-linear hover:bg-white hover:text-[#0020F1] duration-500">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* footer */}
                    <Footer />
                </div>
            )}
        </main>
    );
}

export default Outreaches;
