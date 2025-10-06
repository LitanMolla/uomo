import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root/Root';
import NotFound from '../pages/NotFound/NotFound';

const Routes = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <NotFound/>,
        children:[
            
        ]
    }
])

export default Routes;