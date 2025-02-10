import Html from '../assets/Html.png'
import Css from '../assets/Css.png'
import js from '../assets/js.png'
import java from '../assets/Java.png'
import python from '../assets/Python.png'
import Tailwind from '../assets/Tailwind.png'
import sql from '../assets/Sql.png'
import React from '../assets/React.png'

const Skills = () => {
  const skills = [
    { id: 1, image: Html, Title: 'HTML', persentage:'99%', Description: 'HTML documents are the backbone of web pages, providing the structure and semantics for browsers to render content. Developers use HTML to create the foundation of a webpage, organizing and presenting information for users.', },
    { id: 2, image: Css, Title: 'CSS', persentage:'99%', Description: 'Is a stylesheet language used to control the presentation and layout of HTML documents. It enables the styling of elements, such as fonts, colors, and spacing, to enhance the visual appeal and user experience of a website. CSS rules are applied hierarchically, allowing for consistent design across multiple pages within a site.', },
    { id: 3, image: js, Title: 'JAVA SCRIPT', persentage:'99%', Description: 'It enables dynamic content, interactivity, and enhances user experience in browsers. JS can manipulate HTML, CSS, and interact with servers, making it a fundamental part of modern web applications. ', },
    { id: 4, image: React, Title: 'REACT JS', persentage:'99%', Description: 'React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components, efficiently update and render data-driven views, and manage the application state effectively. ', },
    { id: 5, image: Tailwind, Title: 'TAILWIND', persentage:'99%', Description: 'React Tailwind is a powerful combination of React, a JavaScript library for building user interfaces, and Tailwind CSS, a utility-first CSS framework. It streamlines UI development by allowing developers to use pre-designed styles and utility classes directly in their React components. ', },
    { id: 6, image: python, Title: 'PYTHON', persentage:'99%', Description: 'interpreted programming language known for its simplicity and readability. It supports multiple paradigms, including procedural, object-oriented, and functional programming. Python  extensive standard library and community support make it versatile for various applications', },
    { id: 7, image: java, Title: 'JAVA', persentage:'99%', Description: 'object-oriented programming language known for its platform independence. It is designed to be versatile, secure, and easy to use, making it a popular choice for developing a wide range of applications, from web and mobile to enterprise software. Java applications run on a virtual machine (JVM), allowing them to execute on different platforms without modification. Its syntax is similar to C++, fostering a familiar environment for developer', },
    { id: 8, image: sql, Title: 'DBMS', persentage:'99%', Description: ' domain-specific language used for managing and manipulating relational databases. It enables users to interact with databases by defining and querying data, as well as performing operations such as insertion, updating, and deletion of records. ' },


  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl flex items-center justify-center font-bold mb-4">SKILLS</h2>
      <ul className="grid grid-cols-1 gap-5  place-items-center md:grid-cols-3   flex-wrap">
        {skills.map((skill) => (

          <div className=' flex flex-col items-center justify-center text-center font-medium relative'>
            <img className='w-[95%] md:w-80 md:h-80 mx-auto rounded-lg  ' src={skill.image} alt="" />
            <div className='md:flex md:items-center md:justify-center font-bold md:h-28 md:w-28 md:rounded-full md:border-4 md:bg-gradient-to-tr md:bg-purple-600 from from-white md:border-gray-950 md:absolute top-1/2 left-2/3'>{skill.persentage}</div>

            <h1 className=' font-extrabold'>{skill.Title}</h1>
            <p>{skill.Description}</p>
          </div>

        ))}
      </ul>
    </div>
  );
};

export default Skills;
