import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/shimul.png';
const Navbar = () => {
    let [open ,setOpen]=useState(false)
    return (
        <div>
            <h1>My Portfolio</h1>
            <nav className='w-11/12 mx-auto '>
                <div className='flex flex-col items-center rounded-sm  md:flex-row justify-around bg-white   transition-all duration-500 '>
                   <div>
                        <img src={logo} alt="shimul logo" width="80px" height="80px" />
                   </div>
                   <button className='md:hidden' onClick={()=>{setOpen(!open)}}>
                    {open?<svg  className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>:
                    <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>}
                   </button>
                    <div className={`flex flex-col items-center md:flex-row justify-around bg-white  w-full md:w-auto absolute md:static left-0  transition-all duration-500 ${open?'top-20':'top-[-490px]'}`}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;