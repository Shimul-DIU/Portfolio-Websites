import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from '../../public/images/bg.webp';
import {
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Banner = () => {
  // Ref for the typed element
  const typedElement = useRef(null);

  useEffect(() => {
    // Check if element exists before initializing
    if (!typedElement.current) return;

    // Initialize Typed.js with more options
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

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  // Social links data
  const socialLinks = [
    { icon: faGithub, url: "https://github.com/yourusername" },
    { icon: faLinkedin, url: "https://linkedin.com/in/yourusername" },
    { icon: faFacebook, url: "https://facebook.com/yourusername" }
  ];

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative min-h-[calc(100vh-64px)] bg-[#140D0A] overflow-hidden flex flex-col">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140D0A]/80 via-[#140D0A]/70 to-[#140D0A]" />
        </div>

        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A876]/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#A85C32]/10 blur-[120px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative flex-grow grid lg:grid-cols-2 items-center z-10">
          {/* Left Column - Text Content */}
          <div className="relative px-6 sm:px-10 lg:pl-20 xl:pl-28 order-2 lg:order-1 text-center lg:text-left py-12 lg:py-0">
            <span className="inline-block text-[#C9A876] tracking-[5px] uppercase text-xs font-medium mb-3 font-['Inter'] animate-fade-in">
              | Shimul Mia |
            </span>

            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.1] text-[#F5EFE6] animate-fade-in-up">
              Full Stack
              <span className="block">
                Web <span className="text-[#C9A876] italic">Developer</span>
              </span>
            </h1>

            <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-[#F5EFE6]/80 mt-3 animate-fade-in-up animation-delay-200">
              I'm a{" "}
              <span
                ref={typedElement}
                className="text-[#C9A876] font-semibold"
              />
            </h2>

            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-[#F5EFE6]/60 font-['Inter'] leading-relaxed animate-fade-in-up animation-delay-400">
              Building fast, clean full stack applications with React, Node.js
              and MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mt-7 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Link
                to="/projects"
                className="group flex items-center gap-2 rounded-full bg-[#C9A876] px-8 py-3.5 text-sm font-semibold text-[#140D0A] transition-all duration-300 hover:bg-[#E8D9BE] hover:scale-105 hover:shadow-2xl shadow-lg font-['Inter']"
              >
                View Gallery
                <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="/files/Cv_of_Md.Shimul.pdf"
                download="Cv_of_Md.Shimul.pdf"
                className="flex items-center gap-2 rounded-full border border-[#C9A876]/40 px-8 py-3.5 text-sm text-[#F5EFE6] transition-all duration-300 hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 font-['Inter']"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/t5icq7cq/image/upload/v1784465212/Shimul_envfhk.png"
              alt="Md Shimul"
              className="w-full h-full object-contain object-center relative z-10"
            />
            {/* Gradient overlay for better blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140D0A] via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140D0A] to-transparent lg:hidden" />

            {/* Stats - Right side of image (visible on large screens) */}
            <div className="hidden lg:flex flex-col gap-8 absolute right-8 top-1/4 z-20">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-[#C9A876] font-['Inter'] group-hover:text-[#E8D9BE] transition-colors">4+</p>
                <p className="text-[11px] text-[#F5EFE6]/60 font-['Inter'] uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-[#C9A876] font-['Inter'] group-hover:text-[#E8D9BE] transition-colors">10+</p>
                <p className="text-[11px] text-[#F5EFE6]/60 font-['Inter'] uppercase tracking-wider mt-1">Projects Completed</p>
              </div>
            </div>

            {/* Social Icons - Bottom right of image */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center bg-[#2A1D16]/80 backdrop-blur-sm border border-[#C9A876]/30 text-[#F5EFE6]/70 transition-all duration-300 hover:bg-[#C9A876] hover:text-[#140D0A] hover:border-transparent hover:scale-110 hover:shadow-lg"
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm lg:text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700&display=swap');

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </>
  );
};

export default Banner;