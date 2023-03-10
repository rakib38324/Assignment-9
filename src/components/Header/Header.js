import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Body from '../Body/Body';
import img from './header-image.png'

const Header = () => {
    const topics = useLoaderData();
    // console.log(topics.data.length)
    return (
        <div>
            <header>
                <div className='bg-blue-100 m-auto sm:grid grid-cols-2 gap-2 '>
                    <div className='pt-4'>
                        <img className='sm:m-auto sm:w-80 w-50' src={img} alt="" />
                    </div>
                    <div className='sm:text-3xl sm:m-auto'>
                        <p className='text-5xl text-blue-900 pb-6 font-extrabold'>Welcome to Gaming Quiz Website</p>
                        <p className='text-4xl font-bold text-sky-900 underline'>Some Instructions</p>

                        <div className=' text-2xl text-sky-900'>
                        <ul>Don't search Google</ul>
                        <ul>Don't take any others help</ul>
                        <ul>Don't close window tab</ul>
                        
                        <ul>Don't open any other source</ul>
                        
                        </div>
                    </div>
                </div>
            </header>
            <div>
            {
                topics.data.map(topic => <Body
                    
                    key={topic.id }
                    topic= {topic}

                ></Body>)
            }

                
            </div>
        </div>
    );
};

export default Header;