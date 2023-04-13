import React from 'react';
import fillForm from "./img/fillForm.jpg" 
import editForm from "./img/edit.jpeg"
import SheetData from './SendSurvey';
import { useNavigate, redirect } from 'react-router-dom';

const ProviderCards = () => {
  
  const navigate = useNavigate();
  let googleSheetUrl = "https://docs.google.com/spreadsheets/d/1L7B30L4g8gcqDtuQU0qiNC5GJhRGoKWEEzV1jyKmFRc/edit?usp=sharing" 
  
  return (
    <div className='cards1'>
    {/* <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'> */}
      {/* View Results Card */}
      <div className='surv1'>
      {/* <div className='rounded-xl relative'> */}
        {/* Overlay */}
        <div className='surv2'>
        {/* <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> */}
          <p className = "newSurveyCard">View Results </p>
          {/* <p className='font-bold text-2xl px-2 pt-4'>View Result</p> */}
          {/* <p className='px-2'>From the surveys your patients have filled</p> */}
          <p className = "sentfromProvider">From the surveys your patients have filled</p>
          <button onClick = {
            () =>  
            {window.open(googleSheetUrl, '_blank');}
          }
          // className='border-white bg-white text-black mx-2 absolute bottom-4'>View Results</button>
          className = "surv3">View Results</button>
        </div>
        <img
        className = "fillFormImg"
        // className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src= {fillForm}
          alt='/'
        />
      </div>

      {/* Send Surveys Card */}
      <div className='surv1'>
      {/* <div className='rounded-xl relative'> */}
        {/* Overlay */}
        <div className='surv2'>
        {/* <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> */}
          <p className = "newSurveyCard">Send Surveys</p>
          {/* <p className='fsont-bold text-2xl px-2 pt-4'>Send Surveys</p> */}
          <p className = "sentfromProvider">To your patients</p>
          {/* <p className='px-2'>Send surveys to your patients</p> */}
          <button className = "surv3" onClick={ () => navigate('/provider/secure/sendsurvey')}>Send Surveys</button>
          {/* className='border-white bg-white text-black mx-2 absolute bottom-4'>Send Surveys(s)</button> */}
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

export default ProviderCards;