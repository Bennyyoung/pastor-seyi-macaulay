import React, {useState, useEffect} from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Foot from "./components/Foot"
import Navbar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer"

function App (props) {
    

    return (
            <div>
                
                <Navbar />
                <Foot />
        </div>
        
    );
}

export default App;