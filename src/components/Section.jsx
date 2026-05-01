import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter,faFacebook } from "@fortawesome/free-brands-svg-icons";
import  logo from '../assets/images/shimul.jpg';


const Section = () => {
  return (
    <div className="flex flex-colg md:flex-row gap-8 w-11/12 mx-auto items-center mt-12  bg-cover bg-center bg-[#F8F3F7] p-8 rounded-lg shadow-lg" >

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2">

        {/* Heading */}
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Hi,
        </h1>

        {/* Typed Text */}
        <ReactTyped
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold "
          strings={["I'm Shimul.", "I'm a Frontend Developer."]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />

        {/* Description */}
        <p className="mt-4  text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          I am a Full Stack Developer specializing in the MERN stack. I build
          modern, scalable, and user-friendly web applications using React,
          Node.js, Express, and MongoDB. I enjoy solving real-world problems
          and continuously learning new technologies to improve my skills.
          My goal is to become a professional software developer and work on
          impactful projects that make a difference.
        </p>

        {/* Buttons (optional but recommended) */}
        <div className="mt-6 flex gap-4">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-800 transition-colors cursor-pointer" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-700  transition-colors cursor-pointer mx-4" />
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400  transition-colors cursor-pointer mx-4" />
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 transition-colors cursor-pointer" />
        </div>
        <div className="mt-6 flex gap-4">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Hire Me
          </button>

          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            View Projects
          </button>
        </div>

      </div>
      <div className="w-full flex justify-center md:w-1/2">
        <img src={logo}  alt="Shimul" className="w-2/3 border-2 border-blue-600 shadow-2xl shadow-blue-900 outline-2 outline-blue-800 rounded-tl-4xl rounded-br-4xl object-cover" />
      </div>


    </div>
  );
};

export default Section;