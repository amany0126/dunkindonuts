import React from 'react';
import Header from './Header';
import Footer from './footer';
import MainPage from '../page/main/MainPage';
import { Routes, Route } from 'react-router-dom';
import SideBar from './sideBar';
import TestPage from '../page/main/TestPage';

const Layout = () =>{
    return(
        <div id='wrapper'>
            <div id="content-wrapper">
                <div id="content">
                    <Header />
                    <Routes>
                        <Route exact path="/" Component={MainPage}/>
                        <Route exact path="test" Component={TestPage}/>
                    </Routes>
                    <Footer/>
                    <SideBar/>
                </div>  
            </div>   
        </div>
    );
};

export default Layout;