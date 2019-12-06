import React from "react"
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from "react-mdl"
import Socials from "./Socials"
import "./Foot.css"


const Foot = () => {
    return(
        <Footer size="mega" style={{marginTop: "2rem"}}>
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Register</a>
                <a href="#">Payments</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Education">
            <FooterLinkList>
                <a href="#">Youth Empowerment</a>
                <a href="#">Literacy Education</a>
                <a href="#">Robotics Education</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Dream Youth international">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
            <Socials />

        </FooterLinkList>
    </FooterSection>
</Footer>
    )
}

export default Foot;