import React from "react";
import "../../App.css";
import image from "../../img/password.gif";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

const ForgetPassword = () => {

    return (
        <form>
            <h3>Forgot your Password?</h3>
            <div className='hidden sm:block'>
                <img className='w-50 h-50 object-cover' src={image} alt="LOL" />
            </div>
            <button type="submit" className="btn btn-dark btn-sm btn-block">haha</button>

        </form>
    );
};

export default ForgetPassword;