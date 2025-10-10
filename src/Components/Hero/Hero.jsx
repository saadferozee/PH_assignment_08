import React from 'react';

const Hero = () => {
    return (
        <div className='px-[5%] text-center'>
            <h1 className='font-bold text-[70px]'>We Build<br /><span className='text-linear'>Productive</span> Apps</h1>
            <p className='text-[18px] opacity-55'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='my-[40px] mx-auto w-fit flex gap-[24px]'>
                <a href="https://www.apple.com/app-store/">
                    <button className='border rounded-sm py-[5px] px-[15px] flex items-center text-xl font-semibold'>
                        <img className='h-[32px] mr-[5px]' src="https://img.icons8.com/fluency/96/google-play-store-new.png" alt="google play icon" />
                        Google Play
                    </button>
                </a>
                <a href="https://play.google.com/store/apps?hl=en">
                    <button className='border rounded-sm py-[5px] px-[15px] flex items-center text-xl font-semibold'>
                        <img className='h-[32px] mr-[5px]' src="https://img.icons8.com/fluency/96/apple-app-store.png" alt="google play icon" />
                        Apps Store
                    </button>
                </a>
            </div>
            <img className='mx-auto' src="/assets/hero.png" alt="hero png" />
        </div>
    );
};

export default Hero;