import { useEffect, useRef, useState } from "react";
import shimul from "../../public/images/profileImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLocationDot,
  faBriefcase,
  faGraduationCap,
  faAward,
  faCode,
  faRocket,
  faCalendarAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen  overflow-hidden"
    >
      <div className="grid grid-cols-1   py-4 lg:grid-cols-2 gap-7 min-h-screen">
        {/* Left Column - Image */}
        <div
          className={`relative flex  items-center justify-center  transition-all duration-1000 ease-out ${isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
        >
          <div className="relative  ">
            {/* Clean image without any background color */}
            <img
              src={shimul}
              alt="Md. Shimul"
              className="rounded-r-2xl w-screen  object-cover "
              style={{ backgroundColor: 'transparent' }}
            />

          </div>
        </div>

        {/* Right Column - Content with dark background */}
        <div
          className={`bg-[#29231E] flex items-center p-8 lg:p-16 transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Title with gold accent */}
            <div className="mb-6">
              <span className="text-[#C9A876] tracking-[5px] uppercase text-xs font-medium font-['Inter']">
                About Me
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE6] mt-2 leading-tight">
                Md. Shimul
              </h2>
              <h3 className="text-xl md:text-2xl text-[#C9A876] font-['Inter'] mt-1">
                Full Stack Developer
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#F5EFE6]/70 leading-relaxed mb-8 font-['Inter'] text-sm md:text-base">
              Building fast, clean full stack applications with React, Node.js
              and MongoDB. Available for entry-level developer roles worldwide.
              Passionate about creating seamless digital experiences that solve
              real-world problems.
            </p>

            {/* Info Grid - Clean cards without background color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Full Name</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">Md. Shimul</p>
              </div>
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Email</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">md.shimuldiu@gmail.com</p>
              </div>
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Location</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">Dhaka, Bangladesh</p>
              </div>
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Experience</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">4+ Years</p>
              </div>
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Phone</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">+880 1234 567890</p>
              </div>
              <div className="border-b border-[#C9A876]/20 pb-3">
                <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">Availability</p>
                <p className="text-[#F5EFE6] font-['Inter'] font-medium">Open to Work</p>
              </div>
            </div>

            {/* Stats - Clean without background */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#C9A876] font-['Inter']">10+</p>
                <p className="text-xs text-[#F5EFE6]/50 font-['Inter'] uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#C9A876] font-['Inter']">4+</p>
                <p className="text-xs text-[#F5EFE6]/50 font-['Inter'] uppercase tracking-wider">Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#C9A876] font-['Inter']">20+</p>
                <p className="text-xs text-[#F5EFE6]/50 font-['Inter'] uppercase tracking-wider">Technologies</p>
              </div>
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A876] px-8 py-3 text-sm font-semibold text-[#140D0A] transition-all duration-300 hover:bg-[#E8D9BE] hover:-translate-y-1 hover:shadow-2xl shadow-lg font-['Inter']"
            >
              Hire Me
              <FontAwesomeIcon icon={faRocket} className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;