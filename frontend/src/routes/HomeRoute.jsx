import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({setDetailModal}) => {

  const [favorite, setFavorite] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorite={favorite}/>
      <PhotoList photos={photos} favorite={favorite} setFavorite={setFavorite} setDetailModal={setDetailModal}/>
    </div>
  );
};

export default HomeRoute;