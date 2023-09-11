import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <li key={item.id}>
          <PhotoListItem
            displayItem={item}
            state={state}
            isSelected={isSelected}
            updateToFavPhotoIds={updateToFavPhotoIds}
            setPhotoSelected={setPhotoSelected}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;