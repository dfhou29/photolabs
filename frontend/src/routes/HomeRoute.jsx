import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({detailModal, setDetailModal, favorite, detailItem, setDetailItem, handleLike, isSelected}) => {


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorite={favorite}/>
      <PhotoList photos={photos} detailModal={detailModal} setDetailModal={setDetailModal} detailItem={detailItem} setDetailItem={setDetailItem} handleLike={handleLike} isSelected={isSelected}/>
    </div>
  );
};

export default HomeRoute;