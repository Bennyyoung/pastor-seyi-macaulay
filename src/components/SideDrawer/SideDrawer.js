import React from "react";
import "./SideDrawer.css"

const SideDrawer = props => {
    return (
    <nav className="side-drawer">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/africa_talent_house">AFrica Talent House</a></li>

        </ul>
    </nav>
    )
}

export default SideDrawer