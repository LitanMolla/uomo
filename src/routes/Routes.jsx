import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root/Root';
import NotFound from '../pages/NotFound/NotFound';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import Shop from '../pages/Shop/Shop';
import Home from '../pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'blog',
                Component: Blog
            },
            {
                path: 'shop',
                Component: Shop
            }
        ]
    }
])

export default Routes;