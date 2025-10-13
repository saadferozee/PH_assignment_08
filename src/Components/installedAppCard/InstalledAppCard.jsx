import React from 'react';

const InstalledAppCard = ({installedApp, setInstalled}) => {

    // console.log(installedApp);
    return (
        <div className='border'>
            <h1>{installedApp.title}</h1>
        </div>
    );
};

export default InstalledAppCard;