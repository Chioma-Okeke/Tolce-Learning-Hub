import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/contact", label: "Contact Us" },
];

const focusAreasSUbMenu = [
    { path: "/outreaches", label: "Outreaches" },
    { path: "/services", label: "Skill Acquisition" },
];

function Nav({ handleNavToggle, showNav, setShowNav }) {
    const [showSubMenus, setShowSubMenus] = useState(false);
    const [showNavItems, setShowNavItems] = useState(false);
    const isTransparent = useSelector(
        (state) => state.navigation.isTransparent
    );
    const { pathname } = useLocation();
    console.log(pathname, "paht name here")

    const closeNav = () => {
        setShowNavItems(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            showNav ? setShowNavItems(true) : setShowNavItems(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [showNav]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            !showNavItems && setShowNav(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [showNavItems]);

    console.log(isTransparent, "status nav");

    return (
        <header
            className={`w-full px-8 pl-3 sm:px-20 z-40 transition-all ease-in-out duration-500 ${
                isTransparent
                    ? "text-white fixed top-0 bg-transparent"
                    : "text-[#141414] relative bg-white"
            }`}
        >
            <div
                className={`w-full flex flex-row items-center justify-between max-w-[1440px] mx-auto`}
            >
                <a href="/">
                    <img src={Logo} alt="" className="w-32" />
                </a>
                <nav className="hidden lg:flex font-medium">
                    <ul className="list-style-none flex gap-5">
                        {navLinks.map(({ path, label }) => {
                            return (
                                <li key={path} className="p-2">
                                    <NavLink
                                        className={({ isActive }) => {
                                            return (
                                                " no-underline " +
                                                (!isActive
                                                    ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                                    : "font-bold")
                                            );
                                        }}
                                        to={path}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            );
                        })}
                        <li
                            onMouseEnter={() => setShowSubMenus(true)}
                            onMouseLeave={() => setShowSubMenus(false)}
                            className="p-2 relative"
                        >
                            <div
                                className={`flex items-center gap-2  no-underline " 
                                            ${
                                                pathname !== "/services" ||
                                                pathname !== "/outreaches"
                                                    ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                                    : "font-bold"
                                            }
                                    `}
                            >
                                <span>Focus Areas</span>
                                <IoIosArrowDown
                                    size={18}
                                    className={`transition-transform ease-in-out duration-100 ${
                                        showSubMenus ? "-rotate-180" : ""
                                    }`}
                                />
                            </div>
                            <div>
                                {showSubMenus && (
                                    <ul
                                        className={`absolute top-full left-0 bg-white shadow-lg w-fit ${
                                            isTransparent
                                                ? "text-[#141414]"
                                                : ""
                                        }`}
                                    >
                                        {focusAreasSUbMenu.map(
                                            ({ path, label }) => {
                                                return (
                                                    <li
                                                        key={path}
                                                        className="p-2"
                                                    >
                                                        <NavLink
                                                            className={({
                                                                isActive,
                                                            }) => {
                                                                return (
                                                                    "flex items-center gap-2  no-underline " +
                                                                    (!isActive
                                                                        ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                                                        : "font-bold")
                                                                );
                                                            }}
                                                            to={path}
                                                        >
                                                            {label}
                                                        </NavLink>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleNavToggle} className="block lg:hidden">
                    <AiOutlineMenu
                        size={20}
                        cursor={"pointer"}
                        className="hover:scale-110"
                    />
                </div>
                <AnimatePresence>
                    <div
                        className={`fixed top-0 w-full h-full bg-black py-2 transition-all ease-in-out duration-1000 
                    ${showNav ? "left-0" : "left-[-100%]"}
                `}
                    >
                        <div className="flex justify-between items-center pr-4 mb-8">
                            <a href="/">
                                <img src={Logo} alt="" className="w-32" />
                            </a>
                            <div onClick={() => setShowNavItems(false)} className="block lg:hidden">
                                <AiOutlineClose
                                    size={20}
                                    cursor={"pointer"}
                                    className="hover:scale-110"
                                    color="white"
                                />
                            </div>
                        </div>
                        <AnimatePresence>
                            {showNavItems && (
                                <ul className="px-4 text-white">
                                    {navLinks.map(({ path, label }, index) => {
                                        return (
                                            <motion.li
                                                initial={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2,
                                                }}
                                                key={path}
                                                className="py-3"
                                            >
                                                <NavLink
                                                    onClick={() =>
                                                        setShowNav(false)
                                                    }
                                                    className={({
                                                        isActive,
                                                    }) => {
                                                        return (
                                                            " no-underline text-xl " +
                                                            (!isActive
                                                                ? "hover:border-b-white hover:border-b-2"
                                                                : "font-bold")
                                                        );
                                                    }}
                                                    to={path}
                                                >
                                                    {label}
                                                </NavLink>
                                            </motion.li>
                                        );
                                    })}
                                    <motion.li
                                        initial={{
                                            opacity: 0,
                                            x: "-100%",
                                        }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{
                                            opacity: 0,
                                            x: "-100%",
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                            delay: 0.9,
                                        }}
                                        onClick={() =>
                                            setShowSubMenus(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="relative w-fit py-3"
                                    >
                                        <div
                                            className={`flex items-center gap-2 text-xl no-underline " 
                                            ${
                                                pathname === "/services" ||
                                                pathname === "/outreaches"
                                                    ? "font-bold" 
                                                    : "transition-all ease-in-out duration-100 hover:border-b-white hover:border-b-2"
                                            }
                                    `}
                                        >
                                            <span>Focus Areas</span>
                                            <IoIosArrowDown
                                                size={18}
                                                className={`transition-transform ease-in-out duration-100 ${
                                                    showSubMenus
                                                        ? "-rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                        <div>
                                            {showSubMenus && (
                                                <ul
                                                    className={`absolute top-full left-0 bg-white shadow-lg w-fit text-[#141414]`}
                                                >
                                                    {focusAreasSUbMenu.map(
                                                        ({ path, label }) => {
                                                            return (
                                                                <li
                                                                    key={path}
                                                                    className="p-2"
                                                                >
                                                                    <NavLink
                                                                        onClick={() =>
                                                                            setShowNav(
                                                                                false
                                                                            )
                                                                        }
                                                                        className={({
                                                                            isActive,
                                                                        }) => {
                                                                            return (
                                                                                "flex items-center gap-2  no-underline " +
                                                                                (!isActive
                                                                                    ? "transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]"
                                                                                    : "font-bold")
                                                                            );
                                                                        }}
                                                                        to={
                                                                            path
                                                                        }
                                                                    >
                                                                        {label}
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                </AnimatePresence>
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
