import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Loading from '../Loading/Loading';
import AppDetails from '../../Components/AppDetails/AppDetails';

const AppData = () => {

    const { state } = useNavigation();
    const thisAppData = useLoaderData();

    if (state === 'loading') {
        return <Loading></Loading>
    } else {
        return (
            <div>
                <AppDetails appDetailsData={thisAppData}></AppDetails>
            </div>
        );
    }
};

export default AppData;