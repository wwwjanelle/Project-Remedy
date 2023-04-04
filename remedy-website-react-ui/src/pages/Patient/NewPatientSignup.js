import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"

const NewPatientSignUp = () => {

    const [fullName, setFullName] = useState('');
    const [insuranceNumber, setInsuranceNumber] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const SignUpLogic = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((userCredential) => {
                console.log(userCredential);
            })

        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <form onSubmit={SignUpLogic}>
            <h3>Register</h3>

            <div className="form-group">
                <label>Full Name</label>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="First Name Last Name" 
                    value={fullName} 
                    onChange = { (e) => setFullName(e.target.value) }
                        />
            </div>

            <div className="form-group">
                <label>Insurance Number</label>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Insurance Number" 
                    value={insuranceNumber} 
                    onChange = { (e) => setInsuranceNumber(e.target.value) }
                        />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    value={emailAddress} 
                    onChange = { (e) => setEmail(e.target.value) }
                />
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Enter a valid US phone number" 
                    value={phoneNumber}
                    onChange = { (e) => setPhoneNumber(e.target.value) } 
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    value={password}
                    onChange = { (e) => setPassword(e.target.value) } 
                    />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    value={confirmPass} 
                    onChange = { (e) => setConfirmPass(e.target.value) }
                    />
            </div>

            <div className="form-group">
                <div className="custom-control custom checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">I agree to the terms and conditions</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
            </p>
        </form>
    );

}
export default NewPatientSignUp