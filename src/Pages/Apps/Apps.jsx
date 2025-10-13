import React, { useContext, useState } from 'react';
import ShowApps from '../../Components/ShowApps/ShowApps';
import { useLoaderData } from 'react-router';

import { InstalledContext } from '../../Hooks/Installed/Installed';

import { IoSearchOutline } from "react-icons/io5";

const Apps = () => {

    const { installed} = useContext(InstalledContext);
    console.log(installed);

    const appsData = useLoaderData();

    const [filteredAppsData, setFilteredApps] = useState(appsData);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = e => {
        const input = e.target.value;
        setSearchInput(input);

        if (input === '') {
            setFilteredApps(appsData);
        } else {
            setFilteredApps(appsData.filter(appData => appData.title.toLowerCase().includes(input.toLowerCase())));
        }
    }

    return (
        <div className='my-16'>
            <div className='mb-[40px] text-center'>
                <h1 className='font-bold text-[40px]'>Our All Applications</h1>
                <p className='font-light opacity-65'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mx-[5%] mb-5 flex justify-between'>
                <h2 className='font-semibold text-xl'>({filteredAppsData.length}) Apps Found</h2>
                <form className='w-1/4 border rounded-sm px-2.5 py-1.5 flex gap-3' action="">
                    <button className=''><IoSearchOutline /></button>
                    <input
                        className='w-full focus:outline-none'
                        type="text"
                        name="search"
                        placeholder='Search Apps'
                        defaultValue={searchInput}
                        onChange={handleSearch}
                    />
                </form>
            </div>
            <div className='mx-[5%] '>
                <ShowApps appsData={filteredAppsData}></ShowApps>
            </div>
        </div>
    );
};

export default Apps;