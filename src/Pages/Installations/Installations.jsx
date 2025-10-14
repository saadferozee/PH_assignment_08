import React, { useContext } from 'react';

import { InstalledContext } from '../../Hooks/Installed/Installed';
import { useLoaderData } from 'react-router';
import InstalledAppCard from '../../Components/installedAppCard/InstalledAppCard';

const Installations = () => {

    const allAppData = useLoaderData();
    const { installed, setInstalled } = useContext(InstalledContext);
    const alreadyInstalled = allAppData.filter(appData => appData.id === installed.find(appId => appId === appData.id))
    // console.log(alreadyInstalled);

    return (
        <div className='my-16'>
            <div className='mb-[40px] text-center'>
                <h1 className='font-bold text-[40px]'>Our All Applications</h1>
                <p className='font-light opacity-65'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mx-[5%] mb-5 flex justify-between'>
                <h2 className='font-semibold text-xl'>({alreadyInstalled.length}) Apps Found</h2>
                <select defaultValue="Sort by Size" className="select select-sm w-[15%] border rounded-sm px-3.5 py-1.5 border-[#00000050] dark:border-[#ffffff50] font-light">
                    <option disabled={true}>Sort by Size</option>
                    <option>Sort by Alphabetically</option>
                    <option>High to Low</option>
                    <option>Velvet</option>
                </select>
            </div>
            <div className='mx-[5%] grid grid-cols-1 gap-3.5'>
                {
                    alreadyInstalled.map(installedApp => <InstalledAppCard key={installedApp.id} installedApp={installedApp} setInstalled={setInstalled}></InstalledAppCard>)
                }
            </div>
        </div>
    );
};

export default Installations;