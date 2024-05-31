/* eslint-disable react/prop-types */
// import React from "react";
import Image from "../assets/serviceImage.jpeg";
import { serviceData } from "../data/serviceData";
import { motion } from "framer-motion";

function Service({ title }) {
    return (
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-5">
                <h1 className="font-bold mb-2 text-2xl my-6 lg:text-4xl">
                    {title}
                </h1>
                <p className="text-base sm:text-lg">
                    We currently focus on three (3)major arears
                </p>
            </div>
            <div>
                <img className="hidden md:block w-full " src={Image} alt="" />
                <div className="grid grid-row-3 md:grid-cols-3 gap-4 lg:grid-rows-none md:mt-[-200px] lg:mt-[-250px]">
                    {serviceData.map(({ id, Icon, title, description }) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.9 }}
                            key={id}
                            className="p-6 bg-[#F9FAFB] pb-10 lg:pb-16 md:p-4"
                        >
                            <div className="bg-[#61DB99] rounded-lg w-fit p-2 mb-12">
                                <Icon size={30} color="white" />
                            </div>
                            <h1 className="font-bold text-lg text-[#141414] mb-2">
                                {title}
                            </h1>
                            <p className="lg:text-lg">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
