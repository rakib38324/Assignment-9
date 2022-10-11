import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quizlayout = ({ topic }) => {
    const { question, options } = topic;

    return (
        <div className='mt-5'>
            <div className='m-5 mt-20 sm:mt-10 sm:m-auto p-5 border-2 bg-blue-300 border-sky-600 rounded-xl sm:w-1/2 shadow-lg shadow-cyan-500/50'>

                <div className='grid grid-cols-12 gap-1 col-end-1'>
                    <p className='text-3xl p-4 col-span-11'>{question}</p>
                    <FontAwesomeIcon className="pl-4" icon={faEye}></FontAwesomeIcon>
                </div>
                <div className=' sm:grid grid-cols-2 gap-8 content-center '>
                    <p className='bg-blue-200 text-xl p-2 border-2 rounded-lg hover:bg-green-500 border-green-300'>{options[0]}</p>
                    <p className='bg-blue-200 text-xl p-2 border-2 rounded-lg hover:bg-green-500 border-green-300'>{options[1]}</p>
                    <p className='bg-blue-200 text-xl p-2 border-2 rounded-lg hover:bg-green-500 border-green-300'>{options[2]}</p>
                    <p className='bg-blue-200 text-xl p-2 border-2 rounded-lg hover:bg-green-500 border-green-300'>{options[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default Quizlayout;