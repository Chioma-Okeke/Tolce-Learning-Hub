/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import image from "../assets/contactUsImage.png";

function ContactUs() {
    const [isChecked, setIsChecked] = React.useState(false);
    const [formData, setFormData] = React.useState({});

    useEffect(() => {
        setFormData({});
    }, []);

    function handleIsCheckChange() {
        setIsChecked(!isChecked);
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checked" ? checked : value,
            };
        });
        console.log(formData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormData({});
        console.log(isChecked);
        console.log(formData);
    }

    return (
        <div>
            <Nav />
            <section className="w-[90%] md:w-[95%] mx-auto my-2 py-6">
                <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-10 max-w-[1440px] mx-auto">
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="xl:flex xl:flex-col xl:justify-center"
                    >
                        <h1 className="font-bold text-3xl">Contact us</h1>
                        <p className="my-3 text-[#475467]">
                            Our friendly team would love to hear from you
                        </p>
                        <div className="xs:grid xs:grid-cols-2 gap-3">
                            <div className="my-4 flex flex-col gap-1">
                                <label className=" text-[#344054] xl:mb-2">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                                    value={formData.firstName}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>
                            <div className="my-4 flex flex-col gap-1">
                                <label className=" text-[#344054] xl:mb-2">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                                    value={formData.lastName}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col gap-1">
                            <label className=" text-[#344054] xl:mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="you@email.com"
                                name="email"
                                className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                                value={formData.email}
                                onChange={(event) => handleChange(event)}
                            />
                        </div>
                        <div className=" my-4 flex flex-col gap-1">
                            <label className=" text-[#344054] xl:mb-2">
                                Message
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Leave us a message"
                                className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                                rows={5}
                                value={formData.message}
                                onChange={(event) => handleChange(event)}
                            ></textarea>
                        </div>
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                name="isChecked"
                                checked={isChecked}
                                onChange={handleIsCheckChange}
                            />
                            <span className="text-sm ml-2">
                                You agree to our friendly{" "}
                                <a
                                    href=""
                                    className="border-solid border-b border-black pb-1 cursor-pointer"
                                >
                                    privacy policy
                                </a>
                            </span>
                        </div>
                        <button className="bg-[#0020F1] text-white text-center w-full py-2 rounded-xl mt-8 cursor-pointer transition ease-linear hover:bg-[#050794] duration-500">
                            Send message
                        </button>
                    </form>
                    <img
                        src={image}
                        alt=""
                        className="hidden md:block h-full"
                    />
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

export default ContactUs;
