import React from "react";
import { FaAngleUp } from "react-icons/fa";

function BackToTop() {
    const [showScrollTopButton, setShowScrollTopButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            {showScrollTopButton && (
                <FaAngleUp
                    size={50}
                    onClick={scrollTop}
                    color="white"
                    className="fixed bottom-3 right-5 bg-[#0020f1] p-2 cursor-pointer rounded-full tansition ease-out hover:scale-110 duration-300"
                />
            )}
        </div>
    );
}

export default BackToTop;
