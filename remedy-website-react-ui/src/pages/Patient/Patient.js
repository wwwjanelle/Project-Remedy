import React from "react";
import React from "react";
import "../../App.css";
import image from "../../img/sunset.jpeg";
// import { Button } from "@mui/material";
// import { Link } from 'react-router-dom';

export default class Patient extends Component {
    render() {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-50 h-50 object-cover' src={image} alt="Remedy" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>PATIENT</h2>
                    <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/patient/login">SIGN IN</a></button>
                    <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/patient/signup">SIGN UP</a></button>
                </form>
            </div>
        </div>
            /*
            <form>
                <h3>Patient</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient/login">Log In</a></button>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient/signup">Sign Up</a></button>
            
            </form> */
        );
    }
}