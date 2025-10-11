import React from 'react';
import FixingNumber from '../../Functions/FixingNumber';

const Rating = ({allAppsData}) => {

    const downloads = allAppsData.map(appData => appData.downloads);
    let totalDownloads = 0;
    downloads.forEach(number => totalDownloads = totalDownloads + number);
    const reviews = allAppsData.map(appData => appData.reviews);
    let totalReviews = 0;
    reviews.forEach(number => totalReviews = totalReviews + number);

    return (
        <div className='w-full linear py-10 px-[5%] text-center text-white' >
            <h1 className='font-bold text-[40px]'>Trusted by Millions, Built for You</h1>
            <div className='my-[3%] flex justify-around'>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='opacity-75'>Total Downloads</h3>
                    <h1 className='font-black text-5xl'>{FixingNumber(totalDownloads, 1)}</h1>
                    <h3 className='opacity-75 font-light text-sm'>21% More Than Last Year</h3>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='opacity-75'>Total Reviews</h3>
                    <h1 className='font-black text-5xl'>{FixingNumber(totalReviews, 1)}</h1>
                    <h3 className='opacity-75 font-light text-sm'>46% More Than Last Year</h3>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='opacity-75'>Active Apps</h3>
                    <h1 className='font-black text-5xl'>{allAppsData.length}+</h1>
                    <h3 className='opacity-75 font-light text-sm'>31 More will Launch</h3>
                </div>
            </div>
        </div>
    );
};

export default Rating;