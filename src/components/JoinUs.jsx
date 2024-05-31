/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import thankYouGif from "../assets/thank you evelope.gif";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function JoinUs({ setSubscriptionConfirmed }) {
    const [email, setEmail] = useState("");
    const [erroMessage, setErrorMessage] = useState("");

    function handleChange(event) {
        setErrorMessage(false);
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(email);
        if (email === "") {
            setErrorMessage("Enter an email before submission.");
        } else if (!emailRegex.test(email)) {
            setErrorMessage("Enter a valid email address");
        } else {
            setErrorMessage("");
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className="w-[80%] lg:w-[600px] h-fit mx-auto bg-white shadow-xl rounded-xl relative p-5 md:p-10 flex flex-col items-center justify-center">
                            <IoClose
                                onClick={onClose}
                                size={25}
                                cursor={"pointer"}
                                className="absolute right-2 top-2 mb-11 transition ease-out hover:text-[#0020F1]"
                            />
                            <h1 className="mt-2 font-bold text-2xl">
                                Welcome!
                            </h1>
                            <img
                                src={thankYouGif}
                                alt="thank you gif"
                                className="w-44"
                            />
                            <h1 className="text-[#101828] text-center">
                                Congratulations and welcome to our Learning
                                Community! 🎉 You have successfully subscribed
                                to our newsletter. Get ready to receive regular
                                updates packed with valuable career advice,
                                industry insights, and development tips
                                delivered straight to your inbox.
                            </h1>
                        </div>
                    );
                },
            });
            setEmail("");
            console.log(email);
        }
    }

    return (
        <section className="bg-[#F9FAFB] flex flex-col justify-center py-12 px-3">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#101828] text-center">
                Join our Learning Community here
            </h1>
            <p className="text-[#475467] text-sm sm:text-md md:text-xl mt-4 mb-5 text-center">
                Sign up for our newsletter and get advice for your career growth
                and development.
            </p>
            <div className="flex justify-center">
                <div className="relative w-[90%] sm:w-[60%] lg:w-[40%]">
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="w-full flex flex-col sm:flex-row items-center justify-start"
                    >
                        <div className="flex flex-col gap-1 mb-4 sm:mr-4 sm:mb-0 w-[80%] sm:w-[100%] xl:w-[60%] items">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="border border-solid border-[#D0D5DD] w-full py-2 px-4 rounded-lg focus:outline-none transition ease-out hover:shadow-md focus:shadow-md"
                                value={email}
                                onChange={(event) => handleChange(event)}
                            />
                            {erroMessage && (
                                <p className="block text-red-500 text-left text-sm sm:hidden">
                                    {erroMessage}
                                </p>
                            )}
                        </div>
                        <button className="bg-[#0020F1] border-2 border-solid border-[#7F56D9] text-white py-2 px-4 w-[50%] sm:w-[30%] xl:w-[30%] rounded-lg focus:bg-[#0020F1] transition ease-linear hover:bg-[#050794] duration-500">
                            Subscribe
                        </button>
                    </form>
                    {erroMessage && (
                        <p className="hidden text-red-500 text-left text-sm sm:block">
                            {erroMessage}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default JoinUs;
