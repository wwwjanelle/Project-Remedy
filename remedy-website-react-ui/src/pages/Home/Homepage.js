import React, { useState } from "react";
import "../../App.css";
// import { Button } from "@mui/material";

const HomePage = ({ }) => {

    return (
        <form>
            <h3>Home Page</h3>
            {/* <div className="settings_select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>} */}
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider">Provider</a></button>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient">Patient</a></button>

        </form>
    );
};

export default HomePage;