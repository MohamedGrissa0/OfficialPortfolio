import React, { useEffect } from 'react';
import im1g from "../../assets/about-a.62b47e7f183d4b4e9feb.webp";
import img from "../../assets/vecteezy_software-engineer-png-graphic-clipart-design_20962986_172-removebg-preview.png";

import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS

export default function AboutMe() {
    const resumeUrl = require("../../assets/resume.pdf"); // Replace with your actual file path

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <div id="abt" className='text-black banner grand'>
            <div className="grid grid-cols-1 abt lg:grid-cols-2 gap-8 mx-auto container px-8 md:px-8 lg:px-16 py-16 lg:py-20">
                <div data-aos="fade-left" className="relative">
                    <img src={img} alt="Profile" className='rounded-2xl object-cover w-full lg:h-full' />
                </div>
                <div data-aos="fade-right" className="flex flex-col text-center lg:text-left justify-center">
                    <h1 className='text-blue-500 text-xl text-2xl font-bold my-4'>ABOUT ME</h1>
                    <p className='text-2xl md:text-3xl lg:text-3xl my-4'>A dedicated MERN-Stack Developer based in Monastir, Tunisia 📍</p>
                    <p className='text-base md:text-lg lg:text-lg my-4 text-gray-500'>
                        {/* Your introduction text */}
                    </p>
                    <a href={resumeUrl} download>
                        <button className="bg-blue-500 text-white p-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
