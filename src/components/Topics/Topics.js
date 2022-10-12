import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";


const Topics = () => {

    const topics = useLoaderData();

    return (
        <div>
            {
                topics.data.map(topic => 
                <div>
                    <div className='m-auto sm:w-1/2 h-1/2 p-4  rounded-lg  bg-lime-100 mb-5 mt-5 lg:flex justify-between items-center'>
                        <img className='bg-indigo-100 rounded-md' src={topic.logo} alt="" />
                        <div className='lg:text-3xl lg:pr-32'>
                            <h1 className="pb-5 text-4xl  text-indigo-900 font-extrabold">{topic.name}</h1>
                            <p className="pb-5">Questions: {topic.total}</p>
                            <button className="bg-cyan-500 hover:bg-cyan-900 hover:text-white p-4 rounded-lg">
                                <Link to={`${topic.id}`}>Start Practice <FontAwesomeIcon className="pl-4" icon={faArrowRight}></FontAwesomeIcon></Link>
                            </button>
                        </div>
                    </div>

                </div>
                )
            }

        </div>
    );
};

export default Topics;