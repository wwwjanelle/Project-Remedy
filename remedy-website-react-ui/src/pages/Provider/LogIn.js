
import React, { Component, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase.js';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../App.css";

const LogIn = ({setShouldShowSignIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hospitalID, setHospitalID] = useState("");
    const [signInError, setSignInError] = useState(null);
    const genericError = "An  error occurred while signing you in, please try again.";
    const [name, setName] = useState("");
    const history = useNavigate();
    const [signUpError, setSignUpError] = useState(null);
  
  
    const doSignIn = () => {
      setSignInError(null);
      if (!email  || !password || !hospitalID) {return;}
      auth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let displayMessage = genericError;
          if(errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
               displayMessage = "Incorrect Username or Password";
          }
          else if(errorCode === "auth/invalid-email") {
              displayMessage = "Invalid email address";
          }
          setSignInError(displayMessage);
      });
    } 
  
    const doSignUp = () => {
      setSignUpError(null);
      if (!email  || !password || !name) {return;}
      auth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
              result.user.updateProfile({
                  displayName: name
              }).then(() => {
              }, (e) => {
                  setSignUpError(genericError);
                  console.log(e)
          });     
          })
          .catch((e) => {
          let displayMessage = genericError;
          if (e.code === 'auth/email-already-in-use'){
              displayMessage = "Email address already in use";
          }
          setSignUpError(displayMessage);
          console.log(e)
      });
    }
  
    const doGoogleSignUp = () => {
      setSignUpError(null);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
        setSignUpError(genericError);
      });
  }
  
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Hospital ID #</label>
                    <TextField label="Enter your Hospital ID" className="form-control" variant="outlined" value={hospitalID} onChange={(e) => setHospitalID(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <TextField label="Email address" className="form-control" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <TextField label="Password" className="form-control" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                
                {/* <div className="signin-box" onSubmit={(e) => {doSignUp(e)}}></div> */}

                <Button variant="outlined" href="/survey" onClick={doSignIn}><b>Log In</b></Button>
                
                <p className="forgot-password text-right">
                    Forgot <a href="/forgot-password">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account?: 
                    <Button variant="outlined" onClick={(e) => {e.preventDefault();history("/provider/signup"); setShouldShowSignIn(false);}}><b>Sign up here</b></Button>
                </p>
            </form>
        );
    };

export default LogIn;