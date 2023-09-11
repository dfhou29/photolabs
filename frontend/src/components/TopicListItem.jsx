import React from "react";

import "../styles/TopicListItem.scss";
const TopicListItem = ({slug, title, fetchPhotoByTopic}) => {
  return (
    <div className="topic-list__item" data-slug={slug}>
      <span onClick={fetchPhotoByTopic}>{title}</span>
    </div>
  );
};

export default TopicListItem;