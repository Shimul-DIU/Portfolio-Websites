import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto shadow-2xl '>
                <div className='flex items-center rounded-sm   flex-col  md:flex-row justify-around bg-white   transition-all duration-500 '>
                   <div>
                        <a className='text-2xl font-bold basis-1/3' href="/">Md. Shimul</a>
                   </div>
                    <ul className='basis-2/3 flex border-b-2 border-b-transparent  justify-around'>
                        <li className=' hover:border-b-2  md:p-5 border-blue-500'>
                            <a href="/">Home</a>
                        </li>
                        <li className='hover:border-b-2 md:p-5'><a href="/about">About</a></li>
                        <li className='hover:border-b-2 md:p-5'><a href="/services">Skill</a></li>
                        <li className='hover:border-b-2 md:p-5'><a href="/contact">Contact</a></li>
                        <li className='hover:border-b-2 md:p-5'><a href="/contact">Projects</a></li>
                        <li className='hover:border-b-2 md:p-5'><a href="/contact">Resume</a></li>
                        <li className='hover:border-b-2 md:p-5'><a href="/contact">Contact</a></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;