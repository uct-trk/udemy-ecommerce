import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import HomeScreen from './screens/HomeScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/',
        element: <HomeScreen />,
      }
    ]
  } 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

