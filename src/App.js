import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ytcsearch from './components/Ytcsearch';
import {Route,Router, Routes } from 'react-router-dom'
import SearchResult from './components/SearchResult';

import { useState, useEffect } from "react";
import axios from 'axios';







function App() {
   //the useEffect that controls the effect of gettint the items
  useEffect(() => {
    getItems();
  },[])
  
  
  const[items, setItems] = useState([]);//the state for the api
  const[loading, setLoading] = useState(false);// this checks if the api has been loaded
  const[error, setError] = useState(null);// this loads the error
  //the axios getting the api data
  const getItems = () => {
    axios.get("http://universities.hipolabs.com/search?")
      .then(res => {
        setItems(res.data);
        setLoading(true);
      },
      
      (error) =>{
        setLoading(true);
        setError(error);
      }
      )
  };

  const [isApp, setIsApp] = useState(false);
  const [isBio, setIsBio] = useState(false);
  
  const toggleApp = () => {
    setIsApp(!isApp);
    
  }
  const toggleBio = () => {
    
    setIsBio(!isBio)
  }
  
  const togglePage = () => {
    //setIsApp(false)
    
    //setIsApp(isApp => false) // not working as planned
    //setIsBio(false)
  }
  


  return (
    <div onClick= {togglePage}>
    
    <Routes>
      <Route path = "/" element = {<Ytcsearch 
        items = {items}
        loading = {loading}
        error = {error}
        toggleApp = {toggleApp}
        toggleBio = {toggleBio}
        isBio = {isBio}
        isApp = {isApp}
        
        
      />} />
      <Route path = "/search/:searchtext" element = {<SearchResult
        items = {items}
        loading = {loading}
        error = {error}
      />} />
    </Routes>
    
    </div>
    
  );
}

export default App;

/*
  <Routes>
      <Route path = "/" render = {props => <Ytcsearch {...props} />} />
      <Route path = "/search/:searchtext" render={props => <SearchResult {...props} />} />
      
    </Routes>

      <Header/>
      <Search
      items = {items}
      loading = {loading}
      error = {error}
      placeholder= {'Enter a country name'}
      />
      <Footer/>
    */