import React from 'react';
import '../style/App.css';
import Nav from './Nav';
import MusicBar from "./MusicBar";
import HetGeluid from "./HetGeluid";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Nav />
        <Main/>
      <MusicBar/>
    </div>
  );
}

export default App;
