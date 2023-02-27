import React, { Component } from "react";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <form>
                <h3>Home Page</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider">Provider</a></button>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient">Patient</a></button>

            </form>
        );
    }
}