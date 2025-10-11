import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Loading from '../Loading/Loading';

const Root = () => {

    const { state } = useNavigation();

    // if (state === 'loading') {
    //     return <Loading />
    // } else {

    return (
        <div>
            <Navbar></Navbar>
            {/* Navbar Done */}
            {
                state === 'idle' ? <Outlet></Outlet> : <Loading></Loading>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;