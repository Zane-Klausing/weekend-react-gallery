import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList';


function App() {
  let [galleryData, setGalleryLData] = useState([])

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGalleryLData(response.data)
      })
      .catch(err => {
        alert('error getting gallery');
        console.log(err);
      })
  }









    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <table className="App-body">
          <tbody>
            <GalleryList galleryData={galleryData}/>
          </tbody>
        </table>
      </div>
    );
}

export default App;
