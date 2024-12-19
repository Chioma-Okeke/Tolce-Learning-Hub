/* eslint-disable react/no-unknown-property */
// import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import image from "../assets/Hero/Contact_us.png";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";

function ContactUs() {
    const methods = useForm();

    return (
        <div>
            <section className="w-[90%] max-w-[1100px] md:w-[95%] mx-auto my-2 py-6">
                <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-10 max-w-[1440px] mx-auto">
                    <FormProvider {...methods}>
                        <ContactForm />
                    </FormProvider>
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
