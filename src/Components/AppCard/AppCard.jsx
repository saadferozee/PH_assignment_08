import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const fixingNumber = (number) => {
    if (number > 999999999) {
        const convertedToB = number / 1000000000;
        const addedLetterB = convertedToB.toFixed(0) + 'B';
        return addedLetterB;
    } else if (number > 999999) {
        const convertedToM = number / 1000000;
        const addedLetterM = convertedToM.toFixed(0) + 'M';
        return addedLetterM;
    } else {
        const convertedToK = number / 1000;
        const addedLetterK = convertedToK.toFixed(0) + 'K';
        return addedLetterK;
    }
} 

const AppCard = ({appData}) => {
    const {image, title, downloads, ratingAvg } = appData;

    const downloadNumberFixed = fixingNumber(downloads);

    return (
        <div 
            className='border border-[#00000010] bg-[#ffffff40] shadow-xl w-full rounded-sm p-[16px] hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-500'
            title='Click to show details'    
        >
            <img className='rounded-sm' src={image} alt="" />
            <h1 className='my-3'>{title}</h1>
            <div className='w-full flex justify-between'>
                <h4 className='bg-[#00d39030] text-[#00d390] rounded-sm flex items-center gap-1 px-2 font-semibold'><LuDownload /> {downloadNumberFixed}</h4>
                <h4 className='bg-[#ff881130] text-[#ff8811] rounded-sm flex items-center gap-1 px-2 font-semibold'><FaStar /> {ratingAvg}</h4>
            </div>
        </div>
    );
};

export default AppCard;