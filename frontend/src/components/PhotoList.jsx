import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos , favorite, setFavorite, setDetailModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <div key={item.id}>
          <PhotoListItem
            image={item.urls.regular}
            fullImage={item.urls.full}
            profile={item.user.profile}
            username={item.user.username}
            city={item.location.city}
            country={item.location.country}
            similarPhotos={item['similar_photos']}
            setFavorite = {() => setFavorite(prev => [...favorite, item.id])}
            setDetailModal={setDetailModal}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;