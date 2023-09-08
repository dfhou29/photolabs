import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({image, profile, username, city, country}) => {

  const [select, setSelect] = useState(false);

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={select} onClick={()=>setSelect(true)}/>
      <img src={image} alt="photo" className="photo-list__image"/>

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