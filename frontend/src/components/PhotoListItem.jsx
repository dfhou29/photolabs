import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({image, fullImage, profile, username, city, country, setFavorite, setDetailModal}) => {

  const [select, setSelect] = useState(false);

  const handleLike = () => {
    setSelect(true);
    setFavorite();
  }

  const handleModal = () => {
    setDetailModal(true);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={select} onClick={()=>handleLike()}/>
      <img src={image} alt="photo" className="photo-list__image" onClick={() => handleModal()} />

      <div className="photo-list__user-details">
        <img src={profile} alt="profile picture" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>

    </div>


  )
};

export default PhotoListItem;