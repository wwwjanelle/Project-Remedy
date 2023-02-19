import React, { Component } from "react";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

export default class Patient extends Component {
    render() {
        return (
            <form>
                <h3>Patient</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient/login">Log In</a></button>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient/signup">Sign Up</a></button>
            
            </form>
        );
    }
}