import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router';
import FixingNumber from '../../Functions/FixingNumber';

const AppCard = ({ appData }) => {
    
    const { id, image, title, downloads, ratingAvg } = appData;
    
    const downloadNumberFixed = FixingNumber(downloads, 0);
    
    const navigate = useNavigate();
    const handleClickOnCard = (id) => navigate(`/apps/${id}`);
    
    return (
        <div
            className='border border-[#00000010] bg-[#ffffff40] shadow-xl w-full rounded-sm p-[16px] flex flex-col justify-between hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-400'
            title='Click to show details'
            onClick={() => handleClickOnCard(id)}
        >
            <img className='rounded-sm' src={image} alt={`${title} image`} />
            <h1 className='my-3'>{title}</h1>
            <div className='w-full flex justify-between'>
                <h4 className='bg-[#00d39030] text-[#00d390] rounded-sm flex items-center gap-1 px-2 font-semibold'><LuDownload /> {downloadNumberFixed}</h4>
                <h4 className='bg-[#ff881130] text-[#ff8811] rounded-sm flex items-center gap-1 px-2 font-semibold'><FaStar /> {ratingAvg}</h4>
            </div>
        </div>
    );
};

export default AppCard;