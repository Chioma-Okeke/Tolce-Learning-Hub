import React from "react";

import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import JoinUs from "../components/JoinUs";
import GetStarted from "../components/GetStarted";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Service from "../components/Service";
import ConfirmationModal from "../components/ConfirmationModal";
// import { PositionProvider } from "../components/PositionContext";
import BackToTop from "../components/BackToTop";

function Home() {
    const [subscriptionConfirmed, setSubscriptionConfirmed] =
        React.useState(false);

    return (
        <div className="relative">
            <BackToTop />
            <Nav />
            <section className="">
                <HeroSection />
            </section>
            <section className="py-10">
                <Service title="Our focus areas" />
            </section>
            <section className="bg-[#0020F1]">
                <GetStarted />
            </section>
            <section className="my-16">
                <Testimonials />
            </section>
            <div className="w-[90%] mx-auto my-10">
                <JoinUs setSubscriptionConfirmed={setSubscriptionConfirmed} />
            </div>
            <footer className="bg-[#0C111D] py-16">
                <Footer />
            </footer>
            {subscriptionConfirmed && (
                <ConfirmationModal
                    setSubscriptionConfirmed={setSubscriptionConfirmed}
                    offset={{ x: 100, y: 50 }}
                />
            )}
        </div>
    );
}

export default Home;
