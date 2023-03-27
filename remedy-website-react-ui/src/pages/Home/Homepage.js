import React, { useState } from "react";
import "../../App.css";
import image from "../../img/Remedy-1.jpeg";
import background from "../../img/Background.png";
// import { Button } from "@mui/material";
// <script>
// function bigImg(x) {
//    x.style.height = "128px";
//    x.style.width = "128px";
//}
//function normalImg(x) {
//    x.style.height = "64px";
//    x.style.width = "65px";
//}
//</script>

const HomePage = ({ }) => {

    return (
        <form>
            <div style={{backgroundImage: {background}, backgroundRepeat:"no-repeat"}}></div>
            <img border = "0" src={image} alt="Remedy" width="64" height="64"/>
            <h3>Home Page</h3>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider">Provider</a></button>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient">Patient</a></button>
            
        </form>
    );
};

export default HomePage;