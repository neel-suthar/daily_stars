import React, { useEffect, useState } from 'react';

import './App.css';
import Nav from './components/Nav';
import NasaPhoto from './components/NasaPhoto';

const apiKey = process.env.REACT_APP_NASA_KEY;

console.log(apiKey);
function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setImageData(data);
      console.log(data);
    }
  }, []);
  return (
    <>
      <Nav />
      <NasaPhoto {...imageData}/>
    </>
  );
}

export default App;
