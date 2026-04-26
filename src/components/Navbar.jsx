import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shimul.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const linkClass = ({ isActive }) =>
    `border-b-2 pb-0.5 transition-colors duration-200 ${
      isActive
        ? 'border-blue-800 text-blue-800 font-semibold'
        : 'border-transparent hover:border-blue-800 hover:text-blue-800'
    }`;

  return (
    <header className="shadow-md bg-white">
      <nav className="w-11/12 mx-auto py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <img src={logo} alt="shimul logo" className="w-16 h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={linkClass} end={to === '/'}>
                {label}
              </NavLink>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM160-212l101-97 55 53-97 101-59-57Z"/>
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile: Dark toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM160-212l101-97 55 53-97 101-59-57Z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="currentColor">
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
                </svg>
              )}
            </button>

            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center gap-4 bg-gray-100 py-4 rounded-lg font-medium">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)} // close on navigate
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;