import React from 'react';
import ShowApps from '../../Components/ShowApps/ShowApps';
import { useLoaderData } from 'react-router';

import { IoSearchOutline } from "react-icons/io5";

const Apps = () => {

    const appsData = useLoaderData();


    return (
        <div className='my-16'>
            <div className='mb-[40px] text-center'>
                <h1 className='font-bold text-[40px]'>Our All Applications</h1>
                <p className='font-light opacity-65'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mx-[5%] mb-5 flex justify-between'>
                <h2 className='font-semibold text-xl'>({appsData.length}) Apps Found</h2>
                <form className='w-1/4 border rounded-sm px-2.5 py-1.5 flex gap-3' action="">
                    <button className=''><IoSearchOutline /></button>
                    <input className='w-full focus:outline-none' type="text" name="search" placeholder='Search Apps' />
                </form>
            </div>
            <div className='mx-[5%] '>
                <ShowApps appsData={appsData}></ShowApps>
            </div>
        </div>
    );
};

export default Apps;