import React from 'react';
import Layout from './../components/Layout';
import Details3 from './../components/Details3/Details3';
import Details2 from './../components/Details2/Details2';
import Details from './../components/Details/Details';
import Favorites3 from './../components/Favorites3/Favorites3';
import Favorites2 from './../components/Favorites2/Favorites2';
import Favorites from './../components/Favorites/Favorites';
import YourRoomie from './../components/YourRoomie/YourRoomie';
import FindPerfect2 from './../components/FindPerfect2/FindPerfect2';
import Upcomming from './../components/Upcomming/Upcomming';
import LatsGo from './../components/LatsGoPage/LatsGo';
import Login from './../components/Login/Login';
import FindPerfect from './../components/FindPerfect/FindPerfect';
import FindMatch from './../components/FindMatch/FindMatch';
import RoomatFinder from './../components/RoomatFinder/RoomatFinder';
import FindRoomie from './../components/FindRoomie/FindRoomie';
import {  Route } from "react-router-dom"


const MyRoute = () => {
    return (
        <div>

            <Route path='/Layout'>
                <Layout />
            </Route>

            <Route path='/Details3'>
                <Details3 />
            </Route>
            <Route path='/Details2'>
                <Details2 />
            </Route>
            <Route path='/Details'>
                <Details />
            </Route>
            <Route path='/Favorites3'>
                <Favorites3 />
            </Route>
            <Route path='/Favorites2'>
                <Favorites2 />
            </Route>
            <Route path='/favorites'>
                <Favorites />
            </Route>
            <Route path='/YourRoomie'>
                <YourRoomie />
            </Route>
            <Route path='/FindPerfect2'>
                <FindPerfect2 />
            </Route>
            <Route path='/Upcomming'>
                <Upcomming />
            </Route>
            <Route path='/LatsGo'>
                <LatsGo />
            </Route>
            <Route path='/Login'>
                <Login />
            </Route>
            <Route path='/findPerfect'>
                <FindPerfect />
            </Route>
            <Route path='/FindMatch'>
                <FindMatch />
            </Route>
            <Route path='/RoomatFinder'>
                <RoomatFinder />
            </Route>
            <Route exact path='/'>
                <FindRoomie />
            </Route>

        </div>
    );
};

export default MyRoute;