import React from 'react';
import '../style/App.css';
import RadioInfo from './RadioInfo';
import RadioAudioControls from './RadioAudioControls';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <RadioInfo />
      <RadioAudioControls />
    </div>
  );
}

export default App;
