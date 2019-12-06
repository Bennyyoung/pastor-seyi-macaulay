import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter, NavLink } from "react-router-dom" 
import Home from "./Home/Home"
import Form from "./Form";
import Africatalenthouse from "./Africatalenthouse" 
import Contact from "./Contact"
import About from "./About" 
import Payments from "./Payments"

import "./NavBar.css"
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"
import {Navbar, Nav, NavDropdown, } from "react-bootstrap"


const NavBar = () => {
    return (
        <div>
          
            <Navbar bg="light" variant="light" sticky="top" style={{color: 'white'}} expand="xl">
  <Navbar.Brand 
    
    href="/">
      <img
        alt=""
        src="https://2.bp.blogspot.com/-zEb1qlGJouQ/XBDblLVTPbI/AAAAAAAAChM/BUxv9K6NTg498PZzJanYn7yBJSWNDXH1ACLcBGAs/s400/IMG-20181211-WA0005%2B%25281%2529.jpg"
        width="70"
        height="50"
        className="d-inline-block align-top"
      />
      
      Dream Youth International</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/africa_talent_house">Africa Talent House</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>


      <NavDropdown title="Education an Empowerment" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Literacy Education</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Robotics Education</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Youth Empowerment</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/africa_talent_house">Our certified candidates</Nav.Link>
      <Nav.Link href="/payments">Payments </Nav.Link>

      <Nav.Link href="contact">Contact Us</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  
</Navbar>
<nav style={{marginTop: '5px'}}>
<h6>DREAM YOUTH INTERNATIONAL: Promoting Youth, Education and Project Managements in Africa</h6>

</nav>

            <Router>
                <Switch>
                    <Route path="/" component={withRouter(Home)} exact></Route>
                    <Route path="/register" component={withRouter(Form)} exact></Route>
                    <Route path="/africa_talent_house" component={withRouter(Africatalenthouse)} exact></Route>
                    <Route path="/about" component={withRouter(About)} exact></Route>
                    <Route path="/africa_talent_house" component={withRouter(Africatalenthouse)} exact></Route>
                    <Route path="/payments" component={withRouter(Payments)} exact></Route>

                    <Route path="/contact" component={withRouter(Contact)} exact></Route>

                </Switch>
            </Router>
        </div>
        
    )
    
} 

export default NavBar