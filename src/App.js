import React from 'react';
import './App.css';
import imageInSrc from "./imageInSrc.png";

function App() {
  return (
    <div className="App">
      <h1 className="title">Your name here</h1>
      <div>
        <img className="image" src={imageInSrc} alt="img1"/>
      </div>
      <div>
        <img className="image" src={"/imageInPub.png"} alt="img2"/>
      </div>
    <div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
    </div>
  );
}


export default App;
