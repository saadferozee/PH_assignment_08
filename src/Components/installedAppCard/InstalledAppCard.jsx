import React from 'react';
import FixingNumber from '../../Functions/FixingNumber';

import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const InstalledAppCard = ({ installedApp, setInstalled }) => {

    const { id, downloads, ratingAvg, size } = installedApp;

    const handleUninstallButton = (id) => {
        const local = JSON.parse(localStorage.getItem('installedAppsId')).ids;
        const updateInstalledApps = local.filter(appId => appId !== id);
        localStorage.setItem('installedAppsId', JSON.stringify({ ids: updateInstalledApps }));
        setInstalled([...updateInstalledApps]);
    }

    return (
        <div className='border border-[#00000010] rounded bg-[#ffffff40] shadow-lg p-[16px] flex justify-between items-center hover:cursor-pointer hover:scale-101 hover:shadow-2xl transition-transform duration-400'>
            <div className='flex gap-4'>
                <img className='w-[65px] rounded-sm' src={installedApp.image} alt="app image" />
                <div className='flex flex-col justify-around'>
                    <h1 className='font-semibold text-lg'>{installedApp.title}</h1>
                    <div className='flex gap-6 items-center'>
                        <h4 className='flex items-center gap-1.5 text-[#00d390]'><LuDownload /> {FixingNumber(downloads, 0)}</h4>
                        <h4 className='flex items-center gap-1.5 text-[#ff8811]'><FaStar /> {ratingAvg}</h4>
                        <h4 className='opacity-55'>{size} MB</h4>
                    </div>
                </div>
            </div>
            <button className='btn btn-neutral border-none bg-[#00d390] text-shadow-xs text-white' onClick={() => handleUninstallButton(id)}>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;