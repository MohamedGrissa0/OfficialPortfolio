import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div id="abt" className="px-4 md:px-8 lg:px-10 py-10   max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Full-Stack MERN Developer <span className='text-5xl md:text-6xl lg:text-7xl'>👋🏼</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
                Hi, I'm Grissa Mohamed. A passionate Full-Stack MERN Developer based in Monastir, Tunisia. 📍
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://github.com/MohamedGrissa0"  target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                    <FontAwesomeIcon icon={faGithub} size="2x" beat />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-grissa" target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" beat />
                </a>
            </div>
        </div>
    );
}
