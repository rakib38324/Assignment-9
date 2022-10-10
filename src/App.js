import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Body from './components/Body/Body';


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
          element: <Header></Header> }
        
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
