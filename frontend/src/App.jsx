import React, {useState} from 'react';


import './App.scss';

import HomeRoute from "./routes/HomeRoute";

import PhotoDetailsModal from "./routes/PhotoDetailsModal";



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [detailModal, setDetailModal] = useState(false);


  return (
    <div className="App">
      <HomeRoute setDetailModal={setDetailModal}/>
      {detailModal && <PhotoDetailsModal setDetailModal={setDetailModal}/>}
    </div>
  );
};

export default App;