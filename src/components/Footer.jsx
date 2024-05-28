// import React from 'react'

function Footer() {
    return (
        <div className=" w-[90%] border-t border-[#D0D5DD] pt-3 mx-auto flex flex-col md:flex-row md:justify-between">
            <p className="text-[#D0D5DD] mb-4">
                © 2023 Tolce Learning Hub. All rights reserved.
            </p>
            <ul className="list-style-none text-[#D0D5DD] flex items-center gap-2">
                <li className="text-sm lg:text-base transition ease-out hover:border-b-2 hover:border-solid hover:pb-1 hover:border-[#D0D5DD]">
                    Terms
                </li>
                <li className="text-sm lg:text-base transition ease-out hover:border-b-2 hover:border-solid hover:pb-1 hover:border-[#D0D5DD]">
                    Privacy
                </li>
                <li className="text-sm lg:text-base transition ease-out hover:border-b-2 hover:border-solid hover:pb-1 hover:border-[#D0D5DD]">
                    Cookies
                </li>
            </ul>
        </div>
    );
}

export default Footer;
