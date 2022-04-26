import React, { useState } from "react";

import {ReactComponent as ArrowDown} from "../../icons/arrow-down.svg"
import {ReactComponent as VisaSvg} from "../../icons/visa.svg"
import {ReactComponent as MasterCardSvg} from "../../icons/masterCard.svg"
import {ReactComponent as MaestroSvg} from "../../icons/maestro.svg"
import {ReactComponent as RupaySvg} from "../../icons/rupay.svg"
import {ReactComponent as AmexSvg} from "../../icons/amex.svg"
import {ReactComponent as InfoIcon} from "../../icons/circleQuestion.svg"

import "./cards.styles.css"

const Card = function({cardTitle, cardStat}) {


    const [opened, setOpened] = useState(false)

    const cardStatClass = cardStat.toLowerCase().split(" ").join("");

    return(
        <div className={`card-container ${opened ? "card-opened" : ""}`}>
            <div className="card-preview">
                <div className="about-card">
                    <ArrowDown className={`btn btn-opener icon ${opened ? "icon-up" : ""}`} onClick={() => setOpened(!opened)} />
                    <div className="card-info">
                        {
                            (cardTitle == "Visa" && <VisaSvg className="card-icon" />) ||
                            (cardTitle == "Master Card" && <MasterCardSvg className="card-icon" />) ||
                            (cardTitle == "Maestro" && <MaestroSvg className="card-icon" />) ||
                            (cardTitle == "Rupay" && <RupaySvg className="card-icon" />) ||
                            (cardTitle == "Amex Card" && <AmexSvg className="card-icon"/>)
                        }
                        <span className="card-name">{cardTitle}</span>
                    </div>
                    <div className={`card-stat ${cardStatClass}`}>
                        {
                            cardStat
                        }
                    </div>
                </div>
                {
                    cardStatClass !== "requestinprocess" &&
                    <div className="card-button">
                        <InfoIcon className="info-icon"/>
                        <button type="button" className={`btn btn-${cardStatClass} btn-card`}>
                            {
                                (cardStat === "Active" && "Deactivate") ||
                                (cardStat === "In-active" && "Activate Now")
                            }
                        </button>
                    </div>
                }
            </div>
            <div className="card-more-info">
                <p className="card-info-text">TDR applicable is 3% per transaction. <a className="link link-know-more" href="#">know more</a> about {cardTitle}.</p>
            </div>
        </div>
    )
}

export default Card