// LatencyComponent.js
import React, { useState, useEffect } from 'react';

const LatencyComponent = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:55455');

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const timestamp = parseInt(event.data);
      const currentLatency = Date.now() - timestamp;
      setLatency(currentLatency);
    };

    return () => websocket.close();
  }, []);

  return (
    <div>
      <h2>Latency: {latency ? `${latency}ms` : 'Calculating...'}</h2>
    </div>
  );
};

export default LatencyComponent;