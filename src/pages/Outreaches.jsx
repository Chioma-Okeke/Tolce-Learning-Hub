import React, { useEffect, useRef, useState } from "react";
// import image from "../assets/outreach-1.jpg";
import videoSrc from "../assets/outreaches/outreach-hero-video.mp4";
// import videoEmpowerment from "../assets/outreaches/outreach-section-video.mp4";
import { useDispatch } from "react-redux";
import { setTransparentNav } from "../store/navSlice";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Counter from "../components/reusables/Counter";
import AnimatedSection from "../components/shared/AnimatedSection";
import { galleryCategoriesImages } from "../data/serviceData";
import Modal from "../components/reusables/Modal";
import { GrNext, GrPrevious } from "react-icons/gr";

const stats = [
    { number: 10000, label: "Children Reached" },
    { number: 200, label: "Outreach Events Organized" },
    { number: 5000, label: "Volunteers Engaged" },
];

function Outreaches() {
    const [animate, setAnimate] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const dispatch = useDispatch();
    const [visibleImagesLimit, setVisibleImagesLimit] = useState(4);
    const [currentExpandedImage, setCurrentExpandedImage] = useState("");
    const [focusedIndex, setFocusedIndex] = useState(1);

    const expandedImage = galleryCategoriesImages[focusedIndex];

    useEffect(() => {
        document.body.style.overflow = isLocked ? "hidden" : "auto";

        return () => (document.body.style.overflow = "auto");
    }, [isLocked]);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });

        if (window.innerWidth > 1024) {
            setVisibleImagesLimit(6);
        }
    }, []);

    const revealPageContent = () => {
        setAnimate(true);
        dispatch(setTransparentNav(false));
        setTimeout(() => {
            console.log("I ran");
            setIsLocked(false);
        }, 2000);
    };

    function handlePrevious() {
        setFocusedIndex((prevIndex) =>
            prevIndex === 1 ? galleryCategoriesImages.length - 1 : prevIndex - 1
        );
    }

    function handleNext() {
        setFocusedIndex((prevIndex) =>
            prevIndex === galleryCategoriesImages.length - 1 ? 0 : prevIndex + 1
        );
    }

    function loadFullImageList(desktopLimit = 6, mobileLimit = 4) {
        const limit = window.innerWidth > 1024 ? desktopLimit : mobileLimit;

        setVisibleImagesLimit((prevLimit) =>
            prevLimit === galleryCategoriesImages.length
                ? limit
                : galleryCategoriesImages.length
        );
    }

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
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-inter">
                                    Making a Difference Together
                                </h1>
                                <p className="text-xl sm:text-3xl lg:text-4xl text-white font-inter">
                                    Explore moments from our impactful community
                                    outreach programs.
                                </p>
                            </div>
                            {galleryCategoriesImages &&
                                galleryCategoriesImages.length > 0 && (
                                    <button
                                        onClick={revealPageContent}
                                        className="w-[200px] h-[60px] border-2 text-white font-semibold text-lg lg:text-2xl rounded-lg shadow-md hover:shadow-white shadow- transition-colors"
                                    >
                                        Explore
                                    </button>
                                )}
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
                    <section className="py-12 sm:py-20 bg-[#F7F9FC]">
                        <AnimatedSection>
                            <div className="max-w-7xl mx-auto px-4">
                                <h2 className="font-semibold text-2xl lg:text-4xl mb-12 lg:py-6 xl:text-[40px] text-center">
                                    Our Impact in Numbers
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="text-center"
                                        >
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
                        </AnimatedSection>
                    </section>

                    {/* Gallery Section */}
                    <section className="py-12 sm:py-20">
                        <AnimatedSection>
                            <div className="max-w-7xl mx-auto px-4">
                                <h2 className="font-semibold text-2xl lg:text-4xl lg:py-6 xl:text-[40px] mb-12 text-center">
                                    Gallery of Our Activities
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    <AnimatePresence>
                                        {galleryCategoriesImages
                                            .slice(0, visibleImagesLimit)
                                            .map((image, imageIndex) => (
                                                <motion.div
                                                    key={imageIndex}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.9,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        scale: 0.9,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="relative group overflow-hidden rounded-lg"
                                                >
                                                    <img
                                                        onClick={() => setFocusedIndex(imageIndex)}
                                                        src={image.imageLink}
                                                        alt={`${image.title} ${
                                                            imageIndex + 1
                                                        }`}
                                                        className="cursor-pointer w-full h-[225px] object-cover transition-transform duration-300 hover:scale-110"
                                                    />
                                                    {/* <div className="cursor-pointer absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="text-white text-lg font-semibold">
                                                        View More
                                                    </span>
                                                </div> */}
                                                </motion.div>
                                            ))}
                                    </AnimatePresence>
                                </div>
                                {
                                    <div className="pt-10 flex justify-center">
                                        <motion.button
                                            onClick={() => loadFullImageList()}
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-white px-8 py-3 rounded-lg font-semibold text-lg w-fit bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300"
                                        >
                                            {visibleImagesLimit ===
                                            galleryCategoriesImages.length
                                                ? "Collapse"
                                                : "Load More"}
                                        </motion.button>
                                    </div>
                                }
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Featured Story Section */}
                    {/* <section className="relative h-[500px]">
                        <AnimatedSection className="h-full">
                            <div className="h-full">
                                <video
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover object-center -z-10 background-video"
                                >
                                    <source
                                        src={videoEmpowerment}
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10">
                                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                            Empowering Children in Rural
                                            Communities
                                        </h2>
                                        <p className="text-lg sm:text-xl text-white mb-6">
                                            How our skill training programs are
                                            changing lives.
                                        </p>
                                        <button className="text-white px-8 py-3 rounded-lg font-semibold text-lg w-fit bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section> */}

                    {/* Call-to-Action Section */}
                    <section className="bg-gradient-to-r from-[#0020F1] to-[#080E7F] py-12 sm:py-20">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Be a Part of the Change
                            </h2>
                            <p className="text-lg sm:text-xl text-white mb-8">
                                Join our mission to empower communities through
                                impactful outreach.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-[#0020F1] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors ease-in-out duration-300">
                                    Volunteer With Us
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors ease-in-out duration-300">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </section>

                    {focusedIndex !== 0 && (
                        <Modal closeModal={() => setFocusedIndex(0)}>
                            <div className="flex flex-col justify-center items-center gap-10">
                                <img
                                    onClick={() => setFocusedIndex(0)}
                                    src={expandedImage.imageLink}
                                    alt=""
                                    className=" w-[90%] md:w-[60%] min-h-[80%] md:h-[70%] object-cover "
                                />
                                <div className="md:hidden flex items-center justify-center text-white">
                                    <button
                                        onClick={handlePrevious}
                                        aria-label="Previous Member"
                                        className=""
                                    >
                                        <GrPrevious size={28} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        aria-label="Next Member"
                                        className=""
                                    >
                                        <GrNext size={28} />
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    )}

                    {/* footer */}
                    <Footer />
                </div>
            )}
        </main>
    );
}

export default Outreaches;
