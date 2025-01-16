import { useEffect, useState } from "react";
import { values } from "../data/serviceData";
import YoutubeVideo from "./YoutubeVideo";
import AnimatedSection from "./shared/AnimatedSection";

function MissionAndValues() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(currentIndex, "entered here");
    }, [currentIndex]);

    function highlightValue(id) {
        setCurrentIndex(id);
        console.log(id, "I am here");
    }

    function removeHighlight() {
        setCurrentIndex("");
    }

    return (
        <div className="font-medium flex flex-col lg:flex-row lg:gap-[19px]">
            <AnimatedSection className="flex-1 py-20 lg:pl-16 lg:pr-4 mx-auto w-[90%] lg:w-full">
                <h1 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px]">
                    The Road We are on
                </h1>
                <h5 className="text-base xl:text-lg text-justify">
                    Our mission is to build a community of lifelong learners who
                    are exceptionally skillful, effective in their personal and
                    professional lives while using acquired skills to solve
                    real-world problems. We are raising a new generation of
                    intellectually sound youths who are well equipped with the
                    required skills to solve global problems and make massive
                    impact in their communities. This is done by taking a
                    simplified and interesting approach towards digital skills
                    courses, getting exposed to critical soft skills while
                    developing leadership and problem-solving skills through
                    community outreaches.
                </h5>
                <div className="lg:flex items-center justify-center mt-10">
                    <YoutubeVideo
                        videoFrameClass={"w-full xl:w-[80%] bg-black mx-auto"}
                    />
                </div>
            </AnimatedSection>
            <div className="py-20 bg-[#0C111D] lg:px-10 flex-1 flex flex-col mx-auto">
                <AnimatedSection className="w-[90%] mx-auto lg:w-full">
                    <h1 className="font-semibold text-white text-2xl lg:text-4xl pb-[10px] xl:text-[40px]">
                        The Values that Drive Us
                    </h1>
                    <div className="flex flex-col gap-3">
                        {values.map(({ id, Icon, value, description }) => {
                            return (
                                <div
                                    tabIndex={0}
                                    onMouseEnter={() => highlightValue(id)}
                                    onMouseLeave={removeHighlight}
                                    key={id}
                                    className={`flex flex-col lg:flex-row items-center gap-[15px] p-4 transition-all duration-300 rounded-lg ${
                                        currentIndex === id
                                            ? "bg-white text-[#141414] scale-105"
                                            : "bg-transparent text-white"
                                    }`}
                                >
                                    <div
                                        className={` text-[#141414] rounded-full p-2 transition-all duration-300 ${
                                            currentIndex === id
                                                ? "bg-[#0020f1] text-white"
                                                : "bg-white text-[#141414]"
                                        }`}
                                    >
                                        <Icon size={30} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[19px]">
                                            {value}
                                        </h4>
                                        <p className="pt-[10px] font-medium">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

export default MissionAndValues;
