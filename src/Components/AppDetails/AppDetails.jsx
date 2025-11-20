import React, { useContext, useState } from 'react';
import FixingNumber from '../../Functions/FixingNumber';
import Chart from '../Chart/Chart';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

import { InstalledContext } from '../../Hooks/Installed/Installed';

import { Slide, ToastContainer, toast } from "react-toastify";

const AppDetails = ({ appDetailsData }) => {

    const { id, image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = appDetailsData;
    const { installed, setInstalled } = useContext(InstalledContext);
    // const localData = JSON.parse(localStorage.getItem('installedAppsId')) || {ids: []};

    const [buttonDisable, setButtonDisable] = useState(installed.includes(id));

    const handleInstallButton = (id) => {
        localStorage.setItem('installedAppsId', JSON.stringify({ ids: [...installed, id] }))
        setInstalled([...installed, id])
        setButtonDisable(true);
        toast.success('App Installed Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
    }

    return (
        <div className='p-[5%]'>
            <div className='w-full flex gap-[5%]'>
                <img className='w-[35%] rounded-lg' src={image} alt="Apps Logo" />
                <div className='w-full flex flex-col justify-between'>
                    <h1 className='font-bold text-4xl'>{title}</h1>
                    <h4 className='text-xl'><span className='opacity-60'>Developed By</span> {' '}
                        <span
                            style={{
                                fontWeight: 'bold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >{companyName}</span>
                    </h4>
                    <hr className='my-5 opacity-25' />
                    <div className='flex gap-12'>
                        <div className=''>
                            <h3 className='text-5xl text-[#00e0c6]'><LuDownload /></h3>
                            <h5 className='mt-2 opacity-55 font-extralight'>Download</h5>
                            <h2 className='font-bold text-[50px] opacity-75'>{FixingNumber(downloads, 0)}</h2>
                        </div>
                        <div className=''>
                            <h3 className='text-5xl text-[#ff8811]'><FaStar /></h3>
                            <h5 className='mt-2 opacity-55 font-extralight'>Average Ratings</h5>
                            <h2 className='font-bold text-[50px] opacity-75'>{ratingAvg}</h2>
                        </div>
                        <div className=''>
                            <h3 className='text-5xl text-[#9F62F2]'><MdRateReview /></h3>
                            <h5 className='mt-2 opacity-55 font-extralight'>Total Reviews</h5>
                            <h2 className='font-bold text-[50px] opacity-75'>{FixingNumber(reviews, 0)}</h2>
                        </div>
                    </div>
                    <button
                        className='btn w-fit mb-1 px-[30px] text-lg font-light text-white text-shadow-lg'
                        style={buttonDisable ? {
                            backgroundColor: '#00e0c670'
                        } : {
                            backgroundColor: '#00e0c6',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleInstallButton(id)}
                        disabled={buttonDisable}
                    >
                        {buttonDisable ? 'Installed' : `Install Now  󠀠 (${size} MB)`}
                    </button>
                </div>
            </div>
            <hr className='my-12 opacity-25' />
            <Chart ratings={ratings}></Chart>
            <hr className='my-12 opacity-25' />
            <div>
                <h2 className='ml-[2%] mb-5 font-semibold text-3xl'>Description</h2>
                <p className='opacity-60 text-xl text-justify' >{description}</p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </div>
    );
};

export default AppDetails;