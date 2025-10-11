import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='h-[75vh] flex flex-col gap-6 items-center justify-center-safe'>
            <img src={'/assets/error-404.png'} alt="404 Error" />
            <h1 className='font-semibold text-5xl'>Oops, Page Not Found !</h1>
            <h5 className='font-light opacity-70'>The page you are looking for is not available.</h5>
            <button className='linear btn py-[10px] px-[40px] font-extralight text-xl'><NavLink to={'/'}>Go Back !</NavLink></button>
        </div>
    );
};

export default Error;