import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../style/App.css';
import Nav from './Nav';
import MusicBar from "./MusicBar";
import Main from "./Main";
import TabsNav from "./TabsNav";
import TimeTableList from "./TimeTableList";
import TheSound from "./TheSound";

function App() {
  return (
      <Router>
    <div className="App">
      <Nav />
        <Main/>
        <TabsNav/>
        <Route path="/" exact component={TimeTableList} />
        <Route path="/hetgeluid" component={TheSound}/>
      <MusicBar/>
    </div>
      </Router>
  );
}

export default App;
