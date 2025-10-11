import React from 'react';
import AppCard from '../AppCard/AppCard';
import { useNavigation } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const ShowApps = ({ appsData }) => {

    const { state } = useNavigation();

    if (state === 'loading') {
        return <Loading></Loading>
    } else {
        return (
            <div className='grid grid-cols-4 gap-6'>
                {
                    appsData.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                }
            </div>
        );
    }
};

export default ShowApps;