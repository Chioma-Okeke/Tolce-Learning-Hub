import { useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {
    const [shownav, setshownav] = useState(false);

    function handleNavToggle() {
        setshownav(!shownav);
    }

    return (
        <header className="w-full flex flex-row items-center justify-between px-8 pl-3 sm:px-20 bg-white relative max-w-[1440px] mx-auto z-10">
            <a href="/">
                <img src={Logo} alt="" className="w-32" />
            </a>
            <nav className="hidden md:flex">
                <ul className="list-style-none flex gap-9">
                    <li>
                        <a
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                            href="/about"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                            href="/ourservices"
                        >
                            Our Services
                        </a>
                    </li>
                    <li>
                        <a
                            className="bg-[#0020F1] px-4 py-2 text-white text-base rounded-lg transition ease-linear hover:bg-[#050794] hover:text-white duration-500 font-bold"
                            href="/contactus"
                        >
                            Contact Us
                        </a>
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
                        <a
                            href="/"
                            onClick={() => setshownav(false)}
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                        >
                            Home
                        </a>
                    </li>
                    <li className="py-4">
                        <a
                            onClick={() => setshownav(false)}
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                            href="/about"
                        >
                            About Us
                        </a>
                    </li>
                    <li className="py-4">
                        <a
                            onClick={() => setshownav(false)}
                            className="text-[#475467] hover:text-[#0020F1] focus:text-[#0020F1] font-bold text-base"
                            href="/ourservices"
                        >
                            Our Services
                        </a>
                    </li>
                    <li className="py-4">
                        <a
                            onClick={() => setshownav(false)}
                            className="bg-[#0020F1] px-4 py-2 text-white text-base rounded-lg hover:shadow-lg font-bold"
                            href="/contactus"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Nav;
