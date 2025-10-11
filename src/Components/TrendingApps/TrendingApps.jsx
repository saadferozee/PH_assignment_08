import React from 'react';
import ShowApps from '../ShowApps/ShowApps';

const TrendingApps = ({trendingAppsData}) => {
    return (
        <div className='mx-[5%] my-[80px]'>
            <div className='mb-[40px] text-center'>
                <h1 className='font-bold text-[40px]'>Trending Apps</h1>
                <p className='font-light opacity-65'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <ShowApps appsData={trendingAppsData}></ShowApps>
        </div>
    );
};

export default TrendingApps;