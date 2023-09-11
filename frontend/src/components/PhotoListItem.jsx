import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({displayItem, state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}) => {

  const {
    urls: {regular, full},
    user: {profile, username},
    location: {city, country},
  } = displayItem;


  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={isSelected(displayItem.id)} onClick={() => {
        updateToFavPhotoIds(displayItem);
        setPhotoSelected(displayItem)
      }}/>
      <img src={state.detailModal ? regular : full} alt="photo" className="photo-list__image"
           onClick={() => onClosePhotoDetailsModal(displayItem)}/>

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