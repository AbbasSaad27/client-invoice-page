import React from "react";

import {ReactComponent as CrossSvg} from "../../icons/cross.svg"

import "./modal.styles.css"

const Modal = function({children, modalTitle, modalopen, setModalOpen}) {
    if(!modalopen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2 className="modal-title">{modalTitle}</h2>
                    <CrossSvg className="btn-close close-icon" onClick={() => setModalOpen(false)}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal