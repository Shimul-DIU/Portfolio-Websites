import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex bg-blue-500 p-6 2xl:p-8 2xl:text-lg flex-col md:flex-row gap-4'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;