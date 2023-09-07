import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div key={props.key} className="photo-list__item">
      <img src={props.image} alt="photo" className="photo-list__image"/>

      <div className="photo-list__user-details">
        <img src={props.profile} alt="profile picture" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>

    </div>


  )
};

export default PhotoListItem;