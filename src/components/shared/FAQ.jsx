import { useState } from "react";
import { faqData } from "../../data/faqItems";
import FaqItems from "../FaqItems";
import PropTypes from "prop-types";

function Questions() {
    const [currentIndex, setCurrentIndex] = useState(null);
    
    return (
        <div className="h-fit w-[90%] sm:w-[80%] mx-auto flex items-center justify-center">
            <div className={`w-full sm:w-[80%] mx-auto ${currentIndex !== null ? "min-h-[630px]" : ""}`}>
                <h1 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                    Frequently Asked Questions
                </h1>
                <p className="text-base xl:text-lg text-center mb-8">
                    Everything you need to know about the product and billing
                </p>
                {faqData.map(({ id, question, answer }) => {
                    return (
                        <FaqItems
                            key={id}
                            question={question}
                            answer={answer}
                            index={id}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Questions;

Questions.propTypes = {
    currentIndex: PropTypes.number,
    setCurrentIndex: PropTypes.func,
};
