import React, { Component } from "react";
import "../../App.css";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Insurance Company</label>
                    <input type="insurance" className="form-control" placedholder="Enter your Insurance Company/policy" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placedholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placedholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/survey">Sign in</a></button>

                <p className="forgot-password text-right">
                    Forgot <a href="/forgot-password">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account?: <a href="/patient/signup">Sign up here</a>
                </p>
            </form>
        );
    }
}