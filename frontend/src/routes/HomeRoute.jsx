import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}) => {


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} state={state} updateToFavPhotoIds={updateToFavPhotoIds}/>
      <PhotoList photos={photos} state={state} isSelected={isSelected} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>
    </div>
  );
};

export default HomeRoute;