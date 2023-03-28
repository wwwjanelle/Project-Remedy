import React from 'react';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* New Surveys Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Surveys</p>
          <p className='px-2'>Sent from your provider</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Open</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://unsplash.com/photos/nCk22aqZjlM'
          alt='/'
        />
      </div>

      {/* Past Surveys Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='fsont-bold text-2xl px-2 pt-4'>Past Surveys</p>
          <p className='px-2'>All of your submitted surveys</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Edit Survey(s)</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://unsplash.com/photos/744oGeqpxPQ'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Cards;