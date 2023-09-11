import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, detailModal, setDetailModal, setDetailItem, handleLike, isSelected}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <li key={item.id}>
          <PhotoListItem
            displayItem={item}
            image={item.urls.regular}
            fullImage={item.urls.full}
            profile={item.user.profile}
            username={item.user.username}
            city={item.location.city}
            country={item.location.country}
            similarPhotos={item['similar_photos']}
            detailModal={detailModal}
            setDetailModal={setDetailModal}
            setDetailItem = {setDetailItem}
            handleLike={handleLike}
            isSelected={isSelected}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;