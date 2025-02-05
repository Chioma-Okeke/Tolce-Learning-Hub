// import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import JoinUs from "./JoinUs";
import { Link } from "react-router-dom";
import { contactLinks, quickLinks } from "../data/locationData";

function Footer() {
    return (
        <footer className="bg-[#333333] text-white py-12 ">
            <div className="w-[90%] max-w-[1800px] mx-auto">
                <section>
                    <JoinUs />
                </section>
                <div className=" mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link.link}
                                        className="hover:text-[#0020F1] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect With Us</h4>
                        <div className="flex gap-4">
                            {contactLinks.map(({ Icon, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    className="hover:text-[#0020F1] transition-colors"
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Info</h4>
                        <address className="not-italic">
                            <a
                                href="mailto:tolcelearninghub@gmail.com"
                                target="_blank"
                                className="mt-2"
                            >
                                tolcelearninghub@gmail.com
                            </a>
                            <p>+234 814 627 3427</p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
