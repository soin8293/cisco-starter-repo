// PublicIPComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublicIPComponent = ({ ipVersion }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const apiURL = ipVersion === 'ipv6' ? 
      'https://api64.ipify.org?format=json' : 
      'https://api.ipify.org?format=json';

    const getIP = async () => {
      try {
        const response = await axios.get(apiURL);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    getIP();
  }, [ipVersion]);

  return <div>Your public {ipVersion === 'ipv6' ? 'IPv6' : 'IPv4'} address is: {ipAddress}</div>;
};

export default PublicIPComponent;