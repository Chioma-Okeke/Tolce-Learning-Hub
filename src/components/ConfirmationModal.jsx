/* eslint-disable react/prop-types */
// import React from 'react'
import { usePosition } from "./PositionContext";

function ConfirmationModal({ setSubscriptionConfirmed, offset }) {
    const { position } = usePosition();

    const modalPosition = {
        top: position.y + offset.y,
        left: position.x + offset.y,
    };

    const modalStyle = {
        position: "fixed",
        top: modalPosition.top,
        left: modalPosition.left,
        // Additional styles for your modal
    };
    return (
        <div
            style={modalStyle}
            className="bg-white w-[50%] flex items-center justify-center"
        >
            <h1 className="text-black">Thank you for subscribing</h1>
            <button
                className="bg-red"
                onClick={() => setSubscriptionConfirmed(false)}
            >
                Close
            </button>
        </div>
    );
}

export default ConfirmationModal;
