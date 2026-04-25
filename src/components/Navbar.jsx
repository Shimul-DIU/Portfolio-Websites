import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/shimul.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md bg-white">
      <nav className="w-11/12 mx-auto py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <img src={logo} alt="shimul logo" className="w-16 h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className='hover:border-b-blue-800'>Home</Link>
            <Link to="/about" className='hover:border-b-blue-800'>About</Link>
            <Link to="/services" className='hover:border-b-blue-800'>Services</Link>
            <Link to="/contact" className='hover:border-b-blue-800'>Contact</Link>
            <Link to="/projects" className='hover:border-b-blue-800'>Projects</Link>
            <Link to="/resume" className='hover:border-b-blue-800'>Resume</Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center gap-4 bg-gray-100 py-4 rounded-lg">
            <Link to="/" className='hover:bg-blue-600'>Home</Link>
            <Link to="/about" className='hover:bg-blue-600'>About</Link>
            <Link to="/services" className='hover:bg-blue-600'>Services</Link>
            <Link to="/contact" className='hover:bg-blue-600'>Contact</Link>
            <Link to="/projects" className='hover:bg-blue-600'>Projects</Link>
            <Link to="/resume" className='hover:bg-blue-600'>Resume</Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;