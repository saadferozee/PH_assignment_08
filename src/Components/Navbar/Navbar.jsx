import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-lg shadow-[#00000010] dark:shadow-lg dark:shadow-[#ffffff20] px-[5%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? "lightgreen" : "" })} to={'/'}>Home</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? "lightgreen" : "" })} to={'/apps'}>Apps</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? "lightgreen" : "" })} to={'/installations'}>Installations</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to={'/'} className="text-linear text-2xl font-extrabold">
                        <button className='flex gap-2.5 items-center'>
                            <img className='w-10' src="/assets/logo.png" alt="Logo" />
                            <span>HERO.IO</span>
                        </button>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='menu menu-horizontal px-1 gap-4'>
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px',
                                fontWeight: 'bold'
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apps"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px',
                                fontWeight: 'bold'
                            }}
                        >
                            Apps
                        </NavLink>
                        <NavLink
                            to="/installations"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px',
                                fontWeight: 'bold'
                            }}
                        >
                            Installations
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-end gap-[16px]">
                    <a href="https://github.com/saadferozee"><button className="linear rounded-[8px] px-[20px] py-[10px] flex gap-2 font-bold text-white"><FaGithub className='my-auto' /><span> Contribute</span></button></a>
                </div>
            </div>
        </div >
    );
};

export default Navbar;