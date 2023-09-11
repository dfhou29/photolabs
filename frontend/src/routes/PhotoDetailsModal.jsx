import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from "../mocks/photos";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({detailModal, setDetailModal, isSelected, detailItem, setDetailItem, handleLike}) => {


  const similarPhotos = [];
  console.log(detailItem.id);
  for (const photo in detailItem['similar_photos']) {
    similarPhotos.push(detailItem['similar_photos'][photo]);
  }





  return (<div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => setDetailModal(false)}/>
      </button>
      <div className="photo-details-modal__images">
        {/*<PhotoList photos={[detailItem]} favorite={favorite} setFavorite={setFavorite} detailModal={detailModal} setDetailModal={setDetailModal} detailItem={detailItem} setDetailItem={setDetailItem}/>*/}
        <div>
          <PhotoFavButton selected={isSelected(detailItem.id)} onClick={()=>handleLike(detailItem)}/>
          <img src={detailItem.urls.full} alt="profile picture" className="photo-details-modal__image"/>
          {/*<div className="photo-details-modal__photographer-details">*/}
          {/*  <p>{detailItem.user.name}</p>*/}
          {/*  <p>{detailItem.location.city}, {detailItem.location.country}</p>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} detailModal={detailModal}
                   setDetailModal={setDetailModal} detailItem={detailItem} setDetailItem={setDetailItem} isSelected={isSelected} handleLike={handleLike}/>

      </div>
    </div>)
};

export default PhotoDetailsModal;