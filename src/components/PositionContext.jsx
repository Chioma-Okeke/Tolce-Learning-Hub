/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const PositionContext = createContext();

export const usePosition = () => {
    return useContext(PositionContext);
};

export const PositionProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = (x, y) => {
        setPosition({ x, y });
    };

    return (
        <PositionContext.Provider value={{ position, updatePosition }}>
            {children}
        </PositionContext.Provider>
    );
};
