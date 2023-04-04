import React from 'react'
import styles from "./header.css"
import providerHeaderImg from "./img/mountains1.jpeg"

const ProviderHeader = () => {
  return ( 
    <div className = "div-1">
    {/* <div className='max-w-[1640px] mx-auto p-4'> */}
        <div className = "div-2">
        {/* <div className='max-h-[500px] relative'> */}
            {/* Overlay */}
            <div className = "div-3">
            {/* <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'> */}
                <h1 className = "h1class">Remedy:</h1>
                <h1 className = "h1class">For <span className = "span1">Racial Equality </span>in HealthCare</h1>
                {/* <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1> */}
                {/* <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Devlivered</h1> */}
            </div>
            <img className = "imgClass" src= {providerHeaderImg} alt="/" />
            {/* <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" /> */}
        </div>
    </div>
  )
}

export default ProviderHeader