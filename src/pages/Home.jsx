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
            <section className="">
                <HeroSection />
            </section>
            <section className="pt-[100px] pb-20">
                <Service title="Focus areas" />
            </section>
            <section className="bg-[#0020F1] sm:bg-transparent">
                <GetStarted />
            </section>
            <section className="pt-20">
                <Testimonials />
            </section>
            <Footer />
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
