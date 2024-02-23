 /*import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState('');

 /* useEffect(() => {
    dogImage()
  },[]) */
 /* function dogImage() {
 
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res.data);
      setDog(res.data.message);                                            // Update state with the received image URL
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
  }

  return (
    <div>
      <button onClick={dogImage}>Display Dog Image </button>
      {dog && <img src={dog}  />}
    </div>
  );
}

export default App;  */


import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetchDogImage();
  }, []); 

  function fetchDogImage() {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        //console.log(res.data);
        setDogImage(res.data.message);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }

  return (
    <div>
      {dogImage && <img src={dogImage}  />}
    </div>
  );
}

export default App;