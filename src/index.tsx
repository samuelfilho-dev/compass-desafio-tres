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
import ProductSinglePage from "./routes/ProductSinglePage";


const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: 'shop', element: <Shop/>},
    {path: 'about', element: <About/>},
    {path: 'contact', element: <Contact/>},
    {path: 'product/:id', element: <ProductSinglePage />}
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
