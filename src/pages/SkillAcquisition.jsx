import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/shared/AnimatedSection";
import { useNavigate } from "react-router-dom";

const SkillAcquisitionPage = () => {
    const navigate = useNavigate()
    const skillHighlights = [
        {
            title: "Technical Skills",
            skills: [
                "Excel",
                "Power BI",
                "Data Analysis",
                "Presentation Tools",
            ],
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

    useEffect(()=> {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth"
        })
    }, [])

    function navigateToServiceTiers () {
        navigate("/services")
    }

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-gradient-to-r from-[#0020F1] to-[#080E7F] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30" />
                <AnimatedSection>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Skill Acquisition Program
                        </h1>
                        <p className="text-2xl text-white max-w-3xl mx-auto">
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
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors ease-in-out duration-500">
                                Enroll Now
                            </button>
                            <button onClick={navigateToServiceTiers} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors ease-in-out duration-500">
                                Learn More
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* footer section */}
            <Footer />
        </div>
    );
};

export default SkillAcquisitionPage;
