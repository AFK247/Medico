import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Common/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;