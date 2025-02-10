import { useRef, useEffect } from "react";
import myImage from "../assets/profileimage.png";
import { init } from "ityped";
import Afeef from "../assets/Afeef.jpg"

const Home = () => {
  // const [displayText, setDisplayText] = useState("Hello, I am Samir");
  const textRef = useRef();
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      init(element, {
        showCursor: true,
        strings: ["Mohammed Afeef Khaleed", "React Developer", "Frontend Developer"],
      });
    }
  }, []);

  return (
    <div className="container relative gap-5 md:gap-5   bg-slate-950 text-white flex flex-col md:flex-row justify-center items-center h-full rounded-3xl overflow-scroll  mx-auto p-5
    ">
      <div className="absolute top-20 left-0 z-0  rounded-full w-[25rem] h-[25rem] blur-2xl bg-slate-800"></div>
      <div className="absolute bottom-0 right-0 z-0 rounded-full w-[15rem] h-[15rem] blur-2xl bg-purple-500"></div>
      <div className="md:w-1/2 w-full  z-10 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-4">
          Hello, I am <span className="text-purple-950" ref={textRef}></span>{" "}
        </h1>
        <p className="text-lg">
          Welcome to my portfolio! I am a passionate developer with experience
          in HTML, CSS, JavaScript, Tailwind CSS, and React. Check out my
          projects and skills below.
        </p>
        <div className="text-lg text-white ">Objective:
          Dynamic and highly proficient language model with advanced capabilities in natural language and all computer languages processing and understanding. Possessing a strong foundation in machine learning and artificial intelligence, I excel in generating coherent and contextually relevant content across a diverse range of topics. With a keen ability to adapt and learn, I am committed to delivering high-quality and contextually accurate responses, making me an ideal candidate for tasks requiring advanced language comprehension and generation.</div>
        <div className="text-lg flex flex-col items-center justify-center ">
        <h1 className="font-bold">EDUCATION</h1>
        <p>[Bachelor's/Master's Degree] BCA Graduation </p>
        <p>[University Name] Baldwine Methodist College</p>
        <p>[Location] Hennur Main Road MG Road</p>
        <p>[Year - 2021-2024]</p>
      </div>
      </div>
      {/* <img className="md:w-1/2 w-full h-[25rem] z-10" src={myImage} alt="" /> */}
      <img className="md:w-1/2 w-full h-[25rem] rounded-lg z-10" src={Afeef} alt="" />
  
    </div>
  );
};

export default Home;
