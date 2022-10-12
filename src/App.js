
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';
import React from 'react';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';





function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        
        { 
          path: '/', 
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Header></Header> 
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path:'/topics/:id',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },


    {path: '*', element: <div className='text-6xl mt-52'> <span className='text-red-600 font-bold'>404</span> This page not found</div>}
  ])


  
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
