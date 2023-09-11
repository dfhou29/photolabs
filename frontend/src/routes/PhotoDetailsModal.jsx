import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({detailModal, setDetailModal, isSelected, detailItem, setDetailItem, handleLike}) => {


  const similarPhotos = [];
  console.log(detailItem);
  for (const photo in detailItem['similar_photos']) {
    similarPhotos.push(detailItem['similar_photos'][photo]);
  }


  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={() => setDetailModal(false)}/>
        </button>
      </div>

      <div className="photo-details-modal__images">
        <PhotoFavButton selected={isSelected(detailItem.id)} onClick={() => handleLike(detailItem)}/>
        <img src={detailItem.urls.full} alt="profile picture" className="photo-details-modal__image"/>
        <div className="photo-list__user-details">
          <img src={detailItem.user.profile} alt="profile picture" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            <p>{detailItem.user.name}</p>
            <p className="photo-list__user-location">{detailItem.location.city}, {detailItem.location.country}</p>
          </div>
        </div>
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <div>
          <PhotoList photos={similarPhotos} detailModal={detailModal}
                     setDetailModal={setDetailModal} detailItem={detailItem} setDetailItem={setDetailItem}
                     isSelected={isSelected} handleLike={handleLike}/>
        </div>


      </div>
    </div>)
};

export default PhotoDetailsModal;