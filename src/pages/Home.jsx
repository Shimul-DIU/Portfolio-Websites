import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-700">Open to opportunities</span>
              </div>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-6'>Hi,</h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MD. Shimul
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "UI/UX Enthusiast"
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
                </h2>

              </p>

              <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Crafting beautiful, responsive web applications with modern technologies.
                4+ years of experience in building scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Contact Me
                </Link>
              </div>

              {/* Social links */}
              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition p-2 hover:bg-gray-100 rounded-full">
                  <FaGithub size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition p-2 hover:bg-gray-100 rounded-full">
                  <FaLinkedin size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-sky-500 transition p-2 hover:bg-gray-100 rounded-full">
                  <FaTwitter size={22} />
                </a>
              </div>
            </div>

            {/* Right side - Profile image placeholder */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-7xl md:text-8xl font-bold text-white/90">MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What I <span className="text-blue-600">Do</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              I specialize in creating modern web applications with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaCode, title: "Frontend Development", desc: "React, Next.js, Tailwind CSS, TypeScript. Building responsive and interactive UIs.", color: "blue" },
              { icon: FaMobileAlt, title: "Responsive Design", desc: "Mobile-first approach ensuring perfect experience on all devices and screen sizes.", color: "purple" },
              { icon: FaDatabase, title: "Backend Integration", desc: "Node.js, Express, MongoDB, PostgreSQL. Creating robust API integrations.", color: "pink" }
            ].map((service, idx) => (
              <div key={idx} className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                  <service.icon className={`text-2xl text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Projects Completed" },
              { value: "25+", label: "Happy Clients" },
              { value: "4+", label: "Years Experience" },
              { value: "15+", label: "Technologies" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce Platform", tech: "React, Node.js, MongoDB", image: "🛒" },
              { title: "Task Management App", tech: "Next.js, Tailwind, Prisma", image: "✅" },
              { title: "Portfolio Website", tech: "React, Framer Motion", image: "🎨" }
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl group-hover:scale-105 transition">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.tech}</p>
                  <Link to="/projects" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1">
                    Learn More <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
              "Express", "MongoDB", "PostgreSQL", "GraphQL", "Figma",
              "Git", "Docker", "Jest", "Redux", "Python"
            ].map((skill, idx) => (
              <span key={idx} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Clients <span className="text-blue-600">Say</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Feedback from people I've had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Product Manager", text: "Shimul delivered exceptional work. His attention to detail and communication was outstanding.", rating: 5 },
              { name: "Michael Chen", role: "Startup Founder", text: "One of the most dedicated developers I've worked with. Highly recommended!", rating: 5 },
              { name: "Emily Rodriguez", role: "Creative Director", text: "Great technical skills and amazing problem solver. Will definitely hire again.", rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's create something amazing!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">MD. Shimul</h3>
              <p className="text-sm">Full Stack Developer creating exceptional digital experiences.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><FaEnvelope /> shimul@example.com</li>
                <li className="flex items-center gap-2"><FaPhoneAlt /> +880 1234 567890</li>
                <li className="flex items-center gap-2"><FaMapMarkerAlt /> Dhaka, Bangladesh</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-3">Subscribe for updates</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-lg text-gray-900 w-full focus:outline-none" />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition text-white">→</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 MD. Shimul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;