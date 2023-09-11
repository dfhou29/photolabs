import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({displayItem, image, fullImage, profile, username, city, country, detailModal, setDetailModal, setDetailItem, handleLike, isSelected}) => {



  const handleModal = () => {
    setDetailModal(true);
    setDetailItem(displayItem);
  }
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={isSelected(displayItem.id)} onClick={()=>handleLike(displayItem)}/>
      <img src={detailModal ? fullImage: image} alt="photo" className="photo-list__image" onClick={() => handleModal()} />

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