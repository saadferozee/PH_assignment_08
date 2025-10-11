import React from 'react';

const Rating = ({allAppsData}) => {

    const fixingNumber = (number) => {
        if (number > 999999999) {
            const convertedToB = number / 1000000000;
            const addedLetterB = convertedToB.toFixed(1) + 'B';
            return addedLetterB;
        } else if (number > 999999) {
            const convertedToM = number / 1000000;
            const addedLetterM = convertedToM.toFixed(1) + 'M';
            return addedLetterM;
        } else {
            const convertedToK = number / 1000;
            const addedLetterK = convertedToK.toFixed(0) + 'K';
            return addedLetterK;
        }
    } 

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
                    <h1 className='font-black text-5xl'>{fixingNumber(totalDownloads)}</h1>
                    <h3 className='opacity-75 font-light text-sm'>21% More Than Last Month</h3>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='opacity-75'>Total Reviews</h3>
                    <h1 className='font-black text-5xl'>{fixingNumber(totalReviews)}</h1>
                    <h3 className='opacity-75 font-light text-sm'>46% More Than Last Month</h3>
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