import React, { useState } from "react";

import "./menuContainer.styles.css";
import MenuItem from "./menuItem/menuItem.component";

const MenuContainer = function ({activeTab, setActiveTab}) {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="menu-container">        
            <div className="menu-opener" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`line ${menuOpen ? "line-top" : ""}`}></div>
                <div className={`line ${menuOpen ? "line-middle" : ""}`}></div>
                <div className={`line ${menuOpen ? "line-bottom" : ""}`}></div>
            </div>
            <ul className={`menu-list ${menuOpen ? "menu-list-open" : ""}`}>
                <MenuItem icon="credit" itemTitle="Cards" active={activeTab === 1} onclick={() => setActiveTab(1)}/>
                <MenuItem icon="netBanking" itemTitle="Net Banking" active={activeTab === 2} onclick={() => setActiveTab(2)}/>
                <MenuItem icon="upi" itemTitle="UPI" active={activeTab === 3} onclick={() => setActiveTab(3)}/>
                <MenuItem icon="wallet" itemTitle="Wallets" active={activeTab === 4} onclick={() => setActiveTab(4)}/>
                <MenuItem icon="emi" itemTitle="EMI" active={activeTab === 5} onclick={() => setActiveTab(5)}/>
                <MenuItem icon="credit" itemTitle="International Payments" active={activeTab === 6} onclick={() => setActiveTab(6)}/>
                <MenuItem icon="credit" itemTitle="ENACH" active={activeTab === 7} onclick={() => setActiveTab(7)}/>
                <MenuItem icon="credit" itemTitle="SI" active={activeTab === 8} onclick={() => setActiveTab(8)}/>
            </ul>
        </div>
    )
}

export default MenuContainer