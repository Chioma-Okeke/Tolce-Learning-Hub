import { useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Nav() {
    const [showNav, setShowNav] = useState(false);

    function handleNavToggle() {
        setShowNav(!showNav);
    }

    return (
        <header className="w-full flex flex-row items-center justify-between px-8 pl-3 sm:px-20 bg-white relative max-w-[1440px] mx-auto z-40">
            <a href="/">
                <img src={Logo} alt="" className="w-32" />
            </a>
            <nav className="hidden md:flex font-medium">
                <ul className="list-style-none flex gap-5">
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:bg-[#4459e44b] p-2"
                                        : "font-bold")
                                );
                            }}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:bg-[#4459e44a] p-2"
                                        : "font-bold")
                                );
                            }}
                            to="/about"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:bg-[#4459e44b] p-2"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/services"
                        >
                            Our Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:bg-[#4459e44b] p-2"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/contact"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={handleNavToggle} className="block md:hidden">
                {showNav ? (
                    <AiOutlineClose
                        size={20}
                        cursor={"pointer"}
                        className="hover:scale-110"
                    />
                ) : (
                    <AiOutlineMenu
                        size={20}
                        cursor={"pointer"}
                        className="hover:scale-110"
                    />
                )}
            </div>
            <div
                className={`fixed top-0 w-[70%] sm:w-[60%] h-full border-r border-t-gray-900 bg-white py-2 transition-all ease-in-out duration-500 
                    ${showNav ? "left-0" : "left-[-100%]"}
                `}
            >
                <a href="/">
                    <img src={Logo} alt="" className="w-32" />
                </a>
                <ul className="px-4 text-black">
                    <li className="py-4">
                        <NavLink
                            onClick={() => setShowNav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold")
                                );
                            }}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setShowNav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold")
                                );
                            }}
                            to="/about"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setShowNav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/services"
                        >
                            Our Services
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setShowNav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:bg-[#4459e44b]"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/contact"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Nav;
