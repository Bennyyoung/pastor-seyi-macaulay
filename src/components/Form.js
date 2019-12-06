import React from 'react';
import "./Form.css"

const Form = () => {
    return (
        <div className="container">
            <form id="contact" action="" >
                <h3>Project management Training</h3>
                <h4>Contact us for PM Training</h4>

                <fieldset>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." required autofocus/>
                </fieldset>
               


                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email..." required></input>

                <label>Sex:</label><br />
                <input style={{width: "20px"}} type="radio" name="gender" value="male" value="male" required />Male<br />
                <input style={{width: "20px"}} type="radio" name="gender" value="female" value="female" required /> Female<br />
                <label for="email">Phone Number (Preferably WhatsApp No)</label>
                <input type="email" id="email"placeholder="Enter your phone no..." required></input>

                <label for="services">Institution/Organization</label>
                <select name="services" id="services">
                    <option value="">Business Owner</option>
                    <option value="">Worker</option>
                    <option value="">Student</option>
                </select>

                <label for="services">How did you hear about this training</label>
                <select name="services" id="services">
                    <option value="">Through Friends</option>
                    <option value="">Through the Internet</option>
                    <option value="">Through my Institution/Organization</option>
                    <option value="">Through Dream Youth International</option>
                </select>

                <label for="services">Training type</label>
                <select name="services" id="services">
                    <option value="">CAPM</option>
                    <option value="">PMP</option>
                    <option value="">STRATEGIC AND PROJECT MANAGEMENT TRAINING</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form