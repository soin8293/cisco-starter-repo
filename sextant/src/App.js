import React from 'react';
import './App.css';
import PublicIPComponent from './PublicIPComponent';
import Banner from './Banner';
import Exhibit from './Exhibit';
//import React, { useState } from 'react';
//import { Tab, Menu, Segment, Button } from 'semantic-ui-react'
function App() {
  return (
    <div className="App">
      <header>
      <Banner />
      </header>
        <div className="ip-container"> 
          <PublicIPComponent ipVersion="ipv4" />
          <PublicIPComponent ipVersion="ipv6" />
        </div>
      <Exhibit />
  </div>
  );
}

export default App;
