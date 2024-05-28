import React from "react";

import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import image from "../assets/dotPattern.svg";
import heroImage from "../assets/service-images/heroImage.png";
import { faqData } from "../data/faqItems";
import FaqItems from "../components/FaqItems";
import OurService from "../components/OurService";

function OurServices() {
    const [email, setEmail] = React.useState("");

    function handleChange(event) {
        console.log(email);
        setEmail(event.target.value);
        console.log(email);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
    }
    return (
        <div>
            <Nav />
            <section
                className="py-8 relative w-[90%] mx-auto my-4"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="relative max-w-[1440px] mx-auto">
                    <div className="md:absolute md:left-[7%] md:top-[10%] md:w-[80%] lg:left-[7%] lg:top-[21%] lg:w-[80%] xl:left-[18%] xl:top-[28%] xl:w-[80%]">
                        <h1 className="font-bold text-2xl w-full text-center text-[#101828] md:text-start md:text-4xl md:w-[80%] xl:text-5xl xl:w-[80%]">
                            Our services are curated to meet your goals
                        </h1>
                        <p className="text-base text-center md:text-start text-[#475467] md:w-[60%] my-6">
                            Explore limitless opportunities, gain insights, and
                            unlock your potential in every aspect of your career
                            journey..
                        </p>
                        <form
                            onSubmit={(event) => handleSubmit(event)}
                            className="w-full max-w-[600px] sm:w-[60%] flex flex-col items-center lg:flex-row md:items-start lg:items-center justify-center"
                        >
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="border border-solid border-[#D0D5DD] mb-4 lg:mr-4 lg:mb-0 py-2 px-4 w-[60%] lg:w-[70%] rounded-lg focus:outline-none transition ease-out hover:shadow-md focus:shadow-md"
                                value={email}
                                onChange={(event) => handleChange(event)}
                            />
                            <button className="bg-[#0020F1] border-2 border-solid border-[#7F56D9] text-white py-2 px-4 w-[60%] lg:w-[50%] xl:w-[40%] rounded-lg focus:bg-[#0020F1] transition ease-linear hover:bg-[#050794] duration-500">
                                Join our newsletter
                            </button>
                        </form>
                    </div>
                    <img
                        src={heroImage}
                        alt=""
                        className="hidden md:block w-[50%] ml-auto max-w-[587px]"
                    />
                </div>
            </section>
            <section className="w-[90%] mx-auto mt-2 mb-16 md:w-full">
                <OurService />
            </section>
            <section className="h-fit w-[90%] sm:w-[80%] mx-auto flex items-center justify-center my-5">
                <div className="w-full sm:w-[80%] mx-auto p-4">
                    <h1 className="text-xl sm:text-2xl font-bold text-center mb-2">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-sm sm:text-base text-center mb-8">
                        Everything you need to know about the product and
                        billing
                    </p>
                    {faqData.map(({ id, question, answer }) => {
                        return (
                            <FaqItems
                                key={id}
                                question={question}
                                answer={answer}
                            />
                        );
                    })}
                    {/* <FaqItems /> */}
                </div>
            </section>
            <div className="w-[90%] mx-auto my-10">
                <JoinUs />
            </div>
            <footer className="bg-[#0C111D] py-16">
                <Footer />
            </footer>
        </div>
    );
}

export default OurServices;
