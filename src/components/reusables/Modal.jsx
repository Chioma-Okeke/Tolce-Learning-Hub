import PropTypes from "prop-types";

function Modal({closeModal, children}) {
    return (
        <div>
            {/* Modal Backdrop */}
            <div
                className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-30"
                onClick={closeModal}
            ></div>
            
            {/* modal component */}
            <main className="flex flex-col items-center justify-center h-full w-full relative">
                <div className="modal-wrapper flex items-center z-30 relative xl:w-[70%] justify-center">
                    {children}
                </div>
            </main>
        </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.function,
    children: PropTypes.node
}

export default Modal;
