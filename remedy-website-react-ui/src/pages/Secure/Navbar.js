import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'
import {CiLogin} from 'react-icons/ci'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='firstDiv'>
    {/* <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'> */}
      {/* Left side */}
      <div className='secondDiv'>
      {/* <div className='flex items-center'> */}
        <div onClick={()=> setNav(!nav)} className='cursor'>
           <AiOutlineMenu size={30} />
         </div>
         <h1 className = "classH1">
           The <span className='span1'>Remedy</span>  
         </h1>
        {/* <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          The <span className='font-bold'>Remedy</span>
  </h1>  */}
        </div>

      {/* Search Input */}
      <div className='searchFirstDiv'>
      {/* <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'> */}
        {/*className='bg-transparent p-2 w-full focus:outline-none'*/}
            
        <AiOutlineSearch size={25} />
        <input
            className = "inputDiv"
            type='text'
            placeholder='Search'
          />
       </div>


      {/* Mobile Menu */}
      {/* Overlay */}
      {/* // {nav ? <div className= "navDiv"></div> : ''} */}
      {/* {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''} */}
      

      {/* Side drawer menu */}
       {/*<div className = { nav 
      //                       ?"yesNav"
      //                       :"noNav"
      //                   }>  */}
      {/* <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }> */}
        {/*<AiOutlineClose
             onClick={()=> setNav(!nav)}
           size={30}
           className = "aiOutlineClose"
           className='absolute right-4 top-4 cursor-pointer'
         /> */}
        {/* <h2 className='h2class'> */}
        {/* <h2 className='text-2xl p-4'> */}
          {/* The <span className="span2">Remedy</span> */}
          {/* The <span className='font-bold'>Remedy</span> */}
        {/* </h2> */}
        {/*<nav> 
            {/* <ul className='flex flex-col p-4 text-gray-800'>
             */}
             {/* <ul className="classUl"> */}
                {/* <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li> */}
                
                {/* <li className = "classli"><MdHelp size={25} className="clsmargin" /> Help</li>
                <li className="classli" ><AiFillTag size={25} className="clsmargin"/> Promotions</li>
                <li className="classli"><FaUserFriends size={25} className= "clsmargin" /> Invite Friends</li>
                <li className= "classli"><CiLogin size={25} className="clsmargin" /> Log Out</li>
            </ul> */}
        {/* </nav> */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;