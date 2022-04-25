import React, { useState } from "react";

import {ReactComponent as SettlementImage} from "../../images/settlementInfo.svg"
import {ReactComponent as TransactionImage} from "../../images/transaction.svg"
import {ReactComponent as WarningSvg} from "../../icons/warning.svg"

import ContentContainer from "../../components/contentContainer/contentcontainer.component";
import Modal from "../../components/modal/modal.component";
import "./paymentModesPage.styles.css"

const PaymentModesPage = function() {

    const [modalopen, setModalOpen] = useState(true)

    return (
        <div className="page-container">
            <header>
                <button type="button" className="btn btn-back">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.6L3.33333 8L10 14.4L8.33333 16L0 8L8.33333 0L10 1.6Z" fill="#3B3F46"/>
                    </svg>
                    Back to Overview
                </button>
                <h1 className="page-title">Payment Modes</h1>
                <p className="about-page">Manage the payment modes for your checkout and let your customers choose from multiple payment options, anywhere, anytime.</p>    
            </header>
            <ContentContainer />
            <Modal modalTitle="Your Settlement Cycle" modalopen={modalopen} setModalOpen={setModalOpen}>
                <SettlementImage className="settlement-info" />
                <div className="bank-holiday-ov">
                    <div className="box-title"><span>Incase of Bank Holidays in between</span></div>
                    <TransactionImage className="transaction-info" />
                </div>
                <p className="transaction-info-note"><span className="color-orange">*</span>T is the date of transaction. The cycle is subject to bank approval and can vary based on your business vertical, risk factor etc. </p>
                <div className="warning-block">
                    <WarningSvg />
                    <p className="warning-text">Please activate your account to receive settelements in your bank account</p>
                    <button type="button" className="btn btn-in-active btn-activate">Activate Account</button>
                </div>
            </Modal>
        </div>
    )
}

export default PaymentModesPage;