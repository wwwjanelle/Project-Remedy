import React, {Component, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.js';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "../../App.css";

const Signup = ({setShouldShowSignIn}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [insurance, setInsurance] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [signUpError, setSignUpError] = useState(null);
    const history = useNavigate();
    const [error, setError] = useState(false);
      
    const genericError = "An  error occurred while signing you up, please try again.";
    const matchPasswords = "Please make sure that your confirmed password matches!";

    const doSignUp = () => {
        setSignUpError(null);
        if (!email  || !password || !name || !insurance || !phoneNum || !confirmPass ) {
            setError(true);
            return;
        } else if (password !== confirmPass) {
            setError(false);
            let displayMessage = matchPasswords;
            setSignUpError(displayMessage);
            return;
        }
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

    return (
        <form>
            <h3>Patient Registration</h3>

            <div className="signup-box" onSubmit={(e) => {doSignUp(e)}}>
            {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
              
            <div className="form-group">
                    <label>Full Name</label>
                    <TextField label="Full Name" className="form-control" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <TextField label="Email address" className="form-control"  variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Insurance Company</label>
                    <TextField label="Insurance Company" className="form-control" variant="outlined" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <TextField label="Enter a valid US phone number" className="form-control" variant="outlined" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password (at least 6 characters)</label>
                    <TextField label="Enter password" className="form-control" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Confirm Password (at least 6 characters)</label>
                    <TextField label="Enter password again" className="form-control" variant="outlined" type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">I agree to the terms and conditions</label>
                    </div>
                </div>

            
              <Button variant="outlined" href="/survey" onClick={doSignUp}><b>Register</b></Button>
              {/* DOES NOT REDIRECT */}
            </div>

            <p className="forgot-password text-right">
                Already registered?: 
                <Button variant="outlined" onClick={(e) => {e.preventDefault();history("/provider/login"); setShouldShowSignIn(true);}}><b>Log in here</b></Button>
            </p>
        </form>
    );
};

export default Signup;