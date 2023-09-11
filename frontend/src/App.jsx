import React, {useState} from 'react';


import './App.scss';

import HomeRoute from "./routes/HomeRoute";

import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import useApplicationData from "./hooks/useApplicationData";



// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute state={state} isSelected={isSelected} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>
      {state.detailModal && <PhotoDetailsModal state={state} isSelected={isSelected} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>}
    </div>
  );
};

export default App;