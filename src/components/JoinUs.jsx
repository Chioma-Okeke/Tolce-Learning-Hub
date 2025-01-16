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
    const [errorMessage, setErrorMessage] = useState("");

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
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between pb-12 ">
            <div className="flex flex-col gap-1 flex-1">
                <h1 className="font-bold text-2xl">
                    Join our newsletter
                </h1>
                <p className="">
                    Get all the latest TOLCE learning hub news delivered to your
                    inbox.
                </p>
            </div>
            <div className="flex flex-1 lg:justify-end">
                <div className="relative w-full md:w-[486px]">
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="w-full flex flex-col gap-2 md:flex-row items-center"
                    >
                        <div className="flex flex-col gap-1 w-full md:w-[343px]">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="border text-[#141414] border-solid border-[#D0D5DD] w-full h-[60px] py-4 px-6 rounded-lg focus:outline-none transition ease-out hover:border-[#7F56D9] focus:border-[#7F56D9]"
                                value={email}
                                onChange={(event) => handleChange(event)}
                            />
                            {errorMessage && (
                                <p className="block text-red-500 text-left text-sm md:hidden">
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                        <button className="font-semibold bg-[#0020F1] border-2 border-solid border-[#0020F1] text-white py-4 px-6 w-full md:w-[135px] rounded-lg focus:bg-[#0020F1] transition ease-linear hover:bg-[#050794] hover:border-[#7F56D9] duration-500">
                            Subscribe
                        </button>
                    </form>
                    {errorMessage && (
                        <p className="hidden text-red-500 text-left text-sm md:block">
                            {errorMessage}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default JoinUs;
