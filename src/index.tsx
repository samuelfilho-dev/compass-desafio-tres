import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import About from "./routes/About";
import Contact from "./routes/Contact";


const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: 'shop', element: <Shop/>},
    {path: 'about', element: <About/>},
    {path: 'contact', element: <Contact/>}
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
