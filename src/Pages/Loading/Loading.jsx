import React from 'react';
import { useState, CSSProperties } from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {

    const [loading,] = useState(true);

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <BarLoader
                className='h-full'
                color='#9f62f2'
                loading={loading}
                cssOverride={''}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={0.7}
            />
        </div>
    );
};

export default Loading;