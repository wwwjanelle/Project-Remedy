import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase.js';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../App.css";
import image from "../../img/google.webp";
import image2 from "../../img/fall.jpeg";

const Login = ({setShouldShowSignIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [insurance, setInsurance] = useState("");
    const [signInError, setSignInError] = useState(null);
    const genericError = "An  error occurred while signing you in, please try again.";
    const history = useNavigate();
    const [signUpError, setSignUpError] = useState(null);
    const [currentUser, setCurrentUser] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
           setCurrentUser(user);
        });
        },);  
  
  
    const doSignIn = () => {
        setSignInError(null);
        if (!email  || !password || !insurance) {return;}
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
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <div className='hidden sm:block'>
                    <img className='w-50 h-50 object-cover' src={image2} alt="Remedy" />
            </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form>
                        <h2 className='text-4xl font-bold text-center mb-8'>LOG IN</h2>
                        <div>
                            <div className="form-group">
                                <input className='border p-2 mr-2' type="text" placeholder='Insurance Company' value={insurance} onChange={(e) => setInsurance(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className='border p-2 mr-2' type="text" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className='border p-2' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                            </div>
                        </div>
                        <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(225, 225, 225)" }}
                        onClick={doSignIn}
                        to="/survey">
                        Sign In
                    </button>
                        {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}
                        <Button variant="outlined" to="/dashboard" onClick={doGoogleSignUp}><b><img border = "0" src={image} alt="Google" width="24" height="24"/></b></Button>
                        <p className='text-center'><a href="/forgot-password">Forgot Username or Password?</a></p>
                        <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(225, 225, 225)" }}
                        onClick={(e) => {e.preventDefault();history("/patient/signup");}}
                        to="/patient/signup">
                        Sign Up
                    </button>
                    </form>
                </div>
            </div>
        </div>
        /*
        <form>
            <h3>Log In</h3>
            {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}

            {/* <Button>
            <Link 
            style={{ marginBottom: 30 }} 
            to="/patient/login" >
            {currentUser ? <b>Account: {auth.currentUser.displayName}</b> : <b>Log In</b> }
            </Link></Button> }

            <div className="form-group">
                <label>Insurance Company</label>
                <TextField label="Insurance Company" className="form-control" value={email} onChange={(e) => setInsurance(e.target.value)} />
            </div>


            <div className="form-group">
                <label>Email</label>
                <TextField label="Email address" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <TextField label="Password" className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <Button variant="outlined" href="/survey" onClick={doSignIn}><b>Log In</b></Button>
            <Button variant="outlined" to="/dashboard" onClick={doGoogleSignUp}><b><img border = "0" src={image} alt="Google" width="24" height="24"/></b></Button>
            {/* DOES NOT REDIRECT even with href }
            <Button variant="outlined" href="/" onClick={() => auth.signOut()}><b>Log Out</b></Button>

            <p className="forgot-password text-right">
                Forgot <a href="/forgot-password">password?</a>
            </p>
            <p className="forgot-password text-right">
                Don't have an account?: 
                <Button variant="outlined" onClick={(e) => {e.preventDefault();history("/patient/signup"); setShouldShowSignIn(false);}}><b>Sign up here</b></Button>
            </p>
        </form> */
    );
};

export default Login;