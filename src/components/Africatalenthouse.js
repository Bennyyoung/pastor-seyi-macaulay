import React from "react";
import Gallery from "react-grid-gallery"
import Africatalenthouse_image from "./ATH_image.jpg"
import "./Africatalenthouse.css"

// const IMAGES =
// [{
//         src: "https://1.bp.blogspot.com/-FDaHaD0iyOk/Xb1j2N6HNSI/AAAAAAAADOU/VbD1PTnAupwI1RNV0r5H23jROXDRbsOwgCLcBGAsYHQ/s640/ATH.jpg",
//         thumbnail: "https://1.bp.blogspot.com/-FDaHaD0iyOk/Xb1j2N6HNSI/AAAAAAAADOU/VbD1PTnAupwI1RNV0r5H23jROXDRbsOwgCLcBGAsYHQ/s640/ATH.jpg",
//         thumbnailWidth: 2005,
//         thumbnailHeight: 184,
//         isSelected: true,
//         caption: "Africa talent house",
//         margin: 3,
// }]

const Africatalenthouse = () => {
    return (
        <div className="container">
            

            <form action="" id="contact"><br />
            <img className="img_for_africa_talent_house" src={Africatalenthouse_image}/>
                <h4 style={{fontWeight: "bold"}}>AFRICA TALENT HOUSE REGISTRATION FORM</h4>
                <label for="name">Full name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name..." required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                <label for="date">Date:</label>
                <input type="date" id="email" name="date"required />
                <label for="email">Reg Id No:</label>
                <input type="email" id="email" name="email" placeholder="Enter your reg id no..." required />
                <label for="email">Profession:</label>
                <input type="email" id="email" name="email" placeholder="Enter your profession..." required />
                <label for="email">Marriage Status:</label><br />
                <input type="checkbox" style={{width: "20px"}} name="Married" required />Married<br />
                <input type="checkbox" style={{width: "20px"}} name="Single" required />Single<br />

                <label>Job Description</label><br />
                <input style={{width: "20px"}} type="radio" name="gender" value="male" value="male" required />Employed<br />
                <input style={{width: "20px"}} type="radio" name="gender" value="female" value="female" required /> Unemployed<br />
                <input style={{width: "20px"}} type="radio" name="gender" value="female" value="female" required /> Student<br />

                <label for="email">Residential Address</label>
                <input type="text" id="email"placeholder="Residential Address" required />
                <label for="email">Office Address</label>
                <input type="text" id="email"placeholder="Office Address" required />
                <label for="email">Phone Number (Preferably WhatsApp No)</label>
                <input type="text" id="email"placeholder="Enter your phone no..." required />

                <label for="services">Institution/Organization</label>
                <select name="services" id="services">
                    <option value="">Business Owner</option>
                    <option value="">Worker</option>
                    <option value="">Student</option>
                </select>

                <label for="services">How did you know about us</label>
                <select name="services" id="services" required>
                    <option value="">Guardian</option>
                    <option value="">TV/Radio Advert</option>
                    <option value="">Friends</option>
                    <option value="">Internet</option>
                </select>

                <label for="email">What is your expectations from ATH@TRAIN-NIG 1.O:</label><br />
                <input type="checkbox" style={{width: "20px"}} name="email" name="Leadership Development" required/>Leadership Development<br />

                <input type="checkbox" style={{width: "20px"}} name="email" name="Talent/Skill Development" required/>Talent/Skill Development<br />

                <input type="checkbox" style={{width: "20px"}} name="email" name="Self Development" required/>Self Development<br />
                <input type="checkbox" style={{width: "20px"}} name="email" name="Talent/Skill management" style={{width: "20px"}} required/>Talent/Skill management<br />

                <label for="email">Counselors Name</label>
                <input type="text" placeholder="Counselors Name" required/>
                <label for="email">Counselors Id No</label>
                <input type="text" placeholder="Counselors Id No" required/>
                <label for="email">Student Id No</label>
                <input type="text" placeholder="Student Id No" required/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    
    )
} 

export default Africatalenthouse;