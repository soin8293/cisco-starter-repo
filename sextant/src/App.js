import './App.css';
import Banner from './Banner';
//import React, { useState } from 'react';
//import { Tab, Menu, Segment, Button } from 'semantic-ui-react'
import Exhibit from './Exhibit';
function App() {
  return (
    <div className="App">
      <header>
      <Banner />
      </header>
      <Exhibit />
  </div>
  );
}

export default App;
