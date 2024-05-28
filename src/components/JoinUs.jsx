// import React from "react";

import { useState } from "react";

function JoinUs() {
    const [email, setEmail] = useState("");

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
        <section className="bg-[#F9FAFB] text-center flex flex-col items-center justify-center py-16 px-3">
            <h1 className="font-bold text-lg sm:text-2xl md:text-4xl text-[#101828]">
                Join our Learning Community here
            </h1>
            <p className="text-[#475467] text-sm sm:text-md md:text-xl mt-4 mb-5">
                Sign up for our newsletter and get advice for your career growth
                and development.
            </p>
            <form
                onSubmit={(event) => handleSubmit(event)}
                className="w-full max-w-[600px] sm:w-[60%] flex flex-col sm:flex-row items-center justify-center"
            >
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-solid border-[#D0D5DD] mb-4 sm:mr-4 sm:mb-0 py-2 px-4 w-[60%] sm:w-[70%] rounded-lg focus:outline-none transition ease-out hover:shadow-md focus:shadow-md"
                    value={email}
                    onChange={(event) => handleChange(event)}
                />
                <button className="bg-[#0020F1] border-2 border-solid border-[#7F56D9] text-white py-2 px-4 w-[60%] sm:w-[30%] rounded-lg focus:bg-[#0020F1] transition ease-linear hover:bg-[#050794] duration-500">
                    Subscribe
                </button>
            </form>
        </section>
    );
}

export default JoinUs;
