import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    // const data = useLoaderData();
    // console.log(data.data);
    // const topics = data.tata;

    const [topic, settopic] = useState();
    
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data =>{
            const grapdata = data.data.data.map(grapdatas =>{
                const newArray = {
                    name: grapdatas.name,
                    total: grapdatas.total
                }
                return newArray
            })
           
            console.log(grapdata)
            settopic(grapdata)
        } )
        
        
        
    },[])
    

    return (

            
            <div>
                <div>
                    <p className='mt-5 text-4xl font-extrabold text-indigo-600 underline'>This is the Statistics with total Quiz number</p>
                </div>
                <BarChart className='m-auto' width={1200} height={800} data={topic} 
            margin={{
              top: 100,
              right: 0,
              left: 0,
              bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
            </div>
          
        
    );
};

export default Statistics;