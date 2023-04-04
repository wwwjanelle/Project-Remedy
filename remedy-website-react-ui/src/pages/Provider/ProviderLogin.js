import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";


const ProviderLogin = () => {

    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [insuranceNumber, setInsuranceNumber] = useState('');


    const navigate = useNavigate();

    const SignInLogic = (e) => {
        e.preventDefault();
        navigate('/provider/secure');

        signInWithEmailAndPassword(auth, emailAddress, password)
            .then((userCredential) => {
                console.log(userCredential);
            })

        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <form onSubmit = {SignInLogic}>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Insurance Number</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placedholder="Insurance Number" 
                    value = {insuranceNumber}
                    onChange = {
                        (e) => setInsuranceNumber(e.target.value)
                    }    
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input 
                    type="email" 
                    className="form-control"
                    placedholder="Enter email" 
                    value = {emailAddress}
                    onChange = {
                        (e) => setEmail(e.target.value)
                    }
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placedholder="Enter password"
                    value = {password}
                    onChange = {
                        (e) => setPassword(e.target.value)
                    }    
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}

export default ProviderLogin