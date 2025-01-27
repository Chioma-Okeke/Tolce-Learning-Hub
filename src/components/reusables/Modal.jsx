import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

function Modal({ closeModal, children }) {

    const modalRoot = document.getElementById("modal-root")

    if (!modalRoot) {
        console.error("Modal root not found? Make sure to add <div id='modal-root'></div>")
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 w-full h-full z-40 ">
            <AnimatePresence mode="wait">
                {/* Modal Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-filter bg-black/70 fixed inset-0 w-full h-full z-30"
                    onClick={closeModal}
                ></motion.div>

                {/* modal component */}
                <div className="flex flex-col items-center justify-center h-full w-full relative">
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="modal-wrapper flex items-center z-50 relative xl:w-[70%] justify-center"
                    >
                        {children}
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>,
        modalRoot
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;
