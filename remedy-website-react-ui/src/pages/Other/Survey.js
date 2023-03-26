import React, { Component } from "react";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

export default class Survey extends Component {
    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        
        return (
            <form>

                <h2>Hello, { user } </h2>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Home </button>
                <button type="submit" className="btn btn-dark btn-lg btn-block">New Survey</button>
                <button type="submit" className="btn btn-dark btn-lg btn-block">My Account</button>

                <h3>Surveys</h3>

                <p>patient sees past surveys...</p>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Past Surveys</button>

                <h3>Assessments</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Patient Assessments</button>

                <h3>My Providers</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Patient's Providers</button>
            </form>
        );
    }
}
