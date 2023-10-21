import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className='bg-gray-700 '>
    <div className='p-8 mx-auto container flex justify-between items-center px-8 md:px-8 lg:px-16 py-12 lg:py-12'>
        <p className='text-white'>Copyright © 2023. All rights are reserved</p>
        <div className="flex justify-center lg:justify-start space-x-4">
        <a href="https://github.com/MohamedGrissa0" style={{color: "#ffffff",}} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-grissa" style={{color: "#ffffff",}} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div></div>
  )
}
