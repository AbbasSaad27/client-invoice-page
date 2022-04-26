import React from "react";
import {ReactComponent as CreditSvg} from "../../../icons/credit.svg";
import {ReactComponent as EmiSvg} from "../../../icons/emi.svg";
import {ReactComponent as NetBankingSvg} from "../../../icons/netBanking.svg";
import {ReactComponent as WalletSvg} from "../../../icons/wallet.svg"
import {ReactComponent as UpiSvg} from "../../../icons/upi.svg"

import "./menuItem.styles.css";

const MenuItem = function ({icon, itemTitle, active, onclick}) {
    return (
        <li className={`menu-item ${active ? "active-item" : ""}`} onClick={onclick}>
            {
                (icon === "credit" && <CreditSvg className="menu-item-icon" />) ||
                (icon === "emi" && <EmiSvg className="menu-item-icon" />) ||
                (icon === "netBanking" && <NetBankingSvg className="menu-item-icon" />) ||
                (icon === "wallet" && <WalletSvg className="menu-item-icon" />) ||
                (icon === "upi" && <UpiSvg className="menu-item-icon" />) 
            }
            <span className="menu-item-title">{itemTitle}</span>
        </li>
    )
}

export default MenuItem