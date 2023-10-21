import React ,{useEffect} from 'react';
import img from "../../assets/about-a.62b47e7f183d4b4e9feb.webp";
import todo from "../../assets/todo.png";
import kepper from "../../assets/kepper.png";
import reviewhub from "../../assets/reviewhub.png";
import Project from '../Project/Project';
import 'animate.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS

export default function Portfolio() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const projects = [
        {
            name: "Reviewhub",
            description: "Help ppl in the making-decision process of their next destination",
            names: ["Html", 'Css', 'Tailwind', 'Reactjs', 'Nodejs', "Mongo","Npm"],
            img: reviewhub,
            link: '',
            github :'https://github.com/MohamedGrissa0/REVIEWHUB'
        },
        {
            name: "ToDoList",
            description: "A task management application...",
            names: ["Html", 'Css', 'Tailwind', 'Reactjs'],
            img: todo,
            link: "https://todowebsite0.netlify.app",
            github:'https://github.com/MohamedGrissa0/toDo'
        },
        {
            name: "Keeper App",
            description: "A note-taking app...",
            names: ["Html", 'Css', 'Tailwind', 'Reactjs'],
            img: kepper,
            link: "https://noteskeeper0.netlify.app",
            github:"https://github.com/MohamedGrissa0/KeepApp"
        }
    ];

    return (
        <div id="portfolio" className='text-black mainn grand mt-2'>
            <div className="text-center lg:text-left mx-auto container px-8 md:px-8 lg:px-16 py-16 lg:py-20">
                <h1 className='text-blue-500 font-bold text-2xl mb-2'>Portfolio</h1>
                <p className='my-4 text-xl md:text-3xl font-bold'>Each project is a unique piece of development <span className='mx-2'>🧩</span></p>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        img={project.img}
                        names={project.names}
                        github={project.github}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                    />
                ))}
            </div>
        </div>
    );
}
