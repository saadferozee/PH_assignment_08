import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm px-[5%]">
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
                    <NavLink to={'/'} className="text-linear text-2xl font-extrabold">HERO.IO</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='menu menu-horizontal px-1 gap-4'>
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'semibold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px'
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apps"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'semibold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px'
                            }}
                        >
                            Apps
                        </NavLink>
                        <NavLink
                            to="/installations"
                            style={({ isActive }) => isActive ? ({
                                padding: '0px 4px',
                                borderBottom: '1px solid #9f62f2',
                                fontWeight: 'semibold',
                                display: 'inline-block',
                                background: 'linear-gradient(to right, #632EE3 0%, #9F62F2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }) : {
                                padding: '0px 4px'
                            }}
                        >
                            Installations
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-end gap-[16px]">
                    <button className="linear rounded-[8px] px-[20px] py-[10px] font-bold text-white">Sign Up</button>
                </div>
            </div>
        </div >
    );
};

export default Navbar;