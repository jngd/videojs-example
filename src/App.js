import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

const videoJsOptions = {
  autoplay: false,
  controls: true,
  sources: [
    {
      src: 'Between_the_clouds_CCBY_NatureClip.mp4',
      type: 'video/mp4',
    },
  ],
};

function App() {
  return (
    <div className="App">
      <VideoPlayer {...videoJsOptions}></VideoPlayer>
    </div>
  );
}

export default App;
