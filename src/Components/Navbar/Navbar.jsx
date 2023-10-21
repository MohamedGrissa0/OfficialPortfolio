import React , {useState} from 'react'
import "./Navbar.css"
export default function Navbar() {
    const [close,isclose]=useState(false)
    return (
         <div className='navbar fixed top-0 w-full z-50 '>
            {!close ?<div className='flex main  text-bold justify-between items-center p-[20px] md:p-[35px]   bg-white overflow-hidden'>
            <div><h1 className='text-xl md:text-2xl '>Grissa.dev</h1></div>
            <div className='hidden md:block'>
                <ul className='flex justify-between items-center text-lg'>
                    <a className='mx-2 hover:text-blue-500' href='#home'><li>Home</li></a>
                    <a className='mx-2 hover:text-blue-500' href='#abt'><li>About</li></a>
                    <a className='mx-2 hover:text-blue-500' href='#portfolio'><li>Projects</li></a>
                    <a className='mx-2 hover:text-blue-500 ' href='#contact'><li>Contact</li></a>
                </ul>
            </div>
            <div className='block md:hidden'>
                <span class="material-symbols-outlined text-2xl hover:text-blue-500  cursor-pointer" onClick={()=>{isclose(true)}}>
                    menu
                </span>
                

            </div>

        </div> :  ""}
        {close && <div className='w-screen flex items-center justify-center h-screen bg-white'>
            <div onClick={()=>{isclose(false)}} className='absolute hover:text-blue-500 p-[35px] cursor-pointer  right-0 top-0'><span class=" text-3xl material-symbols-outlined">
close
</span></div>
                  <div>
                  <ul className='  text-black flex justify-between flex-col items-center text-3xl'>
                    <a className='my-4 hover:text-blue-500' onClick={()=>{isclose(false)}} href='#home'><li>Home</li></a>
                    <a className='my-4 hover:text-blue-500' onClick={()=>{isclose(false)}} href='#abt'><li>About</li></a>
                    <a className='my-4 hover:text-blue-500' onClick={()=>{isclose(false)}} href='#portfolio'><li>Projects</li></a>
                    <a className='my-4 hover:text-blue-500' onClick={()=>{isclose(false)}} href='#contact'><li>Contact</li></a>
                </ul>
                  </div>

                    </div>}

        </div>
        

    )
}
