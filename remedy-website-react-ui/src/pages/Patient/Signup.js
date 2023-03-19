import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
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
    const [loader, setLoader] = useState(false);
      
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    
        db.collection("patUserInfo")
          .add({
            fullName: name,
            email: email,
            insurance: insurance,
            phoneNum: phoneNum
          })
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setName("");
        setEmail("");
        setInsurance("");
        setPhoneNum("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Patient Registration</h3>

            <div className="signup-box" onSubmit={(e) => {doSignUp(e)}}>
            {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

                <label>Full Name</label>
                <div>
                <input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /></div>

                <label>Email</label>
                <div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></div>

                <label>Insurance Company</label>
                <div>
                <input
                    placeholder="Insurance Company"
                    value={insurance} 
                    onChange={(e) => setInsurance(e.target.value)}
                /></div>

                <label>Phone Number</label>
                <div>
                <input
                    placeholder="Phone Number"
                    value={phoneNum} 
                    onChange={(e) => setPhoneNum(e.target.value)}
                /></div>

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

            
                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(225, 225, 225)" }}
                    onClick={doSignUp}
                    to="/survey">
                    Register
                </button>
                {/* DOES NOT REDIRECT even with href */}
            </div>

            <p className="forgot-password text-right">
                Already registered?: 
                <Button variant="outlined" onClick={(e) => {e.preventDefault();history("/provider/login"); setShouldShowSignIn(true);}}><b>Log in here</b></Button>
            </p>
        </form>
    );
};

export default Signup;