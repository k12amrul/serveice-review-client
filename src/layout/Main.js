import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shred/Footer/Footer';
import Header from '../pages/Shred/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;