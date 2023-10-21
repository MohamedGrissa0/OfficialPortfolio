import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <div id='contact' className='mx-auto container px-8 md:px-8 lg:px-16 py-8 lg:py-10'>
        <h1 className='text-blue-500 text-2xl lg:text-2xl font-bold mb-4'>CONTACT</h1>
        <p className='text-xl lg:text-2xl font-bold'>Don't be shy! Hit me up! 👇</p>
        <div className='flex flex-col lg:flex-row my-4 items-center   '>
            <div className='flex flex-col md:flex-row my-4 items-center justify-center'>
             <div className='rounded-full bg-white p-4 my-4 mx-4 lg:ml-2 box  font-bold'>
             <FontAwesomeIcon icon={faMapLocationDot} size='2x' style={{color: "#0433ff",}} className=""  />

             </div>
             <div className='flex font-bold flex-row lg:flex-col'>
           
             <div>
              Monastir,Tunisia 📍 
             </div></div>
            </div>
            <div className='flex  mx-4 flex-col md:flex-row my-4 items-center justify-center'>
             <div className='rounded-full bg-white p-4  my-4 box mx-4 font-bold'>
             <FontAwesomeIcon icon={faEnvelope} size='2x' style={{color: "#0433ff",}} className=""  />

             </div>
             <div className='flex font-bold flex-row lg:flex-col'>
            
             <div>
                Mouhamedgrissa0@gmail.com  
             </div></div>
            </div>

        </div>
    </div>
  )
}
