import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({topics, state, fetchPhotoByTopic}) => {
  const isFavPhotoExist = () => {
    return state.favorite.length > 0;
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotoByTopic={fetchPhotoByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist()}/>
    </div>
  )
}

export default TopNavigation;