/* eslint-disable react/prop-types */
// import React from "react";
import Image from "../assets/Hero/focusing-image.png";
import { serviceData } from "../data/serviceData";
import { motion } from "framer-motion";

function Service({ title }) {
    return (
        <div className="w-[90%] mx-auto">
            <div className="text-center mb-5">
                <h1 className="font-semibold text-2xl lg:text-4xl my-6 xl:text-[40px]">
                    {title}
                </h1>
                <p className="text-base font-medium text-[#475467] lg:text-lg xl:text-[18px]">
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
                            <h1 className="font-bold text-lg lg:text-2xl text-[#141414] mb-2">
                                {title}
                            </h1>
                            <p className="text-lg lg:text-xl">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
