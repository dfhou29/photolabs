import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoList from "./components/PhotoList";



// const populateListItems = (count) => {
//   const listItems = [];
//   for (let x = 0; x < count; x++) {
//     listItems.push(
//       <PhotoListItem key={sampleDataForPhotoListItem.id}
//                      image={sampleDataForPhotoListItem.imageSource}
//                      profile={sampleDataForPhotoListItem.profile}
//                      username={sampleDataForPhotoListItem.username}
//                      city={sampleDataForPhotoListItem.location.city}
//                      country={sampleDataForPhotoListItem.location.country}
//       />);
//   }
//   return listItems;
// }


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoList/>
    </div>
  );
};

export default App;