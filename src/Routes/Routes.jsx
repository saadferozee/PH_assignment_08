import React from 'react';

import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installations from '../Pages/Installations/Installations';
import AppData from '../Pages/AppData/AppData';


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/app-data.json'),
                Component: Home
            },
            {
                path: 'apps', 
                loader: () => fetch('/app-data.json'),
                Component: Apps
            },
            {
                path: 'apps/:appId',
                loader: ({params}) => fetch('/app-data.json').then(data => data.json()).then(data => data.find( item => item.id == params.appId)),
                Component: AppData
            },
            {path: 'installations', Component: Installations}
        ]
    }
])

export default router;