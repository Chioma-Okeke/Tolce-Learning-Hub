import { useState } from "react";
import { BiBook, BiCalendar, BiHeart, BiUser } from "react-icons/bi";
import { sellingPoints } from "../../data/serviceData";
import { motion } from "framer-motion";

function SellingPoint() {
    const [flippedCard, setFlippedCard] = useState("");

    return (
        <div>
            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-8 text-medium">
                {sellingPoints.map(({ Icon, title, message }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{
                            duration: 0.5,
                        }}
                        onPointerEnter={() => window.innerWidth >= 1024 && setFlippedCard(title)}
                        // onPointerLeave={() => window.innerWidth >= 1024 && setFlippedCard("")}
                        onClick={() => window.innerWidth < 1024 && setFlippedCard(flippedCard === title ? "" : title)}
                        // onBlur={() => window.innerWidth < 1024 && setFlippedCard("")}
                        tabIndex={0}
                        className={`sellingCard rounded-lg relative transition-transform ease-in-out duration-700 cursor-pointer w-full xl:w-[290px] h-[250px] ${
                            flippedCard === title ? "flip" : ""
                        }`}
                    >
                        <div className="selling-card-front bg-white absolute top-0 left-0 z-10 border rounded-lg flex items-center justify-center gap-4 flex-col w-full h-full">
                            <div className="bg-[#EAF6F2] rounded-full inline-block p-4">
                                <Icon className="w-12 h-12 text-[#0020F1]" />
                            </div>
                            <p className="sm:text-lg font-semibold text-[#333333]">
                                {title}
                            </p>
                        </div>
                        <div className="text-white rounded-lg selling-card-back absolute bottom-0 left-0 h-full w-full flex items-center">
                            <p className="px-4 text-lg">{message}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SellingPoint;
