import React from "react";
import { individualServiceData } from "../data/serviceData";
import {
    motion,
    useInView,
    useAnimate,
    useAnimation,
    useScroll,
} from "framer-motion";

function OurService() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div>
            <div className="w-[60%] mx-auto text-center mb-12">
                <h1 className="font-bold text-[#0020F1] text-lg lg:text-2xl">
                    Our Services
                </h1>
                <p className="text-[#475467] lg:text-lg">
                    We are building a community of students who are life-long
                    learners by taking a simplified and interesting approach
                    towards self-paced digital skills courses, getting exposed
                    to critical soft skills while developing leadership and
                    problem solving skills through orphanage and public school
                    outreaches. We currently focus on three (3) major areas
                </p>
            </div>
            {individualServiceData.map(
                ({ id, src, Icon, title, description }) => {
                    return id % 2 === 0 ? (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 75 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            animate={mainControls}
                            transition={{ duration: 0.6 }}
                            key={id}
                            className="md:grid md:grid-cols-2 mb-8 md:shadow-lg xl:shadow-none transition ease-out xl:hover:shadow-lg max-w-[1440px] mx-auto"
                        >
                            <img src={src} alt="" className="hidden md:block" />
                            <div className="mx-auto md:border-none md:bg-white md:mb-0 md:rounded-none md:shadow-none border border-solid border-[#D0D5DD] p-5 bg-[#F9FAFB] rounded-lg shadow-lg ">
                                <div className="bg-[#0020F11A] rounded-lg w-fit p-2 mb-12">
                                    <Icon size={30} color="#0020F1" />
                                </div>
                                <h1 className="font-bold lg:text-lg">
                                    {title}
                                </h1>
                                <p className="lg:text-lg">{description}</p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 75 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            animate={mainControls}
                            transition={{ duration: 0.6 }}
                            key={id}
                            className="md:grid md:grid-cols-2 mb-8 md:shadow-lg xl:shadow-none transition ease-out xl:hover:shadow-lg max-w-[1440px] mx-auto"
                        >
                            <div className="mx-auto md:border-none md:bg-white md:mb-0 border md:rounded-none md:shadow-none border-solid border-[#D0D5DD] p-5 bg-[#F9FAFB] rounded-lg shadow-lg ">
                                <div className="bg-[#0020F11A] rounded-lg w-fit p-2 mb-12">
                                    <Icon size={30} color="#0020F1" />
                                </div>
                                <h1 className="font-bold lg:text-lg">
                                    {title}
                                </h1>
                                <p className="lg:text-lg">{description}</p>
                            </div>
                            <img src={src} alt="" className="hidden md:block" />
                        </motion.div>
                    );
                }
            )}
        </div>
    );
}

export default OurService;
