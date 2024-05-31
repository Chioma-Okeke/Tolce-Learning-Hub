import { useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Nav() {
    const [shownav, setshownav] = useState(false);

    function handleNavToggle() {
        setshownav(!shownav);
    }

    return (
        <header className="w-full flex flex-row items-center justify-between px-8 pl-3 sm:px-20 bg-white relative max-w-[1440px] mx-auto z-40">
            <a href="/">
                <img src={Logo} alt="" className="w-32" />
            </a>
            <nav className="hidden md:flex">
                <ul className="list-style-none flex gap-9">
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold text-[#0020f1]")
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
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold text-[#0020f1]")
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
                                        ? " hover:text-[#0020f1]"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/ourservices"
                        >
                            Our Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="bg-[#0020F1] px-4 py-2 text-white text-base rounded-lg transition ease-linear hover:bg-[#050794] hover:text-white duration-500 font-bold"
                            to="/contactus"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={handleNavToggle} className="block md:hidden">
                {shownav ? (
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
                className={
                    shownav
                        ? "fixed left-0 top-0 w-[70%] sm:w-[60%] h-full border-r border-t-gray-900 bg-white py-2 ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <a href="/">
                    <img src={Logo} alt="" className="w-32" />
                </a>
                <ul className="uppercase px-4 text-black">
                    <li className="py-4">
                        <NavLink
                            onClick={() => setshownav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold text-[#0020f1]")
                                );
                            }}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setshownav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "font-bold text-[#0020f1]")
                                );
                            }}
                            to="/about"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setshownav(false)}
                            className={({ isActive }) => {
                                return (
                                    "text-[#141414] no-underline " +
                                    (!isActive
                                        ? " hover:text-[#0020f1]"
                                        : "text-[#0020f1] font-bold")
                                );
                            }}
                            to="/ourservices"
                        >
                            Our Services
                        </NavLink>
                    </li>
                    <li className="py-4">
                        <NavLink
                            onClick={() => setshownav(false)}
                            className="bg-[#0020F1] px-4 py-2 text-white text-base rounded-lg transition ease-linear hover:bg-[#050794] hover:text-white duration-500 font-bold"
                            to="/contactus"
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
