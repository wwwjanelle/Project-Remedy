import React, { useState } from "react";
import "../../App.css";
// import { Button } from "@mui/material";

const HomePage = ({ }) => {

    return (
        <form>
            <h3>Home Page</h3>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider">Provider</a></button>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient">Patient</a></button>
        </form>
    );
};

export default HomePage;