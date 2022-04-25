import React, { useState } from "react";
import DetailsContainer from "../detailsContainer/detailsContainer.component";
import MenuContainer from "../menuContainer/menuContainer.component";
import "./contentContainer.styles.css"

const ContentContainer = function() {

    const [activeTab, setActiveTab] = useState(1)

    return (
        <section className="contentContainer">
            <MenuContainer setActiveTab={setActiveTab} activeTab={activeTab}/>
            <DetailsContainer />
        </section>
    )
}

export default ContentContainer;