import React from 'react';
import ReactDOM from 'react-dom';
import LatencyComponent from './src/LatencyComponent';


const App = () => {
  return (
    <div>
      <h1>Pylon Latency Monitor!!</h1>
      <LatencyComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
