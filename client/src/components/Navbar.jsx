import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icon.png';

const Navbar = () => {
  const [isopen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch h-16">

            {/* Logo / Brand */}
            <div className="flex items-center basis-1/4">
              <img src={logo} className='h-10 object-contain' alt="icon" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden  flex-1  md:flex  justify-around">
              <li className="flex items-stretch">
                <Link
                  to="/"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-">
                <Link
                  to="/about"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  About
                </Link>
              </li>
              <li className="flex items-stretch">
                <Link
                  to="/projects"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-stretch">
                <Link
                  to="/skills"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  Skills
                </Link>
              </li>
              <li className="flex items-stretch">
                <Link
                  to="/contact"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-stretch">
                <Link
                  to="/blog"
                  className="flex items-center px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 border-b-2 border-transparent hover:border-blue-500 transition duration-200 font-medium"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Desktop Resume Button + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition duration-200 text-sm md:text-base">
                Resume
              </button>

              <button
                onClick={() => setIsOpen(!isopen)}
                className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon icon={isopen ? faXmark : faBars} className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isopen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden bg-white border-t border-gray-100 shadow-lg`}
        >
          <ul className="flex flex-col py-3 px-4 space-y-1">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition font-medium"
              >
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <button
                onClick={handleLinkClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-md transition"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {isopen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;