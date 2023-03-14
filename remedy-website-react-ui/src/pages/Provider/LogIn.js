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
    const [currentUser, setCurrentUser] = useState();

    auth.onAuthStateChanged((user) => {
       setCurrentUser(user);
    }); 
  
  
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
            {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}

            <div className="form-group">
                <label>Hospital ID #</label>
                <TextField label="Enter your Hospital ID" className="form-control" variant="outlined" value={hospitalID} onChange={(e) => setHospitalID(e.target.value)} />
            </div>

            {/* <Button>
            <Link 
            style={{ marginBottom: 30 }} 
            to="/provider/login" >
            {currentUser ? <b>Account: {auth.currentUser.displayName}</b> : <b>Log In</b> }
            </Link></Button> */}

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

            <Button variant="outlined" href="/survey" onClick={doSignIn}><b>Log In</b></Button>

            <Button variant="outlined" onClick={doGoogleSignUp}><b>Sign In with Google</b></Button>
            <Button variant="outlined" href="/" onClick={() => auth.signOut()}><b>Log Out</b></Button>
            
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