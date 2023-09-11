import React, {useState} from 'react';


import './App.scss';

import HomeRoute from "./routes/HomeRoute";

import PhotoDetailsModal from "./routes/PhotoDetailsModal";



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorite, setFavorite] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const [detailItem, setDetailItem] = useState();

  const [select, setSelect] = useState([]);

  const isSelected =  (id) => {
    return select.includes(id);
  }

  const handleLike = (item) => {
    if (isSelected(item.id)) {
      setSelect([...select].filter(itemId => itemId !== item.id));
      setFavorite(prev => [...favorite].filter(id => id !== item.id) )
      console.log('item removed');
    } else {
      setSelect(prev => [...select, item.id]);
      setFavorite(prev => [...favorite, item.id]);
      console.log('item added');
    }
  }

  return (
    <div className="App">
      <HomeRoute detailModal={detailModal} setDetailModal={setDetailModal} favorite={favorite} detailItem={detailItem} setDetailItem={setDetailItem} handleLike={handleLike} isSelected={isSelected}/>
      {detailModal && <PhotoDetailsModal setDetailModal={setDetailModal} favorite={favorite} detailItem={detailItem} setDetailItem={setDetailItem} isSelected={isSelected} handleLike={handleLike}/>}
    </div>
  );
};

export default App;