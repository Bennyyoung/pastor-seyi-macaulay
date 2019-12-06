import React from "react";
import { Pane, Heading, Text } from 'evergreen-ui'
import "./Contact.css"


const Contact = () => {

    return (
        <div>

<div class="container">  
  <form id="contact" action="" method="post">
    <h3>DREAM YOUTH Contact Form</h3>
    <h4>Contact us</h4>
    <fieldset>
      <input placeholder="Your name" type="text"  required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
    <input type="submit" value="Submit"/>
    </fieldset>
  </form>

  
</div>
            <Pane clearfix style={{margin: "15px"}}>
                
 

  <Pane
    elevation={4}
    float="left"
    backgroundColor="white"
    width={200}
    height={120}
    margin={84}
    display="flex"
    borderRadius={10}
    // justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Heading size={500} style={{textAlign:"center", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>Abuja Office:</Heading>
    <Text style={{textAlign: "center", fontWeight: "bold", paddingTop: "15px"}} size={400}>Goodland Plaza, Bayelsa Court, Gaduwa Estate, Abuja FCT.</Text>
  </Pane>

  <Pane
    elevation={4}
    backgroundColor="white"
    width={200}
    height={120}
    margin={84}
    display="flex"
    borderRadius={10}
    // justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Heading size={500} style={{textAlign:"center", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>Ota Office:</Heading>
    <Text style={{textAlign: "center", fontWeight: "bold", paddingTop: "15px"}} size={400}>Dreamyouth Complex 10 Moruuf Alagbe Road, Atan Ota.</Text>
  </Pane>
  
</Pane>



        </div>
    )
}

export default Contact