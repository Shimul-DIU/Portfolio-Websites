import React, { useState } from 'react';

const Navbar = () => {
    let [open ,setOpen]=useState(false)
    return (
        <div>
            <nav className='w-11/12 mx-auto shadow-2xl '>
                <div className='flex items-center rounded-sm   md:flex-row justify-around bg-white   transition-all duration-500 '>
                   <div>
                        <a className='text-2xl font-bold basis-1/3' href="/">Md. Shimul</a>
                   </div>
                   <button className='md:hidden' onClick={()=>{setOpen(!open)}}>
                    {open?<svg  className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>:<svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>}
                   </button>
                    {open && (<ul className='hidden md:flex flex-col '>
                        <li className=' hover:border-b-3  md:p-5 border-blue-500'>
                            <a href="/">Home</a>
                        </li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/about">About</a></li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/services">Skill</a></li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/contact">Contact</a></li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/contact">Projects</a></li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/contact">Resume</a></li>
                        <li className='border-b-2 border-b-transparent hover:border-b-3 hover:border-b-blue-500 md:p-5'><a href="/contact">Contact</a></li>
                    </ul>)}
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;