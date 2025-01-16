import { useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Nav({ handleNavToggle, showNav, setShowNav }) {
    const [showSubMenus, setShowSubMenus] = useState(false);
    const isTransparent = useSelector((state) => state.navigation.isTransparent)

    console.log(isTransparent, "status nav");

    return (
        <header className={`w-full px-8 pl-3 sm:px-20 z-40 transition-all ease-in-out duration-500 ${
            isTransparent
                ? "text-white fixed top-0 bg-transparent"
                : "text-[#141414] relative bg-white"
        }`}>
            <div
                className={`w-full flex flex-row items-center justify-between max-w-[1440px] mx-auto`}
            >
                <a href="/">
                    <img src={Logo} alt="" className="w-32" />
                </a>
                <nav className="hidden lg:flex font-medium">
                    <ul className="list-style-none flex gap-5">
                        <li className="p-2">
                            <NavLink
                                className={({ isActive }) => {
                                    return (
                                        " no-underline " +
                                        (!isActive
                                            ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                            : "font-bold")
                                    );
                                }}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-2">
                            <NavLink
                                className={({ isActive }) => {
                                    return (
                                        " no-underline " +
                                        (!isActive
                                            ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                            : "font-bold")
                                    );
                                }}
                                to="/about"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="p-2">
                            <NavLink
                                className={({ isActive }) => {
                                    return (
                                        " no-underline " +
                                        (!isActive
                                            ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                            : "font-bold")
                                    );
                                }}
                                to="/services"
                            >
                                Our Services
                            </NavLink>
                        </li>
                        <li
                            onMouseEnter={() => setShowSubMenus(true)}
                            onMouseLeave={() => setShowSubMenus(false)}
                            className="p-2"
                        >
                            <NavLink
                                className={({ isActive }) => {
                                    return (
                                        "flex items-center gap-2  no-underline " +
                                        (!isActive
                                            ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                            : "font-bold")
                                    );
                                }}
                                to="/services"
                            >
                                <span>Focus Areas</span>
                                <IoIosArrowDown
                                    size={18}
                                    className={`transition-transform ease-in-out duration-100 ${
                                        showSubMenus ? "-rotate-180" : ""
                                    }`}
                                />
                            </NavLink>
                        </li>
                        <li className="p-2">
                            <NavLink
                                className={({ isActive }) => {
                                    return (
                                        " no-underline " +
                                        (!isActive
                                            ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                            : "font-bold")
                                    );
                                }}
                                to="/contact"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleNavToggle} className="block lg:hidden">
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
                                        " no-underline " +
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
                                        " no-underline " +
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
                                        " no-underline " +
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
                                        " no-underline " +
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
            </div>
        </header>
    );
}

Nav.propTypes = {
    handleNavToggle: PropTypes.func,
    showNav: PropTypes.bool,
    setShowNav: PropTypes.func,
};

export default Nav;
