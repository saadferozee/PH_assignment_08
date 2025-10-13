import React, {  useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Loading from '../Loading/Loading';

import { InstalledContext } from '../../Hooks/Installed/Installed';

const Root = () => {

    const localInstall = JSON.parse(localStorage.getItem('installedAppsId')) || {ids: []};
    console.log(localInstall);
    const [installed, setInstalled] = useState(localInstall.ids);

    const { state } = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            {/* Navbar Done */}
            {
                state === 'idle' ? <InstalledContext.Provider value={{installed, setInstalled}}><Outlet></Outlet></InstalledContext.Provider> : <Loading></Loading>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;