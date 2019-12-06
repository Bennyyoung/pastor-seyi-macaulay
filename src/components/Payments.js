import React, { Component } from 'react'
    // import the library
    import RavePaymentModal from 'react-ravepayment'
    import "./Payments.css"
 
    class Payments extends Component {

        
    		state = {
    		  key: "FLWPUBK_TEST-7dfdf85b776041fc6e4acda06c4db405-X", // RavePay PUBLIC KEY
    		  email: "benjamineffiong124@yahoo.com", // customer email
    		  amount: 1000 // equals NGN 1000. Minimum amount allowed NGN 1 while on production or live system, it's 10
    	    }
 
    	  callback = (response) => {
    		  console.log(response);
 
    	  }
 
    	  close = () => {
    		  console.log("Payment closed");
    	  }
 
    	  getReference = () => {
    		  let text = "";
    		  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
 
    		  for( let i=0; i < 10; i++ )
    			  text += possible.charAt(Math.floor(Math.random() * possible.length));
 
              return text;
    	  }
 
    	render () {
        return (
          <div id="container">
                <h3>Alternative Payment Channel</h3>
                <p>
                    If you are unable to make payments on our site, you can send your deposits via Bank/ATM transfer or online transfer platforms (Internet Banking, Thrivesend, Quickteller etc) to the account below:
                    <b><br />
                        Account No: 2262025914
                        <br/>
                        Account Name: DREAMYOUTHS INTERNATIONAL<br />
                        Bank: Ecobank<br />
                    </b>
                    Ensure to send your proof of payment immediately to <a href = "mailto: dreamyouthinternational@gmail.com">dreamyouthinternational@gmail.com</a>
                </p>
              <div className='App'>
                    <p >
                        <RavePaymentModal
                            text="Make Payment"
                            class="payButton"
                            metadata={[{metaname:'Device', metavalue : 'IPhone X'}]}
                            reference={this.getReference()}
                            email={this.state.email}
                            amount={this.state.amount}
                            ravePubKey={this.state.key}
                            callback={this.callback}
                            close={this.close}
                            isProduction={false}
                            // tag="button" 
                            className='App-intro'
                        />
                    </p>
              </div>
              
              
            
          </div>
        )
      }
    }
 
    export default Payments