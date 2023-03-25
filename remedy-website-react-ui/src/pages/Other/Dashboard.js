import React, { Component, useState } from "react";
import axios from "axios";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [profileData, setProfileData] = useState(null)

    function getData() {
        axios({
            method: "GET",
            url:"/Pdashboard",
        })
    }

    return (
            <form>
            <h3>Dashboard</h3>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={getData}>Send a survey request to a patient</button>
            <p>^ this is the automated email button</p>
        </form>
    );
};

export default Dashboard;