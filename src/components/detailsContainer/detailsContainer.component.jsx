import React from "react";

import "./detailsContainer.styles.css"
import DetailsItem from "./detailsItem/detailsItem.component";

const DetailsContainer = function() {
    return (
        <div className="details-container">
            <DetailsItem />
        </div>
    )
}

export default DetailsContainer