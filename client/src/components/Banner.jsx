import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from '../../public/images/bg.webp';
import {
  faArrowRight,
  faDownload,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Banner = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "Problem Solver",
        "MERN Enthusiast",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      cursorChar: "|",
      smartBackspace: true,
      shuffle: false,
      fadeOut: false,
      fadeOutDelay: 100,
      loopCount: Infinity,
      showCursor: true,
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/Shimul-DIU", label: "GitHub" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/md-shimul-71a4b3319/", label: "LinkedIn" },
    { icon: faFacebook, url: "https://www.facebook.com/shimul.mia.79462/", label: "Facebook" },
    { icon: faCode, url: "https://leetcode.com/u/MdShimul/", label: "LeetCode" }
  ];

  return (
    <>
      <section className="relative min-h-[calc(100vh-64px)] bg-[#140D0A] overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#140D0A]/80"></div>
        </div>

        <div className="relative flex-grow grid lg:grid-cols-2 items-center z-20">
          {/* Left Column - Text Content */}
          <div className="relative lg:-mt-1 px-6 sm:px-10 lg:pl-16 xl:pl-28 order-2 lg:order-1 text-center lg:text-left py-8 lg:py-0">
            <span className="inline-block text-[#C9A876] tracking-[5px] uppercase text-xs font-medium mb-3 font-['Inter'] animate-fade-in">
              | Shimul Mia |
            </span>

            <h1 className="font-['Playfair_Display'] text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] text-white animate-fade-in-up">
              Full Stack
              <span className="block">
                Web <span className="text-cyan-500 italic">Developer</span>
              </span>
            </h1>

            <h2 className="font-['Inter'] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-white mt-3 animate-fade-in-up animation-delay-200">
              I'm a{" "}
              <span
                ref={typedElement}
                className="text-cyan-500 italic font-semibold"
              />
            </h2>

            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-white/80 font-['Inter'] leading-relaxed animate-fade-in-up animation-delay-400">
              Building fast, clean full stack applications with React, Node.js
              and MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Link
                to="/projects"
                className="group flex items-center gap-2 rounded-full bg-[#C9A876] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#140D0A] transition-all duration-300 hover:bg-[#E8D9BE] hover:scale-105 hover:shadow-2xl shadow-lg font-['Inter']"
              >
                View Gallery
                <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="/files/Cv_of_Md.Shimul.pdf"
                download="Cv_of_Md.Shimul.pdf"
                className="flex items-center gap-2 rounded-full border border-[#C9A876]/40 px-6 sm:px-8 py-3 sm:py-3.5 text-sm text-[#F5EFE6] transition-all duration-300 hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 font-['Inter']"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                Download CV
              </a>
            </div>

            {/* Social Icons - Below the buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-6 sm:mt-8 animate-fade-in-up animation-delay-800">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full flex justify-center items-center  border border-[#C9A876]/30  transition-all duration-300 bg-[#dac098] hover:bg-[#C9A876] text-black hover:text-[#140D0A] hover:border-transparent hover:scale-110 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  title={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xs sm:text-sm lg:text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2 h-[42vh] sm:h-[48vh] lg:h-[calc(100vh-64px)] flex items-end lg:items-center justify-center overflow-hidden">
            <div className="relative h-full lg:h-[80vh] w-auto flex items-end lg:items-center">
              <img
                src="https://res.cloudinary.com/t5icq7cq/image/upload/v1784465212/Shimul_envfhk.png"
                alt="Md Shimul"
                className="h-full brightness-50 w-auto max-w-none sm:max-w-full object-contain object-bottom relative z-10"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>

            {/* LeetCode Stats Box - Below the image */}
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 z-30 w-[90%] sm:w-[80%] lg:w-[70%]">
              <a
                href="https://leetcode.com/u/MdShimul/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2A1D16]/90 backdrop-blur-sm border border-[#C9A876]/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 lg:py-5 transition-all duration-300 hover:border-[#C9A876] hover:bg-[#2A1D16] hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#C9A876]/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCode} className="text-[#C9A876] text-sm sm:text-base lg:text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-white font-['Inter'] uppercase tracking-wider">LeetCode</p>
                      <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#C9A876] font-['Inter']">230+ Problems</p>
                    </div>
                  </div>
                  <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#C9A876]/20"></div>
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs lg:text-sm text-white font-['Inter'] uppercase tracking-wider">Solved</p>
                    <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#C9A876] font-['Inter']">230+</p>
                  </div>
                  <div className="w-px h-8 sm:h-10 lg:h-12 bg-[#C9A876]/20"></div>
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs lg:text-sm text-white font-['Inter'] uppercase tracking-wider">Ranking</p>
                    <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#C9A876] font-['Inter']">697,021</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Stats - Right side top */}
            <div className="absolute right-4 sm:right-6 lg:right-10 top-8 sm:top-12 lg:top-16 z-30 text-right">
              <div className="mb-3 sm:mb-4">
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-['Inter']">2+</p>
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] text-white font-['Inter'] uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white  font-['Inter']">10+</p>
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] text-white font-['Inter'] uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </>
  );
};

export default Banner;