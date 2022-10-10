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
                <div className='bg-blue-100   lg:flex justify-around items-center '>
                    <div className='pt-4'>
                        <img className='  lg:w-80' src={img} alt="" />
                    </div>
                    <div className='text-3xl '>
                        <p className='text-5xl underline font-extrabold'>Some Instructions</p>
                        <p>Don't search Google</p>
                        <p>Don't open any other source</p>
                        <p>Don't close window</p>
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