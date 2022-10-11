import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizlayout from '../Quizlayout/Quizlayout';

const Quiz = () => {
    const topic = useLoaderData();
    console.log(topic.data)
    const questions = topic.data.questions
    return (
        <div className='bg-blue-100'>
            <h1 className='text-5xl pt-20 text-blue-800 font-extrabold'>Quiz of {topic.data.name}</h1>
            <div>
            {
                questions.map(topic => <Quizlayout 
                
                    key={topic.id }
                    topic= {topic}
                ></Quizlayout>
                    
                    )
            }

            
            </div>
        </div>
    );
};

export default Quiz;