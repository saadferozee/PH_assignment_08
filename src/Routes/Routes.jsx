import React from 'react';

import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installations from '../Pages/Installations/Installations';
import ShowApps from '../Pages/ShowApps/ShowApps';
import AppData from '../Pages/AppData/AppData';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: 'installations', Component: Installations},
            {
                path: 'apps', 
                Component: ShowApps,
                children: [
                    {index: true, Component: Apps},
                    {path: 'apps/:appId', Component: AppData}
                ]
            }
        ]
    }
])

export default router;