import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faCode,
  faDatabase,
  faServer,
  faLaptopCode,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Full Stack E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with a dedicated admin panel for managing products, categories, orders, and users. Customers can browse products, add items to their cart, place orders, and manage their accounts, while administrators can efficiently control the entire store through a secure dashboard.",
    image:
      "https://res.cloudinary.com/t5icq7cq/image/upload/v1784463898/ecommerce_project_hgdbig.png",
    tech: ["React", "Node Js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://shimulshopping.web.app/",
    githubLink: "https://github.com/Shimul-DIU/Ecommerce_website",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    image: "/images/project2.png",
    tech: ["Next Js", "Firebase", "Material UI"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/project-two",
    featured: false,
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    image: "/images/project3.png",
    tech: ["React", "Express Js", "MySQL"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/project-three",
    featured: false,
  },
];

const Projects = () => {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Tech icon mapping
  const getTechIcon = (tech) => {
    const techMap = {
      "React": faReact,
      "Node Js": faNodeJs,
      "MongoDB": faDatabase,
      "Tailwind CSS": faLaptopCode,
      "Next Js": faReact,
      "Firebase": faDatabase,
      "Material UI": faLaptopCode,
      "Express Js": faServer,
      "MySQL": faDatabase,
    };
    return techMap[tech] || faCode;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 bg-[#140D0A] overflow-hidden relative"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#C9A876]/5 via-transparent to-[#C9A876]/5"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A876]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A876]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span
          className={`inline-block text-[#C9A876] tracking-[5px] uppercase text-xs font-medium mb-2 font-['Inter'] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          | Portfolio |
        </span>

        <h2
          className={`font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5EFE6] mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          Featured <span className="text-[#C9A876]">Projects</span>
        </h2>

        <p
          className={`text-[#F5EFE6]/60 mb-14 max-w-2xl mx-auto font-['Inter'] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          Each project represents a unique challenge solved with creativity and technical expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-[#2A1D16]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C9A876]/20 hover:border-[#C9A876]/60 hover:shadow-2xl hover:shadow-[#C9A876]/10 hover:-translate-y-2 transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-[#C9A876] text-[#140D0A] px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[10px]" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D0A] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#F5EFE6] mb-2 font-['Inter'] group-hover:text-[#C9A876] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#F5EFE6]/60 text-sm mb-4 leading-relaxed font-['Inter'] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack with icons */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 bg-[#C9A876]/10 text-[#C9A876] text-xs font-medium px-3 py-1.5 rounded-full border border-[#C9A876]/20 hover:bg-[#C9A876] hover:text-[#140D0A] transition-all duration-300 cursor-default"
                    >
                      <FontAwesomeIcon
                        icon={getTechIcon(tech)}
                        className="text-[10px]"
                      />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium bg-[#C9A876] text-[#140D0A] px-5 py-2.5 rounded-full hover:bg-[#E8D9BE] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#C9A876]/20"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium border border-[#C9A876]/30 text-[#F5EFE6] px-5 py-2.5 rounded-full hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-sm" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A876]/40 px-8 py-3.5 text-sm font-medium text-[#F5EFE6] transition-all duration-300 hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 font-['Inter'] group"
          >
            View All Projects
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;