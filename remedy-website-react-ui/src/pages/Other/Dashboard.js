import React from "react";
import axios from "axios";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';


const Dashboard = () => {

    function getData() {
        axios({
            method: "GET",
            url:"/Pdashboard",
        })
    }

    return (
            <form>
            <h3>Dashboard</h3>

            <button type="submit" className="btn btn-dark btn-sm btn-block" onClick={getData}>Send a survey request to a patient</button>
            <p>^ this is the automated email button</p>
        </form>
    );
};

export default Dashboard;