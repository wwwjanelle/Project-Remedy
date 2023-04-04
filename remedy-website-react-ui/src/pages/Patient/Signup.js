import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "../../App.css";
import image2 from "../../img/misty.jpeg";
import image from "../../img/google.webp";

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
                {signUpError ? <div className="log-sign-error">{signUpError}</div> : <></>}
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>};
                <div className='p-4 flex flex-col justify-around'>
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className='text-4xl font-bold text-center mb-8'>REGISTER</h2>
                        <div>
                            <div className="form-group">
                                <input className='border p-3 mr-2' type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className='border p-3 mr-2' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className='border p-3' type="text" placeholder='Insurance Company' value={insurance} onChange={(e) => setInsurance(e.target.value)}/>
                                </div>
                            <div className="form-group">
                                <input className='border p-3' type="text" placeholder='Phone Number' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}/>
                                </div>
                            <div className="form-group">
                                <input className='border p-3' type="password" placeholder='Password (at least 6 characters)' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            <div className="form-group">
                                <input className='border p-3' type="password" placeholder='Confirm Password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
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
                                Sign Up
                            </button>
                            <button className='border shadow-lg hover:shadow-xl px-2 py-1 relative flex items-center' to="/dashboard" onClick={doGoogleSignUp}><img border = "0" src={image} alt="Sign In with Google" width="24" height="24"></img></button>
                            <p className="forgot-password text-right">
                            Already registered?: 
                            <Button variant="outlined" href="/provider/login"><b>Log in here</b></Button>
                </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        /*
        <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={image2} alt="/" />
    

        <div className='flex justify items-center h-full'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center py-4'>REGISTER</h2>
                <div className='flex justify-between py-8'> 
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Full Name</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Email</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Insurance Company</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={insurance}
                        onChange={(e) => setInsurance(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Phone Number</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Password (at least 6 characters)</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Confirm Password</label>
                    <input className='border relative bg-gray-100 p-2' type="text" value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}/>
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
                        Sign Up
                    </button>
                    <button className='border shadow-lg hover:shadow-xl px-2 py-1 relative flex items-center' to="/dashboard" onClick={doGoogleSignUp}><img border = "0" src={image} alt="Sign In with Google" width="24" height="24"></img></button>
                   
                <p className="forgot-password text-right">
                    Already registered?: 
                    <Button variant="outlined" href="/provider/login"><b>Log in here</b></Button>
                </p>
            </form>
        </div>
        </div>
        
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
                    <TextField label="Enter password" className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Confirm Password (at least 6 characters)</label>
                    <TextField label="Enter password again" className="form-control" type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
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
                {/* DOES NOT REDIRECT even with href }
            </div>

            <p className="forgot-password text-right">
                Already registered?: 
                <Button variant="outlined" onClick={(e) => {e.preventDefault();history("/patient/login"); setShouldShowSignIn(true);}}><b>Log in here</b></Button>
            </p>
        </form> */
    );
};

export default Signup;
