// import React from "react";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
// const apiUrl = import.meta.env.VITE_FORM_SUBMISSION_URL;

function ContactForm({ setShowSuccessModal }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useFormContext();

    const onSubmit = async (data) => {
        try {
            // const response = await axios.post(
            //     apiUrl,
            //     data,
            //     { headers: { Accept: "application/json" } }
            // );
            // console.log("Message sent: ", response);
            console.log(data);
            setShowSuccessModal(true);
            reset();
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="xl:flex xl:flex-col xl:justify-center"
        >
            <h1 className="font-semibold text-3xl">Let&apos;s Get in Touch</h1>
            <p className="my-3 text-[#475467]">
                Our friendly team would love to hear from you
            </p>
            <div className="xs:grid xs:grid-cols-2 gap-3">
                <div>
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
                                    message: "First name is required",
                                },
                            })}
                        />
                        {errors.firstName && (
                            <InputError message={errors.firstName.message} />
                        )}
                    </div>
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
                                message: "Last name is required",
                            },
                        })}
                    />
                    {errors.lastName && (
                        <InputError message={errors.lastName.message} />
                    )}
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
                        required: "Email Address is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter a valid email address",
                        },
                    })}
                />
                {errors.email && <InputError message={errors.email.message} />}
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
                            message: "Message is required",
                        },
                    })}
                ></textarea>
                {errors.message && (
                    <InputError message={errors.message.message} />
                )}
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
            <button
                disabled={!watch("isChecked")}
                className={`bg-[#0020F1] text-white text-center w-full py-4 px-6 rounded-lg mt-8 cursor-pointer transition ease-linear ${
                    watch("isChecked")
                        ? "opacity-100"
                        : "opacity-50 cursor-not-allowed"
                }`}
            >
                Send message
            </button>
        </form>
    );
}

function InputError({ message }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-red-500 font-semibold text-sm"
        >
            <span>{message}</span>
        </motion.div>
    );
}

InputError.propTypes = {
    message: PropTypes.string,
};

ContactForm.propTypes = {
    setShowSuccessModal: PropTypes.func,
};

export default ContactForm;
