import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;