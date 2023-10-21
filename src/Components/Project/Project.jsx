import React from 'react';
import { faGithub, faLink, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink as faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';


export default function Project(props) {
  return (
    <div className={`grid grid-cols-1 gap-6 my-12 lg:grid-cols-5 rounded-3xl bg-white p-4 shadow-md animate__animated ${props.animation}`} data-aos={props.animation}>
      <div className='lg:col-span-3'>
        <img src={props.img} alt="Project Screenshot" className='rounded-xl w-full h-full object-cover' />
      </div>
      <div className='lg:col-span-2 text-center p-4 lg:p-8 flex flex-col justify-between'>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold mb-2">{props.name}</h2>
          <p className="text-gray-700 my-4 lg:text-lg">{props.description}</p>
          <div className='flex flex-wrap justify-center items-center my-4'>
            {props.names.map((name, index) => (
              <p key={index} className='border font-semibold p-2 m-1'>{name}</p>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <a href={props.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue mx-4 cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faGithub} size="lg" /> <span className='ml-2'>Code</span>
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue mx-4 flex items-center">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" /> <span className='ml-2'>Live Demo{props.link?"":" (Soon)"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
