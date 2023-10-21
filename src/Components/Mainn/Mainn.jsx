import React from 'react';
import './Mainn.css';

import Pic from '../Pic/Pic';
import About from '../About/About';
import Tech from '../Tech/Tech';

export default function Mainn() {
  return (
<div id="home" className='mainn h-max lg:h-screen  mt-[78px]'>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:mx-auto text-center md:text-center lg:text-left md:container md:px-4 lg:px-16 md:py-16  lg:py-[177px]">
        <Pic />
        <About />
      </div>
      <Tech />
    </div>
  );
}
