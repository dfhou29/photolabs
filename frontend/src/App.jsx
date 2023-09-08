import React from 'react';


import './App.scss';
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";



// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/*<PhotoList/>*/}
      <TopicList/>
    </div>
  );
};

export default App;