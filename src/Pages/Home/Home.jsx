import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Rating from '../../Components/Rating/Rating';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { NavLink, useLoaderData } from 'react-router';

const Home = () => {

    const allAppsData = useLoaderData();
    const trendingAppsData = allAppsData.filter(appsData => appsData.id <= 10);

    return (
        <div className='py-[60px] text-center'>
            <Hero></Hero>
            <Rating allAppsData={allAppsData}></Rating>
            <TrendingApps trendingAppsData={trendingAppsData}></TrendingApps>
            <NavLink className='py-3 px-6 rounded-sm linear text-white font-bold text-lg' to={'/apps'}>Show All</NavLink>
        </div> 
    );
};

export default Home;