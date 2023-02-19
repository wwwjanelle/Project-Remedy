import React, { Component } from "react";
import "../../App.css";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Hospital ID #</label>
                    <input type="hospitalID" className="form-control" placeholder="Enter your hospital ID" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter a valid US phone number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">I agree to the terms and conditions</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/survey">Register</a></button>
                
                <p className="forgot-password text-right">
                    Already registered?: <a href="/provider/login">Log in here</a>
                </p>
            </form>
        );
    }
}