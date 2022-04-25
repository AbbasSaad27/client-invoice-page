import React, { useState } from "react";
import Card from "../../cards/cards.component";

import "./detailsItem.styles.css";

const DetailsItem = function () {

    const [tab, setTab] = useState(1)

    return(
        <div className="details-item">
            <h2 className="details-header">Cards</h2>
            <div className="details-box">
                <div className="tabs-container">
                    <button type="button" className={`btn btn-tab ${tab === 1 ? "tab-active" : ""}`} onClick={() => setTab(1)}>Debit Card</button>
                    <button type="button" className={`btn btn-tab ${tab === 2 ? "tab-active" : ""}`} onClick={() => setTab(2)}>Credit Card</button>
                </div>
                <div className="cards-container">
                    <Card cardTitle="Visa" cardStat="Active"/>
                    <Card cardTitle="Master Card" cardStat="Active"/>
                    <Card cardTitle="Maestro" cardStat="Active"/>
                    <Card cardTitle="Rupay" cardStat="In-active"/>
                    <Card cardTitle="Amex Card" cardStat="Request In Process"/>
                </div>
            </div>
        </div>
    )
}

export default DetailsItem