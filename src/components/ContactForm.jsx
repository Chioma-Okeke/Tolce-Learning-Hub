// import React from "react";
import { useFormContext } from "react-hook-form";
import { motion, useAnimation } from "framer-motion";

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useFormContext();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="xl:flex xl:flex-col xl:justify-center"
        >
            <h1 className="font-semibold text-3xl">Let's Get in Touch</h1>
            <p className="my-3 text-[#475467]">
                Our friendly team would love to hear from you
            </p>
            <div className="xs:grid xs:grid-cols-2 gap-3">
                <div className="my-4 flex flex-col gap-1">
                    <label
                        className=" text-[#344054] xl:mb-2"
                        htmlFor="firstName"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        aria-invalid={errors.name ? "true" : "false"}
                        placeholder="First Name"
                        className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: "required",
                            },
                        })}
                    /> 
                </div>
                <div className="my-4 flex flex-col gap-1">
                    <label
                        className=" text-[#344054] xl:mb-2"
                        htmlFor="lastName"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        aria-invalid={errors.name ? "true" : "false"}
                        placeholder="Last Name"
                        className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: "required",
                            },
                        })}
                    />
                </div>
            </div>
            <div className="mb-4 flex flex-col gap-1">
                <label className=" text-[#344054] xl:mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    placeholder="you@email.com"
                    className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "required",
                        },
                    })}
                />
            </div>
            <div className=" my-4 flex flex-col gap-1">
                <label className=" text-[#344054] xl:mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    placeholder="Leave us a message"
                    className="border border-solid border-[#D0D5DD] p-2 rounded-xl xl:p-4"
                    rows={5}
                    {...register("message", {
                        required: {
                            value: true,
                            message: "required",
                        },
                    })}
                ></textarea>
            </div>
            <div className="flex items-center mt-2">
                <input
                    id="isChecked"
                    aria-invalid={errors.name ? "true" : "false"}
                    type="checkbox"
                    {...register("isChecked", {
                        required: {
                            value: true,
                            message: "required",
                        },
                    })}
                />
                <span className="text-sm ml-2" htmlFor="isChecked">
                    You agree to our friendly{" "}
                    <a
                        href=""
                        className="border-solid border-b border-black pb-1 cursor-pointer"
                    >
                        privacy policy
                    </a>
                </span>
            </div>
            <button className="bg-[#0020F1] text-white text-center w-full py-4 px-6 rounded-lg mt-8 cursor-pointer transition ease-linear hover:bg-[#050794] duration-500">
                Send message
            </button>
        </form>
    );
}

function InputError({ message, role }) {
    const mainControls = useAnimation();

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            }}
            initial="hidden"
            animate={mainControls}
            exit={{ opacity: 10, y: 10 }}
            className="text-red-500 font-semibold"
        >
            <span role={role}>{message}</span>
        </motion.div>
    );
}

export default ContactForm;
