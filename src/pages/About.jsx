// import React from "react";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import JoinUs from "../components/JoinUs";
import Nav from "../components/Nav";
import Service from "../components/Service";
import backgroundPicture from "../assets/backgroundpattern.svg";
import YoutubeVideo from "../components/YoutubeVideo";
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";

function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 664);
        }

        handleResize();

        window.addEventListener("reszie", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <BackToTop />
            <Nav />
            <section className="w-[90%] mx-auto text-center my-4 pt-4 pb-8">
                <div className="w-full sm:w-[75%] xl:w-[65%] mx-auto">
                    <p className="bg-[#E1E5FF] border border-solid border-[#D5DAFF] font-bold text-lg w-24 mx-auto rounded-2xl lg:text-lg xl:text-xl">
                        About
                    </p>
                    <h1 className="font-bold text-2xl lg:text-4xl my-6 xl:text-5xl">
                        Our Mission
                    </h1>
                    <p className="text-base text-[#475467] lg:text-lg xl:text-xl">
                        Our mission is to build a community of lifelong learners
                        who are exceptionally skilful, effective in their
                        personal and professional lives while using acquired
                        skills to solve real life problems.
                    </p>
                </div>
            </section>
            <div
                style={{
                    backgroundImage: !isSmallScreen
                        ? `url(${backgroundPicture})`
                        : "none",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className={`w-full h-[450px] 2xl:h-[550px] mx-auto mb-8 relative mt-2 ${
                    isSmallScreen ? "bg-[#F6F9FE]" : "bg-cover"
                }`}
            >
                <YoutubeVideo />
            </div>
            <section className="py-10">
                <Service title="Our Services" />
            </section>
            <section className="bg-[#0020F1] sm:bg-transparent">
                <GetStarted />
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

export default About;
