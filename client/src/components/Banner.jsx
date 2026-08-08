import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "../../public/images/bg.webp";
import {
  faDownload,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
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
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/md-shimul-71a4b3319/",
      label: "LinkedIn",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/shimul.mia.79462/",
      label: "Facebook",
    },
    {
      icon: faCode,
      url: "https://leetcode.com/u/MdShimul/",
      label: "LeetCode",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-[#140D0A] text-white min-h-[calc(100vh-64px)] flex flex-col justify-center py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full bg-[#1c1410] rounded-2xl overflow-hidden border border-[#C9A876]/20 shadow-2xl">

          <div className="relative">
            <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] w-full overflow-hidden">
              <img
                src={bgImage}
                alt="Cover Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:hidden absolute left-1/2 -translate-x-1/2 -bottom-14 z-30 w-28 h-28 rounded-full border-4 border-[#1c1410] overflow-hidden bg-[#2A1D16] shadow-2xl ring-1 ring-[#C9A876]/30">
              <img
                src="https://res.cloudinary.com/t5icq7cq/image/upload/v1784465212/Shimul_envfhk.png"
                alt="Md. Shimul Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 bg-[#1c1410]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-16 sm:pt-0 sm:-mt-16 lg:-mt-[72px] pb-4">

              <div className="flex flex-col items-center sm:flex-row sm:items-end gap-0 sm:gap-4 text-center sm:text-left z-20">
                <div className="hidden sm:block sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px] rounded-full border-4 border-[#1c1410] overflow-hidden bg-[#2A1D16] shadow-2xl shrink-0 ring-1 ring-[#C9A876]/30">
                  <img
                    src="https://res.cloudinary.com/t5icq7cq/image/upload/v1784465212/Shimul_envfhk.png"
                    alt="Md. Shimul Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="mt-2 sm:mt-0 sm:mb-2">
                  <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight">
                    Md. Shimul
                  </h1>
                  <h2 className="font-['Inter'] text-xs sm:text-sm font-medium text-white/70 mt-0.5">
                    I&apos;m a{" "}
                    <span
                      ref={typedElement}
                      className="text-[#C9A876] not-italic font-semibold"
                    />
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-2.5 z-20 w-full sm:w-auto">

                <div className="flex gap-2 sm:gap-3 bg-[#2A1D16] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-[#C9A876]/30 flex-shrink-0">
                  <div className="text-center">
                    <p className="text-xs sm:text-base font-bold text-[#C9A876] font-['Inter']">2+</p>
                    <p className="text-[7px] sm:text-[9px] text-white/80 font-['Inter'] uppercase tracking-wider">Years Exp.</p>
                  </div>
                  <div className="w-px h-5 sm:h-7 bg-[#C9A876]/30 my-auto"></div>
                  <div className="text-center">
                    <p className="text-xs sm:text-base font-bold text-[#C9A876] font-['Inter']">10+</p>
                    <p className="text-[7px] sm:text-[9px] text-white/80 font-['Inter'] uppercase tracking-wider">Projects</p>
                  </div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center gap-1.5 sm:gap-2 flex-shrink-0">
                  <a
                    href="/files/Cv_of_Md.Shimul.pdf"
                    download="Cv_of_Md.Shimul.pdf"
                    className="flex items-center justify-center gap-1 rounded-lg border border-[#C9A876]/40 bg-[#2A1D16] px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#F5EFE6] transition-all duration-300 hover:bg-[#3a291d] font-['Inter'] whitespace-nowrap"
                  >
                    <FontAwesomeIcon icon={faDownload} className="text-[10px] sm:text-xs" />
                    <span className="hidden xs:inline">Download CV</span>
                    <span className="xs:hidden">CV</span>
                  </a>

                  <div className="flex gap-1 sm:gap-1.5">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center border border-[#C9A876]/30 bg-[#2A1D16] hover:bg-[#C9A876] text-[#C9A876] hover:text-[#140D0A] transition-all duration-300 hover:scale-110 shadow-sm"
                        title={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-[10px] sm:text-xs" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
            <p className="hidden sm:block text-right mt-2 max-w-7xl text-start text-xs text-white/60 font-['Inter'] leading-relaxed">
              Building fast, clean full stack applications with React, Node.js
              and MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <p className="sm:hidden text-center text-xs text-white/60 font-['Inter'] leading-relaxed pb-4 -mt-2">
              Building fast, clean full stack applications with React, Node.js
              and MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <div className="border-t  border-[#C9A876]/15 pt-3 mt-3">
              <p className="text-sm md:text-md text-white/50 uppercase tracking-wider font-['Inter'] font-semibold mb-2.5">
                Achievements
              </p>
              <div className="flex pb-3 md:pb-4 max-w-40 justify-between items-center gap-2.5">
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/lg2550.png"
                    alt="50 days problem solve batch"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/lg25100.png"
                    alt="100 days problem solve batch"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/pull-shark.png"
                    alt="Pull shark badge"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        @media (min-width: 480px) {
          .xs\\:inline { display: inline; }
          .xs\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Banner;