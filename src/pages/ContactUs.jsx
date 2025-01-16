/* eslint-disable react/no-unknown-property */
// import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import image from "../assets/Hero/Contact_us.png";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import AnimatedSection from "../components/shared/AnimatedSection";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { PiHouse } from "react-icons/pi";

const contactInfo = [
    {
        title: "Email Support",
        description: "Our team can respond in real time.",
        Icon: BiEnvelope,
    },
    {
        title: "Visit Our Office",
        description: "Visit our location in real life.",
        Icon: PiHouse,
    },
    {
        title: "Call Us Directly",
        description: "Available during work hours",
        Icon: BiPhone,
    },
];

function ContactUs() {
    const methods = useForm();

    useEffect(() => {
        window.scrollTo(0, {
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div>
            <AnimatedSection className="w-[90%] max-w-[1100px] md:w-[95%] mx-auto my-2 pt-6 pb-20">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10 max-w-[1440px] mx-auto">
                    <div className="flex-1">
                        <img
                            src={image}
                            alt=""
                            className="h-[250px] w-full object-cover object-center md:h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <FormProvider {...methods}>
                            <ContactForm />
                        </FormProvider>
                    </div>
                </div>
                <div className="pt-20 text-base lg:text-lg flex items-center justify-between">
                    {contactInfo.map(({ title, description, Icon }, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="bg-[#EAF6F2] rounded-full w-fit p-3">
                                    <Icon className="w-8 h-8 text-[#3A8DFF]"/>
                                </div>
                                <p className="font-bold mt-2">{title}</p>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </AnimatedSection>
            <Footer />
        </div>
    );
}

export default ContactUs;
