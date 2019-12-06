import React from "react"

import "./DrawerToggleButton.css"

const drawerToggleButton = props => {
    return (
        <button className="toggle-botton">
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>

        </button>
    )
}

export default drawerToggleButton;