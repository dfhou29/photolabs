import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, fetchPhotoNyTopic}) => {


  return (
    <div className="home-route">
      <TopNavigationBar topics={state.topicData} state={state} updateToFavPhotoIds={updateToFavPhotoIds} fetchPhotoByTopic={fetchPhotoNyTopic}/>
      <PhotoList photos={state.photoData} state={state} isSelected={isSelected} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>
    </div>
  );
};

export default HomeRoute;