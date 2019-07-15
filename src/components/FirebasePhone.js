import React, { Component } from 'react'
import fire from '../config/Fire';

class FirebasePhone extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       phone: ''
    //     };
    //   }
    
    // login(){
    //     console.log(3578);
    // }

    // var applicationVerifier = new firebase.auth.RecaptchaVerifier( 'recaptcha-container');
    // var provider = new firebase.auth.PhoneAuthProvider(); provider.verifyPhoneNumber('+16505550101', applicationVerifier) .then(function(verificationId) { 

    // var verificationCode = window.prompt('Please enter the verification ' + 'code that was sent to your mobile device.'); 
    
    // return firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode); }) .then(function(phoneCredential) { return firebase.auth().signInWithCredential(phoneCredential); });


    // requestVerificationCode = () => {
    //     const { phoneNumber } = this.state;
    //     const appVerifier = new firebase.auth.RecaptchaVerifier(
    //       "recaptcha-container"
    //     );
    //     if (phoneNumber < 10) {
    //       this.setState({ error: true });
    //     } else {
    //       this.setState({ message: "Sending code ..." });
    
    //       firebase
    //         .auth()
    //         .signInWithPhoneNumber(phoneNumber, appVerifier)
    //         .then(confirmResult =>
    //           this.setState({ confirmResult, verifying: true })
    //         )
    //         .catch(error =>
    //           this.setState({
    //             message: `Sign In With Phone Number Error: ${error.message}`
    //           })
    //         );
    //     }
    //   };


// rotato




    //   componentDidMount () {
    //     fire.auth().recaptchaVerifier = new fire.auth.RecaptchaVerifier("recaptcha-container",
    //     {
    //        size:"invisible"
    //         // other options
    //     });
    // }
    
    // onClick() {
    //     const phoneNumber = this.phone;
    //     const appVerifier = window.recaptchaVerifier;
    //     fire.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmResult => {
    //       // success
    //     })
    //     .catch(error => {
    //       // error
    //     });
    // }






    componentDidMount(){

        fire.auth().currentUser.linkWithPhoneNumber("+xxxxxxxx", xxx)
      .then((confirmationResult) => {
        // At this point SMS is sent. Ask user for code.
        let code = window.prompt('Please enter the 6 digit code');
        return confirmationResult.confirm(code);
      })
      .then((result) {
        // Phone credential now linked to current user.
        // User now can sign in with email/pass or phone.
      });
      .catch((error) => {
        // Error occurred.
      });
    }

    render(){
        return(
            <section>
                <form>
                    <label htmlFor="phone">Phone</label>
                    <br></br>
                    <input id="recaptcha-container" type="button" onClick="this.onClick" />
                    {/* <input type="phone"/>é */}
                    <br></br>
                    {/* <button type="submit" onClick={this.state.phone}>Connexion</button> */}
                </form>
            </section>
        )
    }
}

export default FirebasePhone