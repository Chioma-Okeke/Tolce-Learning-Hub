/* eslint-disable react/no-unknown-property */
// import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import image from "../assets/Hero/Contact_us.png";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import AnimatedSection from "../components/shared/AnimatedSection";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { PiHouse } from "react-icons/pi";
import Modal from "../components/reusables/Modal";

const contactInfo = [
    {
        title: "Email Support",
        description: "Our team can respond in real time.",
        Icon: BiEnvelope,
        contact: "tolcelearninghub@gmail.com"
    },
    {
        title: "Call Us Directly",
        description: "Available during work hours",
        Icon: BiPhone,
        contact: "+234 814 627 3427"
    },
];

function ContactUs() {
    const methods = useForm();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSuccessModal(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [showSuccessModal]);

    return (
        <div>
            <AnimatedSection className="w-[90%] max-w-[1100px] md:w-[95%] mx-auto my-2">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10 max-w-[1440px] mx-auto py-12 sm:py-20 sm:pb-10">
                    <div className="flex-1">
                        <img
                            src={image}
                            alt=""
                            loading="lazy"
                            className="h-[250px] w-full object-cover object-center md:h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <FormProvider {...methods}>
                            <ContactForm
                                setShowSuccessModal={setShowSuccessModal}
                            />
                        </FormProvider>
                    </div>
                </div>
                <div className="py-12 sm:py-20 text-base lg:text-lg flex flex-col gap-20 md:flex-row md:items-center">
                    {contactInfo.map(({ title, description, Icon, contact }, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="bg-[#EAF6F2] rounded-full w-fit p-3">
                                    <Icon className="w-8 h-8 text-[#3A8DFF]" />
                                </div>
                                <p className="font-bold mt-2">{title}</p>
                                <p>{description}</p>
                                <p>{contact}</p>
                            </div>
                        );
                    })}
                </div>
            </AnimatedSection>
            {showSuccessModal && (
                <Modal closeModal={() => setShowSuccessModal(false)}>
                    <div className="bg-white w-[90%] md:w-[50%] p-10">
                        <h1 className="text-2xl font-bold text-center">
                            Thank you for reaching out
                        </h1>
                        <p className="text-center mt-2">
                            We will get back to you as soon as possible
                        </p>
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="bg-[#0020F1] text-white text-center w-full py-4 px-6 rounded-lg mt-8 cursor-pointer transition ease-linear"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
            <Footer />
        </div>
    );
}

export default ContactUs;
