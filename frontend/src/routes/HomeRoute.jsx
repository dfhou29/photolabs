import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({setDetailModal, setDetailPhoto}) => {

  const [favorite, setFavorite] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorite={favorite}/>
      <PhotoList photos={photos} favorite={favorite} setFavorite={setFavorite} setDetailModal={setDetailModal} setDetailPhoto={setDetailPhoto}/>
    </div>
  );
};

export default HomeRoute;