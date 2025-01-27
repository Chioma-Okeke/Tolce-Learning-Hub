import React from "react";
import ReactDOM from "react-dom";

function Dropdown({ options, target }) {
    const dropdownStyles = {
        position: "absolute",
        top: target.top + window.scrollY + target.height,
        left: target.left + window.scrollX,
        backgroundColor: "black",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "4px",
        zIndex: 1000,
    };

    return ReactDOM.createPortal(
        <ul style={dropdownStyles} className="text-[#141414] h-screen ">
            {options.map((option) => (
                <li key={option}>{option}</li>
            ))}
        </ul>,
        document.body // Rendering dropdown in the document body
    );
}

export default Dropdown;

{/* <ul
    className={`absolute top-full left-0 bg-white shadow-lg w-fit ${
        isTransparent ? "text-[#141414]" : ""
    }`}
>
    {focusAreasSUbMenu.map(({ path, label }) => {
        return (
            <li key={path} className="p-2">
                <NavLink
                    className={({ isActive }) => {
                        return (
                            "flex items-center gap-2 no-underline " +
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
</ul>; */}
