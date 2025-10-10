import React from 'react';

const Rating = () => {
    return (
        <div className='w-full linear py-14 px-[5%] text-center text-white' >
            <h1 className='font-bold text-[50px]'>Trusted by Millions, Built for You</h1>
            <div className='my-[3%] flex justify-around'>
                <div className='flex flex-col gap-3'>
                    <h3 className='opacity-75'>Total Downloads</h3>
                    <h1 className='font-black text-5xl'>29.6M</h1>
                    <h3 className='opacity-75 font-light text-sm'>21% More Than Last Month</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='opacity-75'>Total Reviews</h3>
                    <h1 className='font-black text-5xl'>906K</h1>
                    <h3 className='opacity-75 font-light text-sm'>46% More Than Last Month</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='opacity-75'>Active Apps</h3>
                    <h1 className='font-black text-5xl'>132+</h1>
                    <h3 className='opacity-75 font-light text-sm'>31 More will Launch</h3>
                </div>
            </div>
        </div>
    );
};

export default Rating;