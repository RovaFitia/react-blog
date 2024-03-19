import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.jsx";
import Contact from "./page/Contact.jsx";
import About from "./page/About.jsx";
import Services from "./page/Services.jsx";
import Blogs from "./page/Blogs.jsx";
import SingleBlog from "./page/SingleBlog.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/blog/:id' ,
                element: <SingleBlog/> ,
                loader: ({paramas})=> fetch(`http://localhost:5000/blogs/${paramas.id}`)
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
