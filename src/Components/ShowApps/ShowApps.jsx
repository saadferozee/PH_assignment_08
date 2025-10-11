import React from 'react';
import AppCard from '../AppCard/AppCard';

const ShowApps = ({appsData}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                appsData.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
            }
        </div>
    );
};

export default ShowApps;