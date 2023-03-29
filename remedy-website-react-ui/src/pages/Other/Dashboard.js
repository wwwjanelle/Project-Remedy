import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [email, setEmail] = useState("");

    function getData() {
        axios({
            method: "GET",
            url:"/Pdashboard",
        })
    }

    return (
            <form>
            <h3>Dashboard</h3>
            <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Patient Email address</label><div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></div>
            </div>
            <button type="submit" className="btn btn-dark btn-sm btn-block" onClick={getData}>Send survey request</button>
            </div>
        </form>
    );
};

export default Dashboard;