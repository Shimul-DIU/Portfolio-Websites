import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icon.png';

const Navbar = () => {
  const [isopen, setIsOpen] = React.useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <div className="h-16 basis-1/4">
              <img src={logo} className='h-full object-contain' alt="icon" />
            </div>

            {/* Desktop Menu - hidden on mobile, visible on md and up */}
            <ul className="hidden flex-1 md:flex justify-around">
              <li className="group">
                <Link
                  to="/"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  Home
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/about"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  About
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/projects"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  Projects
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/skills"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  Skills
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/contact"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/blog"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition duration-200 font-medium group-hover:border-b-2 group-hover:border-blue-500"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Desktop Resume Button + Mobile Menu Button */}
            <div className="flex justify-center gap-3">
              {/* Resume Button - visible on all screens */}
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition duration-200 text-sm md:text-base">
                Resume
              </button>

              {/* Mobile Menu Toggle Button - visible only on mobile/tablet */}
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

        {/* Mobile Menu Dropdown - shown when isopen is true */}
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
            {/* Optional: Add Resume button inside mobile menu for better UX */}
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

      {/* Optional: Overlay when mobile menu is open (closes menu when clicking outside) */}
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