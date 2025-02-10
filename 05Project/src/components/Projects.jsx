import Cats from '../assets/Cats.png'
import Search from '../assets/Search.png'
import Calculator from '../assets/Calculator.png'
import Education from '../assets/Education.png'
import Architecture from '../assets/Architecture.png'
import Ball from '../assets/8ball.png'

const Projects = () => {
  const dummyProjects = [
    { id: 1, title: 'CATS-FACT-', image: Cats, link:'https://cat-facts-ten.vercel.app/', description: 'Cats, our enigmatic and beloved four-legged friends, have woven themselves into the fabric of human history with their captivating charm. Here are some intriguing facts about these fascinating felines:' },
    { id: 2, title: 'ARCHITECTURE', image:Architecture , link:'https://architecture-orpin-five.vercel.app/#project-wrapper', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { id: 3, title: 'CALCULATOR', image: Calculator, link:'https://calculator-seven-pearl.vercel.app/', description: 'Excepteur sint occaecat cupidatat non proident.' },
    { id: 4, title: 'EDUCATION', image: Education, link:'https://educational-website-mu.vercel.app/', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, title: 'SEARCH-LIST', image: Search, link:'https://search-list-psi.vercel.app/', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { id: 5, title: '8BALLPOOL', image: Ball, link:'https://search-list-psi.vercel.app/', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 ">Projects</h2>
      <ul className=" grid grid-cols-1 gap-5  place-items-center md:grid-cols-2 items-center justify-center">
        {dummyProjects.map((project) => (
          <li key={project.id} className=" border-2  flex flex-col items-center justify-center p-5 shadow-lg gap-4">
            <img className='w-[95%] md:w-[75%] md:h-[75%] mx-auto rounded-lg   ' src={project.image} alt="" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <a className=' border-black hover:bg-gradient-to-tr bg-purple-400 from from-white font-bold rounded p-2' href={project.link} target="_blank" rel="noopener noreferrer">Source Code</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
