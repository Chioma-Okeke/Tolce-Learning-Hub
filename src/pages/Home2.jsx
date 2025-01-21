import React, { useEffect } from "react";
import {
    BiBook,
    BiUserPlus,
    BiTime,
    BiSupport,
    BiTrophy,
    BiGroup,
    BiRocket,
    BiCheckCircle,
} from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import LearnMoreImage from "../assets/Hero/focusing-image.png";
import { useNavigate } from "react-router-dom";
import beginnerImage from "../assets/outreach-1.jpg";
import intermediateImage from "../assets/skill-acquisition-1.jpg";
import { programData } from "../data/programData";
import { motion, useAnimation } from "framer-motion";
import AnimatedSection from "../components/shared/AnimatedSection";
import Counter from "../components/reusables/Counter";

const features = [
    {
        icon: <BiTime className="w-12 h-12 text-[#0020F1]" />,
        title: "Flexible Learning",
        description:
            "Learn at your own pace with our flexible scheduling options",
    },
    {
        icon: <BiUserPlus className="w-12 h-12 text-[#0020F1]" />,
        title: "Expert Instructors",
        description:
            "Learn from industry professionals with years of experience",
    },
    {
        icon: <BiGroup className="w-12 h-12 text-[#0020F1]" />,
        title: "10,000+ Children Reached",
        description:
            "Our programs have inspired thousands of children worldwide",
        isCounter: true,
        count: 10000,
    },
    {
        icon: <BiTrophy className="w-12 h-12 text-[#0020F1]" />,
        title: "5,000+ Students Trained",
        description:
            "Equipping learners with the skills to thrive in their careers",
        isCounter: true,
        count: 5000,
    },
];

const programs = [
    {
        title: "Digital Marketing",
        description:
            "Master the art of digital marketing with our comprehensive program",
        image: "/api/placeholder/400/300",
    },
    {
        title: "Web Development",
        description: "Learn to build modern web applications from scratch",
        image: "/api/placeholder/400/300",
    },
    {
        title: "Data Analytics",
        description:
            "Unlock insights from data with advanced analytical techniques",
        image: "/api/placeholder/400/300",
    },
];

const testimonials = [
    {
        quote: "The program transformed my career prospects completely.",
        name: "Sarah Johnson",
        role: "Digital Marketing Specialist",
        image: "/api/placeholder/80/80",
    },
    {
        quote: "Best investment I've made in my professional development.",
        name: "Michael Chen",
        role: "Web Developer",
        image: "/api/placeholder/80/80",
    },
];

// Counter Component


const LandingPage = () => {
    const navigate = useNavigate();
    const [ref, inView] = useInView();

    const mainControls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView, mainControls]);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    function navigateToAbout() {
        navigate("/about");
    }

    function navigateToService(program) {
        navigate("/outreaches", {
            state: {
                program: `${program}`,
                section: "services",
            },
        });
    }

    return (
        <div className="w-full">
            {/* Hero Section */}

            <section className="">
                <HeroSection />
            </section>

            {/* About Us Section */}
            <div className="bg-[#F7F9FC] py-20">
                <AnimatedSection>
                    <motion.div
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                transition: { duration: 0.7 },
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center "
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-[#333333] leading-tight">
                                Who We Are
                            </h2>
                            <p className="mt-6 text-lg text-[#555555] leading-relaxed">
                                TOLCE Learning Hub is dedicated to equipping
                                individuals with the skills they need to thrive
                                in a digital world. Our comprehensive programs
                                combine practical knowledge with hands-on
                                experience, ensuring our learners are prepared
                                for real-world challenges.
                            </p>
                            <button
                                onClick={navigateToAbout}
                                className="mt-8 px-8 py-3 bg-[#0020F1] text-white font-semibold rounded-lg hover:bg-[#080E7F] transition-colors ease-in-out duration-500"
                            >
                                Learn More About Us
                            </button>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={LearnMoreImage}
                                alt="Team collaboration"
                                loading="lazy"
                                className="w-full h-[400px] rounded-2xl shadow-lg bg-white object-cover object-center"
                            />
                        </div>
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Services Overview */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12 leading-tight">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {["Children Outreaches", "Skill Acquisition"].map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="bg-white rounded-xl shadow-lg relative"
                            >
                                <img
                                    src={
                                        index === 0
                                            ? beginnerImage
                                            : intermediateImage
                                    }
                                    alt={
                                        index === 0
                                            ? "children outreach"
                                            : "skill acquisition"
                                    }
                                    loading="lazy"
                                    className="bg-white object-cover object-center w-full max-h-[402px]"
                                />
                                <div className="py-8 px-4 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">
                                        {program.charAt(0).toUpperCase() +
                                            program.slice(1)}
                                    </h3>
                                    <p className="text-[#555555] mb-6">
                                        {index === 0
                                            ? "Empowering students with technical expertise and essential soft skills to excel in data-driven decision-making and thrive in dynamic workplace environments."
                                            : "Empowering students with technical expertise and essential soft skills to excel in data-driven decision-making and thrive in dynamic workplace environments."}
                                    </p>
                                    <button
                                        onClick={() =>
                                            navigateToService(program)
                                        }
                                        className="px-6 py-3 w-[136px] bg-[#0020F1] text-white font-semibold rounded-lg hover:bg-[#080E7F] transition-colors ease-in-out duration-500"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us with Counters */}
            <AnimatedSection className="bg-white py-20 border-t border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="text-center p-6"
                            >
                                <div className="inline-block p-4 bg-[#EAF6F2] rounded-full mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-2">
                                    {feature.isCounter ? (
                                        <Counter number={feature.count} />
                                    ) : (
                                        feature.title
                                    )}
                                </h3>
                                <p className="text-[#555555]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Featured Programs */}
            <div className="bg-[#F7F9FC] py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                        Our Popular Programs
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden "
                            >
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-[#555555] mb-4">
                                        {program.description}
                                    </p>
                                    <button className="w-full py-3 bg-[#1D976C] text-white font-semibold rounded-lg hover:bg-[#168c5f] transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <AnimatedSection className="py-20 h-fit">
                <div className="mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                        What Our Students Say
                    </h2>
                    <div>
                        <Testimonials />
                    </div>
                </div>
            </AnimatedSection>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-[#0020F1] to-[#080E7F] py-20">
                <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Join thousands of learners who have transformed their
                        careers with us.
                    </p>
                    <button className="px-8 py-4 bg-white text-[#0020F1] font-semibold text-lg rounded-lg transition-colors ease-linear hover:bg-[#0020F1] hover:text-white duration-500">
                        Get Started Today
                    </button>
                </AnimatedSection>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default LandingPage;
