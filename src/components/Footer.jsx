// import React from 'react'

function Footer() {
    return (
        <div className=" w-[90%] lg:border-t border-[#D0D5DD] pt-3 mx-auto flex flex-col md:flex-row md:justify-between">
            <p className="text-[#D0D5DD] mb-4">
                © 2023 Tolce Learning Hub. All rights reserved.
            </p>
            <ul className="list-style-none text-[#D0D5DD] flex items-center gap-2 text-sm">
                <li className="transition ease-in-out duration-300 hover:cursor-pointer hover:text-[#27def2]">
                    Terms
                </li>
                <li className="transition ease-in-out duration-300 hover:cursor-pointer hover:text-[#27def2]">
                    Privacy
                </li>
                <li className="transition ease-in-out duration-300 hover:cursor-pointer hover:text-[#27def2]">
                    Cookies
                </li>
            </ul>
        </div>
    );
}

export default Footer;
