import React, { useState } from "react";
import "../../App.css";
import image from "../../img/medanim.gif";

const HomePage = ({ }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-50 h-50 object-cover' src={image} alt="Remedy" />
            </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>HOME</h2>
                <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/provider">Provider</a></button>
                <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/patient">Patient</a></button>
            </form>
        </div>
    </div>
        <div className="container-side-by-side">
            <div className="left-image">
            </div>
            <div className="right-form"></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>HOME</h2>
                <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/provider">Provider</a></button>
                <button type="submit" className="border shadow-lg hover:shadow-xl px-15 py-2 relative flex items-center"><a href="/patient">Patient</a></button>
            </form>
        </div>
    </div>
         {/* <form> <h3>Home Page</h3>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider">Provider</a></button>
            <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/patient">Patient</a></button>
             <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'onClick={doSignIn}>Sign In</button>
        </form>*/}
            
        </div>
    );
};

export default HomePage;