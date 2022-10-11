import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-full h-20 bg-blue-500 text-white sm:flex justify-around items-center'>
            <div className='text-3xl font-extrabold'>
                <p>Let's Play Gaming Quiz</p>
            </div>
            <div className='text-2xl '>
            <Link className='pr-5' to='/'>Home</Link>
            <Link className='pr-5' to='/topics'>Topics</Link>
            <Link className='pr-5' to='/statistics'>Statistics</Link>
            <Link className='pr-5' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;