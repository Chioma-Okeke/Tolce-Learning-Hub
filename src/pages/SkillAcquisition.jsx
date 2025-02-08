import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/shared/AnimatedSection";
import { useNavigate } from "react-router-dom";
import Modal from "../components/reusables/Modal";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsLocked } from "../store/lockScreenSlice";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const skillHighlights = [
    {
        title: "Technical Skills",
        skills: ["Excel", "Power BI", "Data Analysis", "Presentation Tools"],
    },
    {
        title: "Soft Skills",
        skills: [
            "Communication",
            "Teamwork",
            "Problem-Solving",
            "Critical Thinking",
        ],
    },
];

const programBenefits = [
    {
        icon: "🎯",
        title: "Competitive Edge",
        description:
            "Comprehensive skill development for modern workplace demands",
    },
    {
        icon: "💼",
        title: "Career Readiness",
        description:
            "Balanced approach to technical and interpersonal skill growth",
    },
    {
        icon: "🚀",
        title: "Professional Development",
        description:
            "Preparing students for dynamic and evolving work environments",
    },
];

const SkillAcquisitionPage = () => {
    const navigate = useNavigate();
    const [showEnrollModal, setShowEnrollModal] = useState(false);
    const [showEnrollForm, setShowEnrollForm] = useState(false);
    const isLocked = useSelector((state) => state.lockScreen.isLocked);
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

    function navigateToServiceTiers() {
        navigate("/services");
    }

    const openEnrollmentModal = () => {
        setShowEnrollModal(true);
        dispatch(setIsLocked(true));
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-gradient-to-r from-[#0020F1] to-[#080E7F] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30" />
                <AnimatedSection>
                    <div className="relative z-10 text-center px-4">
                        <h1  className="font-bold text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full mb-5 md:mb-9 leading-12">
                            Skill Acquisition Program
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-white leading-[1.5]">
                            Empowering Students with Comprehensive Technical and
                            Soft Skills
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Skills Overview Section */}
            <section className="py-16 bg-white">
                <AnimatedSection>
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                            Our Skill Development Approach
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {skillHighlights.map((category, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-8 rounded-lg"
                                >
                                    <h3 className="text-2xl font-bold text-blue-600 mb-6">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <li
                                                    key={skillIndex}
                                                    className="flex items-center text-black"
                                                >
                                                    <span className="mr-3 text-blue-600">
                                                        ✓
                                                    </span>
                                                    {skill}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Program Benefits Section */}
            <section className="py-16 bg-gray-50">
                <AnimatedSection>
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                            Program Benefits
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {programBenefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-5xl mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-black">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Detailed Description Section */}
            <section className="py-16 bg-white">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                            Holistic Skill Development
                        </h2>
                        <div className="space-y-6 text-lg text-black">
                            <p>
                                Students are gaining a competitive edge through
                                our holistic skill acquisition programs that
                                combine technical and soft skills. By learning
                                tools like Excel and Power BI, they enhance
                                their ability to analyze and present data
                                effectively, equipping them for data-driven
                                decision-making in any industry.
                            </p>
                            <p>
                                Beyond the technical skills, our programs
                                emphasize critical soft skills such as
                                communication, teamwork, problem-solving,
                                presentation, and critical thinking.
                            </p>
                            <p>
                                Incorporating these social and interpersonal
                                skills into the learning process ensures that
                                students are not just job-ready but also capable
                                of thriving in dynamic workplace environments.
                                They learn to collaborate effectively, present
                                ideas with confidence, and navigate professional
                                relationships, creating a balanced foundation
                                for long-term career success.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-[#0020F1] to-[#080E7F] py-20">
                <AnimatedSection>
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Start Your Skill Journey
                        </h2>
                        <p className="text-xl text-white mb-8">
                            Transform your career with our comprehensive skill
                            acquisition program
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={openEnrollmentModal}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors ease-in-out duration-500"
                            >
                                Enroll Now
                            </button>
                            <button
                                onClick={navigateToServiceTiers}
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors ease-in-out duration-500"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {showEnrollModal && (
                <Modal
                    closeModal={() => {
                        setShowEnrollModal(false);
                        dispatch(setIsLocked(false));
                    }}
                >
                    <AnimatePresence>
                        <div
                            // initial={{ x: "100%", opacity: 0 }}
                            // animate={{ x: 0, opacity: 1 }}
                            // exit={{ x: "-100%", opacity: 0 }}
                            // transition={{ duration: 0.5 }}
                            className="w-[80%] lg:w-[600px] h-fit mx-auto bg-white shadow-xl rounded-xl relative p-5 md:p-10 flex flex-col items-center justify-center"
                        >
                            <IoClose
                                onClick={() => {
                                    setShowEnrollModal(false);
                                    dispatch(setIsLocked(false));
                                    setShowEnrollForm(false)
                                }}
                                size={25}
                                cursor={"pointer"}
                                className="absolute right-2 top-2 mb-11 transition ease-out hover:text-[#0020F1]"
                            />
                            {!showEnrollForm ? (
                                <motion.div
                                    initial={{ x: "15%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "-15%", opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                                        Select a Package
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button onClick={setShowEnrollForm(true)} className="bg-white text-[#0020F1] border-[#0020F1] border-2 shadow-md px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#0020F1] hover:text-white transition-colors ease-in-out duration-500">
                                            Student Package
                                        </button>
                                        <button onClick={setShowEnrollForm(true)} className="bg-white text-[#0020F1] border-[#0020F1] border-2 shadow-md px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#0020F1] hover:text-white transition-colors ease-in-out duration-500">
                                            Professional Package
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ x: "15%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "-15%", opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center justify-center"
                                >
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSf1f1A-nd8tE0fDzLi7tqBKbXg4Zxz6KcokHkj1JRaQhXp8Mw/viewform?embedded=true"
                                        width="640"
                                        height="500"
                                        frameborder="0"
                                        marginheight="0"
                                        marginwidth="0"
                                    >
                                        <div className="w-14 animate-pulse h-14 rounded-full"></div>
                                    </iframe>
                                </motion.div>
                            )}
                        </div>
                    </AnimatePresence>
                </Modal>
            )}

            {/* footer section */}
            <Footer />
        </div>
    );
};

export default SkillAcquisitionPage;
