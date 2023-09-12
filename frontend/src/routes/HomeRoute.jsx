import React, {useContext, useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import {AppContext} from "../App";

const HomeRoute = () => {


  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList/>
    </div>
  )
};

export default HomeRoute;