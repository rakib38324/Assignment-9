import React from 'react';
import img from './header-image.png'

const Header = () => {
    return (
        <div className='bg-blue-100 sm:flex justify-center items-center'>
            <div>
            <img className='w-2/4' src={img} alt="" />
            </div>
            <div className='text-3xl'>
                <p className='underline decoration-4'>Some Instructions</p>
                <p>Don't Search Google</p>
                <p>Don't any other source</p>
                <p>Don't close window</p>         
             </div>
        </div>
    );
};

export default Header;