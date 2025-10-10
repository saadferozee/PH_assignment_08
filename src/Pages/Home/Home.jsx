import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Rating from '../../Components/Rating/Rating';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div className='py-[60px]'>
            <Hero></Hero>
            <Rating></Rating>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;