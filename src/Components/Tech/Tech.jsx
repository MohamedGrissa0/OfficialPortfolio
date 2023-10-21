import React from 'react'
import img from '../../assets/347268018_627107889329926_747911621725486710_n-2-removebg-preview-2.png';
import css from '../../assets/png-transparent-logo-css-css3-thumbnail-removebg-preview.png'
import html from '../../assets/png-transparent-logo-html-html5-thumbnail-removebg-preview-removebg-preview.png'
import mongo from '../../assets/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail-removebg-preview.png'
import tailwind from '../../assets/n3pu9p0jifwy2drpkkojlvt4wd85-removebg-preview.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'

export default function Tech() {
  return (
    <div className='flex justify-center items-center flex-col w-screen md:-mt-10 '>
                <h1 className='flex justify-center font-bold items lg:hidden pt-[20px]'>Tech Stack | </h1> 

    <div className='grid grid-cols-3 gap-6 md:flex flex-row justify-center  flex-wrap items-center   py-10 '>
    <h1 className='hidden lg:block font -bold  '>Tech Stack | </h1> 
    <div className='bg-white box h-[45px] w-[45px] flex justify-center items-center  rounded-xl '>
    <img src={html} alt="react" className='h-[40px]   w-[40px] object-cover  ' />

    </div>
    <div className='bg-white h-[45px] w-[45px] flex justify-center items-center rounded-xl '>

    <img src={css} alt="react" className='h-[40px]  w-[40px] object-cover' />
    </div>
    <div className='bg-white h-[45px] w-[45px] flex justify-center items-center rounded-xl '>

    <img src={tailwind} alt="react" className='h-[40px] w-[40px] object-cover' />
    </div>
    <div className='bg-white h-[45px] w-[45px] flex justify-center items-center rounded-xl '>

    <img src={react} alt="react" className='h-[40px] w-[40px] object-cover' />
    </div>
    <div className='bg-white h-[45px] w-[45px] flex justify-center items-center rounded-xl '>

    <img src={node} alt="react" className='h-[40px]  w-[40px] object-cover' />
    
    </div>
    <div className='bg-white h-[45px] w-[45px] flex justify-center items-center rounded-xl '>

    <img src={mongo} alt="react" className='h-[40px]  w-[40px] object-cover' />
</div>
</div>

  </div>  )
}
