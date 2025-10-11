import React from 'react';
import { NavLink } from 'react-router';

const AppError = () => {
    return (
        <div className='h-[75vh] flex flex-col gap-6 items-center justify-center-safe'>
            <img src={'/assets/App-Error.png'} alt="404 Error" />
            <h1 className='font-semibold text-5xl'>Oops, App Not Found !</h1>
            <h5 className='font-light opacity-70'>The app you are looking for is not available.</h5>
            <button className='linear btn py-[10px] px-[40px] font-extralight text-xl'><NavLink to={'/apps'}>Go Back !</NavLink></button>
        </div>
    );
};

export default AppError;