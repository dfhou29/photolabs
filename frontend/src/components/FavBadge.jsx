import React, {useContext} from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
import {AppContext} from "../App";

const FavBadge = ({isFavPhotoExist}) => {

  const {state, fetchLikedPhotos} = useContext(AppContext);

  return (
    <div className='fav-badge' onClick={() => fetchLikedPhotos(state.favorite)}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} />
    </div>
  )
};

export default FavBadge;