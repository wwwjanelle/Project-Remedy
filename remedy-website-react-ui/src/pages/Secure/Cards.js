import React from 'react';
import fillForm from "./img/flowers.jpeg" 
import editForm from "./img/bridge.jpeg"
import { useNavigate, redirect } from 'react-router-dom'; 
import "./cards.css"

const Cards = () => {
  
  // const navigate = useNavigate();
  let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScJcwsCQhapigHN2mVLWjdcOTlDYbSYtqN8tzqal49Xa9SkZw/viewform"
  return (
    <div className='cards1'>
    {/* <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'> */}
      {/* New Surveys Card */}
      <div className='surv1'>
      {/* <div className='rounded-xl relative'> */}
        {/* Overlay */}
        <div className='surv2'>
        {/* <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> */}

          <p className="newSurveyCard">New Surveys</p>
          {/* <p className='font-bold text-2xl px-2 pt-4'>New Surveys</p> */}
          {/* <p className='px-2'>Sent from your provider</p> */}
          <p className = "sentfromProvider">Sent from your provider</p>
          <button onClick = {
            () =>  
            {window.open(formUrl, '_blank');}
          }
          className="surv3">Open Form</button>
          {/* className='border-white bg-white text-black mx-2 absolute bottom-4'>Open Form</button> */}
        </div>
        <img
        className = "fillFormImg"
        // className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src= {fillForm}
          alt='/'
        />
      </div>

      {/* Past Surveys Card */}
      <div className='surv1'>
      {/* <div className='rounded-xl relative'> */}
        {/* Overlay */}
        <div className='surv2'>
        {/* <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> */}
          <p className="newSurveyCard">Past Surveys</p>
          {/* <p className='fsont-bold text-2xl px-2 pt-4'>Past Surveys</p> */}
          <p className = "sentfromProvider">All of your submitted surveys</p>
          {/* <p className='px-2'>All of your submitted surveys</p> */}
          <button className = "surv3">Edit Surveys</button>
          {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Edit Survey(s)</button> */}
        </div>
        <img
        className = "fillFormImg"
        // className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src= {editForm}
          alt='/'
        />
      </div>
    </div>
  );
};

export default Cards;